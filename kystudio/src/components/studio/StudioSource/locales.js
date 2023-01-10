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
    updateAt: 'Last updated time:',
    delete: 'Delete',
    reload: 'Reload',
    general: 'Storage',
    columns: 'Columns',
    sample: 'Sample',
    sampling: 'Sample Data',
    unloadTableTitle: 'Delete Source Table',
    unloadTable: 'Do you need to delete the table {tableName}?',
    unloadSuccess: 'Delete Table successfully.',
    affactUnloadInfo: 'The source table {tableName} is referenced by a running job. Please confirm whether to delete this table and discard the running job.',
    dropTabelDepen: 'This source table {tableName} is referenced by models, whose total storage size is {storageSize}. Please confirm whether to only delete this table or delete all.<br/><br/>Delete Table Only: Only delete this source table, and stop related jobs. While {dropTabelDepenSub} the referenced models will be kept (BROKEN, can be fixed by reloading the table).<br/><br/>Delete All: Delete this source table, {dropTabelDepenSub2} the referenced models, and stop/delete related jobs. {dropTabelDepenSub3}',
    dropTabelDepen2: 'This source table {tableName} is referenced by models or snapshot, whose total storage size is {storageSize}. Please confirm whether to only delete this table or delete all.<br/><br/>Delete Table Only: Only delete this source table with the snapshot, and stop related jobs. While {dropTabelDepenSub} the referenced models will be kept (BROKEN, can be fixed by reloading the table).<br/><br/>Delete All: Delete this source table with the snapshot, {dropTabelDepenSub2} the referenced models, and stop/delete related jobs.  {dropTabelDepenSub3}',
    dropTabelDepenSub: ' the attached Hive table and ',
    dropTabelDepenSub2: 'attached Kafka table,',
    dropTabelDepenSub3: 'While the attached Hive table will be kept.',
    delKafkaTableAllTips: 'This source table and the referenced models would be deleted, while the attached Hive table will be kept. The related jobs would be stopped. Are you sure you want to Delete All? ',
    delHiveTableAllTips: 'This source table, attached Kafka table, and the referenced models would be deleted. The related jobs would be stopped. Are you sure you want to Delete All? ',
    dropTabelDepen3: 'This source table {tableName} is referenced snapshot, whose total storage size is {storageSize}. Please confirm whether to only delete this table and snapshot.',
    remindLoadRange: 'If you have tables which increase by day, it is suggested to select the corresponding date column as partition key. Especially, tables containing historical data, in which new data is added into the newest partition.',
    remindLoadRangeTitle: 'Add Partition',
    sampleDesc: 'The system will sample the table {tableName}.',
    sampleDesc1: 'Sampling range should not exceed ',
    sampleDesc2: ' rows.',
    sampleDialogTitle: 'Table Sampling',
    invalidType: 'Please enter an integer',
    minNumber: 'Input should be no less than 10,000 rows',
    maxNumber: 'Input should be no larger than 20,000,000 rows',
    confirmSampling: 'The source table {table_name} has a related sample job running, it will be discarded if you re-submit a new sample job. Do you really want to re-submit a new one?',
    samplingTableJobBeginTips: 'Sampling job for table [{tableName}] has been submitted successfully, you can view the job progress in the Monitor page.',
    deleteAll: 'Delete All',
    deleteTable: 'Delete Table',
    kafkaCluster: 'Kafka Info'
  }
}
