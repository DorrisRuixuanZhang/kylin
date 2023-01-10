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
    dataRangeValValid: 'Please enter build date range',
    modelBuild: 'Load Data',
    buildRange: 'Build Range',
    startDate: 'Start Date',
    endDate: 'End Date',
    to: 'To',
    loadExistingData: 'Load existing data',
    loadExistingDataDesc: 'Load new records existing from the last load job.',
    customLoadRange: 'Customize Load Range',
    detectAvailableRange: 'Detect available range',
    invaildDate: 'Please enter a valid date',
    overlapsTips: 'The range of load data overlaps with the current segments. Please modify.',
    segmentHoletips: 'Gap(s) exists in the current segment range. The data within the gap can\'t be queried. Do you want to add the following segments?',
    fixSegmentTitle: 'Fix Segment',
    ignore: 'Ignore',
    fixAndBuild: 'Fix and Build',
    chooseBuildType: 'Please select a build type',
    build: 'Load Data',
    buildIndex: 'Build Index',
    incremental: 'Incremental Build',
    fullLoad: 'Full Build',
    complete: 'Build Index',
    incrementalTips: 'The system could incrementally load data based on the selected partition column.',
    fullLoadTips: 'All data under this model would be built.',
    fullLoadBuildTips: 'Please note that all data (in total {storageSize}) would be rebuilt. ',
    completeTips: 'The data would be incrementally built based on the chosen partition column.',
    partitionDateColumn: 'Time Partition Column',
    noPartition: 'No Partition',
    dateFormat: 'Time Format',
    pleaseInputColumn: 'Please select or enter a customized time format',
    detectFormat: 'Detect partition time format',
    showMore: 'View partition settings',
    showLess: 'Hide partition settings',
    pleaseSetDataRange: 'Please select the time range to load data and build index',
    changeBuildTypeTips: 'With partition setting changed, all segments and data would be deleted. The model couldn’t serve queries. Meanwhile, the related ongoing jobs for building index would be discarded. ',
    changeSegmentTip1: 'You have modified the partition column as {tableColumn}, time format {dateType}. After saving, all segments under the model {modelName} will be purged. You need to reload the data, the model cannot serve related queries during data loading. Please confirm whether to submit?',
    changeSegmentTip2: 'You have modified as no partition column. After saving, all segments under the model {modelName} will be purged . The system will automatically rebuild the index and full load the data. The model cannot serve related queries during index building. Please confirm whether to submit?',
    changeSegmentTips: 'With partition setting changed, all segments and data would be deleted. The model couldn\'t serve queries. Meanwhile, the related ongoing jobs for building index would be discarded. <br/>Do you want to continue?',
    unableComplete: 'All indexes of this model are complete and do not need to be completed.',
    invaildDateNoEqual: 'The start time (inclusive) cannot be equal to the end time (not included)',
    changeBuildTypeTipsConfirm: 'You have modified as full load. After saving, all segments under the model {modelName} will be purged . The system will automatically rebuild the index and full load the data. The model cannot serve related queries during index building. Please confirm whether to submit?',
    partitionFirst: 'Please set the time partition column first',
    segmentTips: 'Segment is used to define model\'s data range (served for queries). The data range of segments in total equals the model\'s data range. Queries within the range could be answered by indexes or pushdown engine. Queries out of the range would have no results.',
    addRangeTitle: 'Please select a segment\'s data range',
    willAddSegmentTips: 'A segment for full build would be added and served for queries.',
    saveAndBuild: 'Save and Build Index',
    saveAndAddIndex: 'Save and Add Index',
    onlySaveTip1: 'An empty segment (with no index) would be created after saving. Please note that queries would be answered by the pushdown engine when  they hit empty segments. ',
    onlySaveTip2: 'Do you want to continue?',
    multiPartitionValue: 'Select Subpartition Values ',
    subPartitionAlert: 'Please ensure that the subpartition value is consistent with what it is in the source table (case-sensitive). Otherwise, the built data will be empty. The new values added here would be saved to the subpartition value list of this model.',
    selectInput: 'Select Input',
    batchInput: 'Batch Input',
    pleaseInputOrSearch: 'Please add or search select',
    multiPartitionPlaceholder: 'Please select or import, use comma (,) to separate multiple values',
    multipleBuild: 'Build multiple subpartitions in parallel',
    multipleBuildTip: 'By default, only one build job would be generated for all subpartitions. With this option checked, multiple jobs would be generated and subpartitions would be built in parallel.',
    duplicatePartitionValueTip: 'Some values are not valid, as they are duplicated, or have been built.',
    removeDuplicateValue: 'Clear invalid values',
    multilevelPartition: 'Subpartition Column',
    multilevelPartitionDesc: 'A column from the selected table could be chosen. The models under this project could be partitioned by this column in addition to time partitioning. ',
    selectAllSubPartitions: 'All Subpartition Values',
    habirdModelBuildTips: 'Only batch index(es) will be built right now. Streaming index(es) will be built when streaming job is started again.',
    disableChangePartitionTips: 'The time partition settings can\'t be modified for fusion model and streaming model.',
    previewFormat: 'Format preview: ',
    formatRule: 'The customized time format is supported. ',
    viewDetail: 'More info',
    rule1: 'Support using some elements of yyyy, MM, dd, HH, mm, ss, SSS in positive order',
    rule2: 'Support using - (hyphen), / (slash), : (colon), English space as separator',
    rule3: 'When using unformatted letters, use a pair of \' (single quotes) to quote, i.e. \'T\' will be recognized as T',
    segmentDateRangeTips: 'The data range is left closed and right open, the actual query range is the first 1 millisecond of the right timestamp.',
    secondStoragePartitionTips: 'Can\'t build index. When the model uses incremental load method and the tiered storage is ON, the time partition column must be added as a dimension.'
  }
}
