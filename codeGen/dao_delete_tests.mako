## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper
    import yacg.util.stringUtils as stringUtils

    templateFile = 'dao_delete_tests.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides the tests for the mongodb dao functions.
*/

import * as fs from "fs";
import * as dotenv from "dotenv";
import * as mongoDb from "mongodb";
import * as dao_find from "../src_generated/dao_find"
import * as dao_delete from "../src_generated/dao_delete"
import * as dao_insert from "../src_generated/dao_insert"
import * as dummy from "types_random"
import * as types from "types"
import * as mongoConnection from "../src/mongo_connection"
import {NO_FILTER} from "../src/mongo_helper";

const randomInserts = 10;

const envPath1 = "packages/dao/__tests__/singleMongo";

if (fs.existsSync(envPath1)) {
    dotenv.config({ path: `$${}{envPath1}/.env` });
} else {
    dotenv.config({ path: "__tests__/singleMongo/.env" });
}

const testDb = `nibelheim_test_$${}{new Date().getTime()}`;

function* indexGenerator(maxItems) {
    let index = 0;
    while (index < maxItems) {
      yield index;
      index++;
    }
}

% for currentType in mongoTypes:
describe('${currentType.name} delete by _id', () => {
    it('delete${currentType.name}ByObjectId found', function(done) {
        try {
            const collectionName = '${currentType.name}_delete_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                insertedElems.push(x);
                promises.push(dao_insert.insert${currentType.name}(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=$${}{elemCount}, retrieved=$${}{numberOfElems}`)
                        }
                        dao_delete.delete${currentType.name}ByObjectId(valuesArray[1], testDb, collectionName)
                            .then(found => {
                                if (found !== 1) {
                                    return done(`didn't delete value with _id in the database: $${}{valuesArray[1]}`);
                                }
                                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount-1) {
                                            return done(`wrong number of entries after delete: expected=$${}{elemCount-1}, retrieved=$${}{numberOfElems2}`)
                                        }
                                        mongoConnection.closeDefaultConnection();
                                        done();
                                    })
                                    .catch(e => {
                                        mongoConnection.closeDefaultConnection();
                                        done(e);
                                    });
                            })
                            .catch(e => {
                                mongoConnection.closeDefaultConnection();
                                done(e);
                            });
                    })
                    .catch(e => {
                        mongoConnection.closeDefaultConnection();
                        done(e);
                    });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: $${}{e}`);
        }
    });

    it('delete${currentType.name}ByObjectId not found', function(done) {
        try {
            const collectionName = '${currentType.name}_delete_2';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                insertedElems.push(x);
                promises.push(dao_insert.insert${currentType.name}(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=$${}{elemCount}, retrieved=$${}{numberOfElems}`)
                        }
                        const objectId = new mongoDb.ObjectId();
                        dao_delete.delete${currentType.name}ByObjectId(String(objectId), testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`deleted something with not inserted _id in the database: $${}{valuesArray[1]}`);
                                }
                                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after delete: expected=$${}{elemCount-1}, retrieved=$${}{numberOfElems2}`)
                                        }
                                        mongoConnection.closeDefaultConnection();
                                        done();
                                    })
                                    .catch(e => {
                                        mongoConnection.closeDefaultConnection();
                                        done(e);
                                    });
                            })
                            .catch(e => {
                                mongoConnection.closeDefaultConnection();
                                done(e);
                            });
                    })
                    .catch(e => {
                        mongoConnection.closeDefaultConnection();
                        done(e);
                    });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: $${}{e}`);
        }
    });
});

    % if modelFuncs.hasKey(currentType):
<%
    keyProperty = modelFuncs.getKeyProperty(currentType)
%>
describe('${currentType.name} delete by key', () => {
    it('delete${currentType.name}ByKey found', function(done) {
        try {
            const collectionName = '${currentType.name}_delete_3';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                insertedElems.push(x);
                promises.push(dao_insert.insert${currentType.name}(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=$${}{elemCount}, retrieved=$${}{numberOfElems}`)
                        }
                        const keyValue = insertedElems[2].${keyProperty.name};
                        if (!keyValue) {
                            mongoConnection.closeDefaultConnection();
                            return done("key value (${keyProperty.name}) is undefined or null");
                        }
                        dao_delete.delete${currentType.name}ByKey(keyValue, testDb, collectionName)
                            .then(found => {
                                if (found !== 1) {
                                    return done(`didn't delete value with key in the database: $${}{valuesArray[1]}`);
                                }
                                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount-1) {
                                            return done(`wrong number of entries after delete: expected=$${}{elemCount-1}, retrieved=$${}{numberOfElems2}`)
                                        }
                                        mongoConnection.closeDefaultConnection();
                                        done();
                                    })
                                    .catch(e => {
                                        mongoConnection.closeDefaultConnection();
                                        done(e);
                                    });
                            })
                            .catch(e => {
                                mongoConnection.closeDefaultConnection();
                                done(e);
                            });
                    })
                    .catch(e => {
                        mongoConnection.closeDefaultConnection();
                        done(e);
                    });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: $${}{e}`);
        }
    });

    it('delete${currentType.name}ByKey not found', function(done) {
        try {
            const collectionName = '${currentType.name}_delete_4';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                insertedElems.push(x);
                promises.push(dao_insert.insert${currentType.name}(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=$${}{elemCount}, retrieved=$${}{numberOfElems}`)
                        }
                        const x: types.${currentType.name} = dummy.random${currentType.name}();
                        const keyValue = x.${keyProperty.name};
                        if (!keyValue) {
                            return done("key value (${keyProperty.name}) is undefined or null");
                        }
                        dao_delete.delete${currentType.name}ByKey(keyValue, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`deleted something with not inserted _id in the database: $${}{valuesArray[1]}`);
                                }
                                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after delete: expected=$${}{elemCount-1}, retrieved=$${}{numberOfElems2}`)
                                        }
                                        mongoConnection.closeDefaultConnection();
                                        done();
                                    })
                                    .catch(e => {
                                        mongoConnection.closeDefaultConnection();
                                        done(e);
                                    });
                            })
                            .catch(e => {
                                mongoConnection.closeDefaultConnection();
                                done(e);
                            });
                    })
                    .catch(e => {
                        mongoConnection.closeDefaultConnection();
                        done(e);
                    });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: $${}{e}`);
        }
    });
});
    % endif

% endfor
