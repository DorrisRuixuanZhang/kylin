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
    addTableIndexTitle: 'Add Table Index',
    editTableIndexTitle: 'Edit Table Index',
    tableIndexName: 'Table Index Name',
    tableIndexContent: 'Table Index Content:',
    selectColumns: 'Select Columns',
    selectAllColumns: 'Select All Columns',
    includeColumns: 'Columns',
    clearAll: 'Clear All',
    select: 'Selected',
    catchup: 'Build index now',
    sortLimitTip: 'At most nine \'sort\' column is allowed.',
    sort: 'Order',
    tableIndex: 'table index',
    cofirmEditTableIndex: 'After submitting, the system will create a new table index based on your changes. Meanwhile, the original index will be changed to "LOCKED" status and still be available for querying. The index will be deleted after the new table index is built successfully. Please note that the deleted index cannot be recovered. Are you sure you want to submit?',
    saveAndBuild: 'Save and Build',
    cardinality: 'Cardinality',
    order: 'Order',
    moveTop: 'Move to top',
    moveUp: 'Move up',
    moveDown: 'Move down',
    tableIndexShardByTips: 'Please select columns for detail query. To enhance the query performance, please move the frequently used dimensions to the top of the list, and set a column with relatively large cardinality as ShardBy.',
    filterByColumns: 'Search by column name',
    excludeTableCheckbox: 'Display columns excluded from recommendations',
    excludeTableCheckboxTip: 'Exclude Rules can be modified in project setting',
    excludedTableIconTip: 'Excluded from recommendations',
    manyToManyAntiTableTip: 'For the tables excluded from recommendations, if the join relationship of a table is One-to-Many or Many-to-Many, dimensions from this table can\'t be used in indexes. ',
    indexTimeRange: 'Index’s Time Range',
    indexTimeRangeTips: 'The data range that the indexes will be built in. With "Batch and Streaming" selected, there will be generated batch indexes and streaming indexes with same content respectively. ',
    noIndexRangeByHybrid: 'Select index’s data range to display available columns.',
    refuseAddIndexTip: 'Can\'t add streaming indexes. Please stop the streaming job and then delete all the streaming segments.'
  }
}
