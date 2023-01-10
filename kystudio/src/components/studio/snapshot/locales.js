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
    snapshotList: 'Snapshot List',
    snapshotDesc: 'The snapshot is a read-only static view of a source table. Snapshot could reduce costs for building costs in some cases.',
    snapshotDesc1: 'Support independent query of dimension table. The snapshot will be used first to answer such queries.',
    snapshotDesc2: 'The dimensions on the dimension table can also serve the query by adding the join key to the aggregate group without generating an index, thereby avoiding the problem of dimension explosion.',
    snapshotDesc3: 'If a table is not referenced by the model, its snapshot cannot serve related queries.',
    snapshot: 'Snapshot',
    searchSnapshot: 'Search Snapshot',
    tableName: 'Table Name',
    databaseName: 'Database Name',
    usage: 'Usage',
    rows: 'Rows',
    storage: 'Storage',
    partitionColumns: 'Partition Column',
    factModels: 'Fact Model Amount',
    lookupModels: 'Lookup Model Amount',
    factModelsTip: 'The number of models referencing this snapshot as a fact table',
    lookupModelsTip: 'The number of models referencing this snapshot as a dimension table',
    modifyTime: 'Last Updated Time',
    ONLINE: 'ONLINE',
    LOADING: 'LOADING',
    REFRESHING: 'REFRESHING',
    status: 'Status',
    refreshTips: '{snapshotNum} snapshot(s) are selected. The following {partitionColNum} snapshot(s) have partition columns. The existing snapshots would still be available until the job is completed.',
    refreshNoPartitionTips: '{snapshotNum} snapshot(s) are selected. The existing snapshots would still be available until the job is completed.',
    refreshNewPartitionTip: 'Only refresh the new partition',
    refreshNewPartitionInfo: 'For the snapshots with partitioning, only the data within new partition would be refreshed (without refreshing the built historical data). It is recommended to check this option if the historical data has no update.',
    refreshTitle: 'Refresh Snapshot',
    deleteTitle: 'Delete Snapshot',
    deleteTips: 'Are you sure you want to delete {snapshotNum} snapshot(s)? Without snapshot, the dimension tables can\'t be queried directly. The dimensions could serve queries until being added as indexes.',
    deleteTablesTitle: 'The running job(s) of the following table(s) would be terminated.',
    authorityTitle: 'Authority Details',
    authorityTips: 'You can\'t operate this snapshot, because you don\'t have access to the following column(s).',
    columns: 'Columns',
    noPartition: 'No Partition',
    hasPartition: 'Has partition',
    partitionTitle: 'Model Partition',
    selectPartitionTitle: 'Select partition column',
    selectPartitionPlaceholder: 'Please select partition column',
    partitionColumnTip: 'Snapshots could be built more efficiently with partitioning for the source table. Please note that the partition column needs to be identical to the first-level partition column of the source table.',
    detectPartition: 'Detect source table partition',
    fetchPartitionErrorTip: 'Can\'t detect the partition column now. Please set it manually.',
    viewAllPartition: 'View All',
    alertPartitionChangeTip: 'If changed to no partition, the next snapshot refresh job would refresh all the data. The existing snapshots would still be available.',
    alertPartitionChangeToOthersTip: 'With the partition column changed, the upcoming snapshot refresh job would refresh all the data according to the new partition column. The existing snapshots would still be available.',
    excludePartitionColumnTip: 'Can\'t save partition settings. The partition column {partitionColumn} hasn\'t been synced yet. Please try reloading the table {tableName} in the data source.',
    jumpToDatasource: 'Reload Now',
    waitMoment: 'Later',
    undefinedPartitionColErrorTip: 'This source table has no partition set yet.',
    partitionValues: 'Partition Value',
    fullRefresh: 'Full refresh',
    incrementalFresh: 'Incremental refresh',
    customRefresh: 'Custom partition value refresh',
    incrementalFreshTip: 'For the snapshots with partitioning, only the data with new partition would be refreshed (without refreshing the built historical data). It is recommended to check this option if the historical data has no update.',
    customRefreshTip: 'Refresh the data according to the selected partition value',
    fullFreshTip: 'Refresh all data',
    readyPartitions: 'Built',
    notReadyPartitions: 'Not built',
    noPartitionValuesError: 'Partition value can\'t be empty'
  }
}
