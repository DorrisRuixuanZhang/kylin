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
    autoMerge: 'Auto-Merge',
    retension: 'Retension',
    volatile: 'Volatile',
    textInput: 'Text Input',
    segmentPeriod: 'Segment Period:',
    segmentPeriod2: 'Segment Period',
    chooseStartDate: 'Choose Start Time',
    chooseEndDate: 'Choose End Time',
    primaryPartition: 'Primary Partition',
    pleaseChoose: 'Please Choose',
    merge: 'Merge',
    segmentSetting: 'Segment Setting',
    selectContinueSegments: 'Please select segments that have no gaps in between.',
    pleaseSelectSegments: 'Please select at least one segment',
    confirmDelSycSegments: 'Are you sure you want to load the table index data of the following segments to the tiered storage?',
    confirmDeleteSegments: 'Are you sure you want to delete the following segments? Please note that this operation cannot be undone.',
    confirmMergeSegments: 'Do you really need to merge {count} segments?',
    pleaseSelectStartOrEndSegments: 'Please select first or last continuous segments.',
    segmentWarning: 'Please confirm whether to delete below segments, which will cause the model {modelName} to be warning status and the query results will be empty when querying those data ranges. Please note that this operation cannot be undone.',
    storageSize: 'Storage',
    secStorage: 'Tiered Storage',
    sync: 'Load to the Tiered Storage',
    delSync: 'Delete from the Tiered Storage',
    syncTips: 'Only supports loading the online or warning segment(s) containing base table index.',
    delSyncTips: 'Only supports deleting the loaded segment(s).',
    segmentDetail: 'Segment Details',
    segmentID: 'Segment ID',
    segmentName: 'Segment Name',
    segmentPath: 'Segment Path',
    fileNumber: 'File Number',
    storageSize1: 'Storage',
    startTime: 'Start Time',
    endTime: 'End Time',
    secStorageNode: 'Tiered Storage Node',
    tableIndexSegmentPath: 'Table Index Segment Path:',
    tableIndexFileNumber: 'Table Index File Number:',
    tableIndexStorageSize: 'Table Index Storage Size:',
    fullLoad: 'Full Load',
    confirmRefreshSegments: 'Are you sure you want to refresh the following segment(s)? The data would be refreshed according to the original indexes in the segment.',
    confirmRefreshSegments2: 'Refresh segment would refresh data and build index. The following segments have incomplete indexes. Please select how to build. The other segments would build their current indexes.',
    segmentIsEmpty: 'The model can\'t be purged as it has no segments.',
    refreshSegmentsTitle: 'Refresh Segment',
    deleteSegmentTip: 'Delete Segment',
    mergeSegmentTip: 'Merge Segment',
    showDetail: 'Show Detail',
    ONLINE: 'Queries within the range could be answered  by indexes or pushdown engine already.',
    LOADING: 'The data in the segment is loading.',
    REFRESHING: 'A new segment would be automatically generated when refreshing a segment. This new segment is marked as "REFRESHING". The previous segment would be automatically deleted once complete refreshing.',
    MERGING: 'A new segment would be automatically generated when merging segments. This new segment is marked as "MERGING". The previous segments would be automatically deleted once complete merging.',
    LOCKED: 'The segment would be locked when it\'s been referenced by a "REFRESHING" or "MERGING" segment. A "LOCKED" segment can\'t be refreshed and deleted.',
    WARNING: 'Data in the source table for this segment was changed. The query results might be inaccurate. Please try refreshing.',
    fix: 'Fix',
    fixTips: 'Automatic fix for segments with gaps in between',
    addSegment: 'Add Segment',
    modifyTime: 'Last Updated Time',
    sourceRecords: 'Source Records',
    segmentList: 'Segment List',
    segmentSubTitle: 'Add segments to define the model\'s data range for serving queries.',
    currentIndexes: 'Current Index Amount',
    buildCurrentIndexes: 'Build current indexes',
    buildAllIndexes: 'Build all indexes',
    buildAllIndexesTips: 'To ONLY build all indexes to the selected segments, it\'s recommended to build index on \'Index Overview\' tab. It would save cost for refreshing data.',
    viewSubParValuesBtn: 'View model subpartition Values',
    subPratitionAmount: 'Subpartition',
    subPratitionAmountTip: 'Amount of the built ones / Total amount',
    subParValuesTitle: 'Subpartition',
    buildSubSegment: 'Build Subpartition',
    searchPlaceholder: 'Search by subpartition value',
    buildSubParDesc: 'The indexes in this subpartition would be the same as the current segment ',
    multiPartitionPlaceholder: 'Please select or import, use comma (,) to separate multiple values',
    build: 'Build',
    selectSubPartitionValues: 'Select Subpartition Values',
    multipleBuild: 'Build multiple subpartitions in parallel',
    multipleBuildTip: 'By default, only one build job would be generated for all subpartitions. With this option checked, multiple jobs would be generated and subpartitions would be built in parallel.',
    refreshSubSegmentTitle: 'Refresh Subpartition',
    refreshSubSegmentTip: 'Are you sure you want to refresh the selected {subSegsLength} subpartition(s)? The data would be refreshed according to the original indexes in the segment {indexes}.',
    deleteSubSegmentTitle: 'Delete Subpartition',
    deleteSubSegmentTip: 'The deleted subpartition(s) would be gone forever. Are you sure you want to delete the selected {subSegsLength} subpartition(s)?',
    mergeSegmentsTitle: 'Merge Segment',
    mergeSegmentDesc: 'The segments could be merged if the following conditions are met.',
    mergeNotice1: 'Have same index amount',
    mergeNotice2: 'Have same subpartition amount',
    mergeNotice3: 'Be continuous in time (don\'t exist holes)',
    afterMergeSegment: 'The segments would be as follow after being merged:',
    partitionONLINE: 'This subpartition has been built. It could serve queries.',
    partitionLOADING: 'This subpartition is being built now. It could serve queries until the building job is complete.',
    partitionREFRESHING: 'This subpartition is being refreshed now. The original data could still serve queries until the refresh job is complete.',
    duplicatePartitionValueTip: 'Some values are duplicated.',
    removeDuplicateValue: 'Clear invalid values',
    disabledSubPartitionEnter: 'The segment is in {status} status. Subpartitions can\'t be operated at the moment.',
    noIndexTipByBuild: 'You should add indexes first before building.',
    viewSubPartitionTip: 'View Subpartition',
    subPartitionAlert: 'Please ensure that the subpartition value is consistent with what it is in the source table (case-sensitive). Otherwise, the built data will be empty. The new values added here would be saved to the subpartition value list of this model.',
    selectAllSubPartitions: 'All Subpartition Values',
    batch: 'Batch',
    streaming: 'Streaming',
    syncSegmentTip: 'Sync',
    confirmSyncSegments: 'Are you sure you want to load the table index data of the following segments to the tiered storage?',
    refreshErrorTips: 'No index is available to be refreshed. Please check and try again.'
  }
}
