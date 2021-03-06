import conf
import workers

from db.getters.experiment_groups import get_running_experiment_group
from hpsearch.exceptions import ExperimentGroupException
from hpsearch.tasks import base
from hpsearch.tasks.logger import logger
from lifecycles.experiment_groups import ExperimentGroupLifeCycle
from options.registry.groups import GROUPS_CHUNKS
from polyaxon.settings import HPCeleryTasks, Intervals


def create(experiment_group):
    # This is a bit different since hyperband requires an iteration to work correctly
    # May search manager's needs to be updated.
    experiment_group.iteration_manager.create_iteration()
    suggestions = base.get_suggestions(experiment_group=experiment_group)
    if not suggestions:
        logger.error('Experiment group `%s` could not create any suggestion.',
                     experiment_group.id)
        experiment_group.set_status(ExperimentGroupLifeCycle.FAILED,
                                    message='Experiment group could not create new suggestions.')
        return
    experiment_group.iteration_manager.update_iteration_num_suggestions(
        num_suggestions=len(suggestions))

    def send_chunk():
        workers.send(
            HPCeleryTasks.HP_HYPERBAND_CREATE_EXPERIMENTS,
            kwargs={'experiment_group_id': experiment_group.id,
                    'suggestions': chunk_suggestions})

    chunk_suggestions = []
    for suggestion in suggestions:
        chunk_suggestions.append(suggestion)
        if len(chunk_suggestions) == conf.get(GROUPS_CHUNKS):
            send_chunk()
            chunk_suggestions = []

    if chunk_suggestions:
        send_chunk()

    workers.send(
        HPCeleryTasks.HP_HYPERBAND_START,
        kwargs={'experiment_group_id': experiment_group.id, 'auto_retry': True})


@workers.app.task(name=HPCeleryTasks.HP_HYPERBAND_CREATE_EXPERIMENTS, ignore_result=True)
def hp_hyperband_create_experiments(experiment_group_id, suggestions):
    experiment_group = get_running_experiment_group(experiment_group_id=experiment_group_id)
    if not experiment_group:
        return

    try:
        experiments = base.create_group_experiments(experiment_group=experiment_group,
                                                    suggestions=suggestions)
    except ExperimentGroupException:  # The experiments will be stopped
        return

    experiment_group.iteration_manager.add_iteration_experiments(
        experiment_ids=[xp.id for xp in experiments])


@workers.app.task(name=HPCeleryTasks.HP_HYPERBAND_CREATE, ignore_result=True)
def hp_hyperband_create(experiment_group_id):
    experiment_group = get_running_experiment_group(experiment_group_id=experiment_group_id)
    if not experiment_group:
        return

    create(experiment_group=experiment_group)


@workers.app.task(name=HPCeleryTasks.HP_HYPERBAND_START,
                  bind=True,
                  max_retries=None,
                  ignore_result=True)
def hp_hyperband_start(self, experiment_group_id, auto_retry=False):
    if not base.should_group_start(experiment_group_id=experiment_group_id,
                                   task=HPCeleryTasks.HP_HYPERBAND_START,
                                   auto_retry=auto_retry):
        return

    experiment_group = get_running_experiment_group(experiment_group_id=experiment_group_id)
    if not experiment_group:
        return

    should_retry = base.start_group_experiments(experiment_group=experiment_group)
    if should_retry:
        if auto_retry:
            # Schedule another task
            self.retry(countdown=Intervals.EXPERIMENTS_SCHEDULER)
        return

    workers.send(
        HPCeleryTasks.HP_HYPERBAND_ITERATE,
        kwargs={'experiment_group_id': experiment_group_id,
                'auto_retry': auto_retry},
        countdown=None)


@workers.app.task(name=HPCeleryTasks.HP_HYPERBAND_ITERATE,
                  bind=True,
                  max_retries=None,
                  ignore_result=True)
def hp_hyperband_iterate(self, experiment_group_id, auto_retry=False):
    experiment_group = get_running_experiment_group(experiment_group_id=experiment_group_id)
    if not experiment_group:
        return

    if experiment_group.non_done_experiments.count() > 0:
        if auto_retry:
            # Schedule another task, because all experiment must be done
            self.retry(countdown=Intervals.EXPERIMENTS_SCHEDULER)
        return

    iteration_config = experiment_group.iteration_config
    iteration_manager = experiment_group.iteration_manager
    search_manager = experiment_group.search_manager

    iteration_manager.update_iteration()

    if search_manager.should_reschedule(iteration=iteration_config.iteration,
                                        bracket_iteration=iteration_config.bracket_iteration):
        workers.send(
            HPCeleryTasks.HP_HYPERBAND_CREATE,
            kwargs={'experiment_group_id': experiment_group_id},
            countdown=None)
        return

    if search_manager.should_reduce_configs(iteration=iteration_config.iteration,
                                            bracket_iteration=iteration_config.bracket_iteration):
        try:
            iteration_manager.reduce_configs()
        except ExperimentGroupException:
            experiment_group.set_status(ExperimentGroupLifeCycle.FAILED,
                                        message='Experiment group could not create new iteration.')
            return
        workers.send(
            HPCeleryTasks.HP_HYPERBAND_START,
            kwargs={'experiment_group_id': experiment_group_id},
            countdown=None)
        return

    base.check_group_experiments_done(experiment_group_id, auto_retry=auto_retry)
