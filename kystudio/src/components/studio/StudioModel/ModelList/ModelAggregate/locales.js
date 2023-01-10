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
    aggregateGroup: 'Aggregate Group',
    aggregateAmount: 'Index Amount:',
    aggregateIndexTree: 'Index Treemap',
    aggregateDetail: 'Index List',
    content: 'Content',
    order: 'Order',
    storage: 'Storage',
    modifiedTime: 'Last Updated Time',
    queryCount: 'Usage',
    usageTip: 'Times of the index used by queries',
    dataRange: 'Model Data Range',
    dataRangeTips: 'The data range of this model to serve queries',
    noDataRange: 'No data range',
    viewIncomplete: 'View ranges with incomplete indexes',
    searchAggregateID: 'Search index content or ID',
    to: ' to ',
    id: 'Index ID',
    emptyAggregate: 'Empty Index:',
    brokenAggregate: 'Broken Aggregate:',
    buildIndex: 'Build Index',
    aggIndexAdvancedTitle: 'Advanced Setting',
    source: 'Source',
    CUSTOM_AGG_INDEX: 'Custom Aggregate Group',
    RECOMMENDED_AGG_INDEX: 'Recommended Aggregate Index',
    CUSTOM_TABLE_INDEX: 'Custom Table Index',
    RECOMMENDED_TABLE_INDEX: 'Recommended Table Index',
    BASE_AGG_INDEX: 'Base Aggregate Index',
    BASE_TABLE_INDEX: 'Base Table Index',
    customAggIndex: 'Custom Aggregate Group: ',
    customTableIndex: 'Custom Table Index: ',
    indexContentTips: '{dimensionNum} dimension(s), {measureNum} measure(s)',
    tableIndexContentTip: '{num} column(s)',
    viewDetail: 'View Index Details',
    tableIndex: 'Table Index',
    delIndex: 'Delete Index',
    delIndexTip: 'Are you sure you want to delete this index?',
    delIndexesTips: 'Do you want to delete the selected {indexNum} index(es) from all segments? The query performance might be affected once indexes are deleted.',
    editIndex: 'Edit',
    ID: 'ID',
    column: 'Column',
    sort: 'Order',
    update: 'Update',
    updateBaseIndexTitle: 'Update Base Indexes',
    aggDetailTitle: 'Aggregate Detail',
    tabelDetailTitle: 'Table Index Detail',
    noIndexTips: 'You should add indexes first before building.',
    treemapTips: 'The larger area represents the larger data size. The darker color represents higher usage. Different types of indexes are displayed in multiple blocks.',
    NO_BUILD: 'NO BUILD',
    ONLINE: 'ONLINE',
    LOCKED: 'LOCKED',
    BUILDING: 'BUILDING',
    clearAll: 'Clear All',
    bulidTips: 'Are you sure you want to build all indexes under the model "{modelName}"?',
    segmentHoletips: 'This model\'s segment range has gaps in between.  Empty results might be returned when querying those ranges. Please confirm whether to add the following segments to fix.',
    fixSegmentTitle: 'Fix Segment',
    ignore: 'Ignore',
    fixAndBuild: 'Fix and Build',
    index: 'Index',
    indexListBtn: 'Index List',
    recommendationsBtn: 'Recommendations',
    viewIncompleteTitle: 'Data Ranges with Incomplete Indexes',
    incompleteSubTitle: 'Some data ranges of this model have incomplete indexes. To improve query performance, it\'s recommended to select all and build index. ',
    batchBuildSubTitle: 'Please choose which data ranges you\'d like to build with the selected {number} index(es).',
    subTitle: 'This index hasn\'t been fully built to the following data ranges. To improve query performance, it\'s recommended to select all and build index. ',
    deleteIndex: 'Delete Index',
    deleteTips: 'Do you want to delete the selected {number} index(es) from the following segment(s)? The query performance might be affected once indexes are deleted.',
    deletePart: 'Delete from Selected Segment',
    indexSubTitle: 'The data range of this model to serve queries. You could selectively build indexes to desired data ranges based on query requirements.',
    indexesByQueryHistoryTip: 'View the anwered index(es) only',
    indexContent: 'Content',
    indexesContent: 'Index Content',
    viewIndexDetails: 'More details',
    viewAll: 'View all',
    cardinality: 'Cardinality',
    cardinalityColumnTips: 'Total amount of unique data in this column. Could be gathered from sampling.',
    baseIndex: 'Base Index',
    unCreateBaseIndexTip: 'Base Indexes have already been added',
    buildBaseIndexTip: 'Successfully added {baseIndexNum} base index(es). ',
    updateBaseIndexTips: 'A base index would be added. The previous base index might be in "locked" state while still could answer queries. Are you sure you wan to update？',
    disabledDelBaseIndexTips: 'To delete the base table index, please turn off tiered storage for the model.',
    realTimeModelActionTips: 'To build streaming index needs to start the streaming job on the Job page. To add/delete streaming indexes, follow the steps: stop the streaming job, delete all the streaming segments, add/delete streaming indexes, start the streaming job.',
    refuseAddIndexTip: 'Can\'t add streaming indexes. Please stop the streaming job and then delete all the streaming segments.',
    refuseRemoveIndexTip: 'Can\'t delete streaming indexes. Please stop the streaming job and then delete all the streaming segments.',
    disabledBuildIndexTips: 'disabledBuildIndexTips'
  }
}
