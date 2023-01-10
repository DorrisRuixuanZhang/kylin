/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
  'en': {
    dialogTitle: 'Reload Table Metadata',
    reloadNoEffectTip: 'The source table {tableName} has no change on metadata. ',
    reloadEffectTip: 'The source table {tableName} has {changeChar}',
    reloadEffectTip1: ' The system will remove the columns and update the index list',
    reloadEffectTip2: ' Details as below. ',
    sourceTable: 'The source table "{tableName}" has:',
    addColumnsTip: ' {addedColumnsCount} column(s) added',
    reducedColumnsTip: ' {reducedColumnsCount} column(s) reduced',
    dimensionTip: ' {delDimensionCount} dimension(s)',
    measureTip: ' {delMeasureCount} measure(s)',
    indexTip: ' {delIndexCount} index(es)',
    updateBaseIndexTip: '{}updateBaseIndexCount base index(es) would be updated',
    addLayoutTips: '{addLayoutsCount} index(es) would be added',
    afterLoaded: ' After being loaded, ',
    willBeDelete: ' would be deleted from the model(s) using this table.',
    dataTypeChange: ' {dataTypeChangeCount} column(s) changed the data type.',
    refreshCountTip: ' {refreshCount} index(es) would be refreshed and can serve queries after being rebuilt.',
    checkDetail: 'View Details',
    closeDetail: 'Hide Details',
    changedColumnsTip: 'the data type of {changedColumnsCount} column(s) changed',
    tableSample: 'Sample Table Data',
    noEffectSampingTip: 'Sample job is still recommended to do because the table may have change on records. ',
    hasEffectSampingTip: 'Sample job is highly recommended to do because the table has change on metadata.',
    sampleCount: 'Sampling range should not exceed',
    rows: 'rows.',
    reloadSuccess: 'Succeeded to reload source table "{tableName}"',
    sampleSuccess: ' and submit the sampling job',
    structureSuccess: ' and building index task',
    concludingRemarks: ' which can be viewed on the Job page',
    invalidType: 'Please enter an integer',
    invalidLarger: 'Input should be no larger than 20,000,000 rows',
    invalidSmaller: 'Input should be no less than 10,000 rows',
    reloadTips: 'After being reloaded, ',
    modelchangeTip: '{modelCount} model(s) would be BROKEN and can\'t serve queries. You may repair the model(s) manually.',
    snapshotDelTip: '1 snapshot would be Broken and can\'t serve queries.',
    modelChangeAndSnapshotDel: '{modelCount} model(s) and 1 snapshot(s) would be BROKEN and can\'t serve queries.',
    indexCountChangeTip: '{indexCount} index(es) would be refreshed and would not be available for querying until being built;',
    addIndexTip: ' while {addIndexCount} index(es) would be added and would not be available for querying until being built.',
    dimChangeTip: '{dimensionCount} dimension(s)',
    measureChangeTip: '{measureCount} measure(s)',
    indexChangeTip: '{indexCount} index(es)',
    dimAndMeasureAndIndexChangeTip: '{changeChar} would be deleted',
    reloadBtn: 'Reload',
    reloadAndRefresh: 'Reload and Build',
    refreshIndexTip: ' and refresh the affected index(es)',
    rebuildLayout: 'which can serve queries after being rebuilt.'
  }
}
