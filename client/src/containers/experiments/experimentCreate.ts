import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as actions from '../../actions/experiments';
import * as modalActions from '../../actions/modal';
import ExperimentCreate from '../../components/experiments/experimentCreate';
import { AppState } from '../../constants/types';
import { isTrue } from '../../constants/utils';
import { ExperimentModel } from '../../models/experiment';

export function mapStateToProps(state: AppState, params: any) {
  return {
    user: params.match.params.user,
    projectName: params.match.params.projectName,
    isLoading: isTrue(state.loadingIndicators.experiments.global.create),
    errors: state.errors.experiments.global.create,
  };
}

export interface DispatchProps {
  onCreate: (experiment: ExperimentModel) => actions.ExperimentAction;
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.ExperimentAction | modalActions.ModalAction>, params: any): DispatchProps {
  return {
    onCreate: (experiment: ExperimentModel) => dispatch(
      actions.createExperiment(
        params.match.params.user,
        params.match.params.projectName,
        experiment,
        true)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperimentCreate));
