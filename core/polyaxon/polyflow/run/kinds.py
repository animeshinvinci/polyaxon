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

import polyaxon_sdk


class V1RunKind(polyaxon_sdk.V1RunKind):
    CHOICES = (
        (polyaxon_sdk.V1RunKind.JOB, polyaxon_sdk.V1RunKind.JOB),
        (polyaxon_sdk.V1RunKind.SERVICE, polyaxon_sdk.V1RunKind.SERVICE),
        (polyaxon_sdk.V1RunKind.DAG, polyaxon_sdk.V1RunKind.DAG),
        (polyaxon_sdk.V1RunKind.PARALLEL, polyaxon_sdk.V1RunKind.PARALLEL),
        (polyaxon_sdk.V1RunKind.SPARK, polyaxon_sdk.V1RunKind.SPARK),
        (polyaxon_sdk.V1RunKind.DASK, polyaxon_sdk.V1RunKind.DASK),
        (polyaxon_sdk.V1RunKind.FLINK, polyaxon_sdk.V1RunKind.FLINK),
        (polyaxon_sdk.V1RunKind.RAY, polyaxon_sdk.V1RunKind.RAY),
        (polyaxon_sdk.V1RunKind.MPIJOB, polyaxon_sdk.V1RunKind.MPIJOB),
        (polyaxon_sdk.V1RunKind.TFJOB, polyaxon_sdk.V1RunKind.TFJOB),
        (polyaxon_sdk.V1RunKind.PYTORCHJOB, polyaxon_sdk.V1RunKind.PYTORCHJOB),
        (polyaxon_sdk.V1RunKind.SCHEDULER, polyaxon_sdk.V1RunKind.SCHEDULER),
        (polyaxon_sdk.V1RunKind.TUNER, polyaxon_sdk.V1RunKind.TUNER),
        (polyaxon_sdk.V1RunKind.WATCHDOG, polyaxon_sdk.V1RunKind.WATCHDOG),
        (polyaxon_sdk.V1RunKind.NOTIFIER, polyaxon_sdk.V1RunKind.NOTIFIER),
    )
    VALUES = {
        polyaxon_sdk.V1RunKind.JOB,
        polyaxon_sdk.V1RunKind.SERVICE,
        polyaxon_sdk.V1RunKind.DAG,
        polyaxon_sdk.V1RunKind.PARALLEL,
        polyaxon_sdk.V1RunKind.SPARK,
        polyaxon_sdk.V1RunKind.DASK,
        polyaxon_sdk.V1RunKind.FLINK,
        polyaxon_sdk.V1RunKind.RAY,
        polyaxon_sdk.V1RunKind.MPIJOB,
        polyaxon_sdk.V1RunKind.TFJOB,
        polyaxon_sdk.V1RunKind.PYTORCHJOB,
        polyaxon_sdk.V1RunKind.SCHEDULER,
        polyaxon_sdk.V1RunKind.TUNER,
        polyaxon_sdk.V1RunKind.WATCHDOG,
        polyaxon_sdk.V1RunKind.NOTIFIER,
    }
