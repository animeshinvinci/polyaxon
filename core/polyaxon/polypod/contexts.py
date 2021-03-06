#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from typing import Dict

from polyaxon.api import REWRITE_SERVICES_V1, SERVICES_V1
from polyaxon.containers import contexts
from polyaxon.polyflow import V1CompiledOperation
from polyaxon.polypod.specs.contexts import PluginsContextsSpec
from polyaxon.schemas.types import V1ConnectionType
from polyaxon.utils.path_utils import get_path


def resolve_contexts(
    namespace: str,
    owner_name: str,
    project_name: str,
    project_uuid: str,
    run_uuid: str,
    run_name: str,
    run_path: str,
    compiled_operation: V1CompiledOperation,
    artifacts_store: V1ConnectionType,
    connection_by_names: Dict[str, V1ConnectionType],
    iteration: int,
) -> Dict:

    resolved_contexts = {
        "globals": {
            "owner_name": owner_name,
            "project_name": project_name,
            "project_unique_name": "{}.{}".format(owner_name, project_name),
            "project_uuid": project_uuid,
            "run_info": "{}.{}.runs.{}".format(owner_name, project_name, run_uuid),
            "name": run_name,
            "uuid": run_uuid,
            "namespace": namespace,
            "iteration": iteration,
        },
        "init": {},
        "connections": {},
    }
    contexts_spec = PluginsContextsSpec.from_config(compiled_operation.plugins)

    if contexts_spec.collect_artifacts:
        resolved_contexts["globals"]["artifacts_path"] = get_path(
            contexts.CONTEXT_MOUNT_ARTIFACTS, run_path
        )
    elif artifacts_store:
        resolved_contexts["globals"]["artifacts_path"] = get_path(
            artifacts_store.store_path, run_path
        )

    if compiled_operation and not compiled_operation.has_pipeline:
        init = compiled_operation.run.init or []
        init_connections = [i for i in init if i.connection]
        for init_connection in init_connections:
            if connection_by_names[init_connection.connection].schema:
                resolved_contexts["init"][
                    init_connection.connection
                ] = connection_by_names[init_connection.connection].schema.to_dict()

    if compiled_operation.run.connections:
        for connection in compiled_operation.run.connections:
            if connection_by_names[connection].schema:
                resolved_contexts["connections"][connection] = connection_by_names[
                    connection
                ].schema.to_dict()

    if compiled_operation.is_service_run:
        resolved_contexts["globals"]["ports"] = compiled_operation.run.ports
        base_url = "/{service}/{namespace}/{owner_name}/{project_name}/runs/{run_uuid}".format(
            service=REWRITE_SERVICES_V1
            if compiled_operation.run.rewrite_path
            else SERVICES_V1,
            namespace=namespace,
            owner_name=owner_name,
            project_name=project_name,
            run_uuid=run_uuid,
        )
        resolved_contexts["globals"]["base_url"] = base_url

    return resolved_contexts
