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
    dialogHiveTreeLoading: 'loading',
    loadTipHeader: 'How to load source table metadata',
    loadTip1: 'Enter table name as \'database.table\': if you don\'t need to take a look at tables, just enter table name as \'database.table\'; use comma to separate multiple tables\' name; use ENTER to close entering. The maximum is 1000 tables.',
    loadTip2: 'Select tables from tree: click tables in the left tree and the maximum is 1,000 tables.',
    loadTip3: 'Input manually: input the database or table name; use ENTER to complete and comma to separate multiple values.',
    loadHiveTipHeader: 'How to load source table metadata',
    loadHiveTip1: 'Select table: unfold the left source tree and choose a table by clicking it;',
    loadHiveTip2: 'Select database: choose a database will select all tables below it, each batch can load up to 1000 tables;',
    sampling: 'Table Sampling',
    selectedHiveValidateFailText: 'Please enter table name as \'database.table\'.',
    selectAll: 'Select All',
    cleanAll: 'Clean All',
    database: 'Database',
    tableName: 'Table',
    synced: 'Synced',
    existedName: 'Already exists',
    filterTableName: 'Search Database/Table',
    samplingTitle: 'Table Sampling ',
    sampleDesc: 'The system will sample all loaded tables.',
    sampleDesc1: 'Sampling range should not exceed ',
    sampleDesc2: ' rows.',
    invalidType: 'Please enter an integer',
    minNumber: 'Input should be no less than 10,000 rows',
    maxNumber: 'Input should be no larger than 20,000,000 rows',
    selectedDBValidateFailText: 'Please enter database name',
    selectedTableValidateFailText: 'Please enter table name as \'database.table\'.',
    dbPlaceholder: 'Enter database name or select from the left',
    dbTablePlaceholder: 'Enter \'database.table\' or select from the left',
    refreshNow: 'Refresh now',
    refreshIng: 'Refreshing',
    refreshText: 'Can\'t find what you\'re looking for?',
    refreshTips: 'The system caches the source table metadata periodically. If you can\'t find what you\'re looking for, you can refresh immediately or wait for the system to finish refreshing.',
    refreshSuccess: 'Data source refreshed Successfully.',
    refreshError: 'Can\'t refresh data source.',
    noSourceData: 'No data source information. Please try refreshing.<br/>Please ensure there is active job nodes available, and you have permission to access the source tables.',
    loadTableTips1_1: 'Once a database was selected, ',
    loadTableTips1_2: 'only the tables which haven\'t been loaded yet would be loaded',
    loadTableTips1_3: '.',
    loadTableTips2_1: 'You may ',
    loadTableTips2_2: 'manually input the database or table name',
    loadTableTips2_3: ', and press the ENTER key to complete. Use a comma to separate multiple values.',
    loadTableTips3_1: 'Up to ',
    loadTableTips3_2: '1000 tables',
    loadTableTips3_3: ' could be loaded per time.'
  }
}
