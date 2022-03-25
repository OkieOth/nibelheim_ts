## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper
    import yacg.util.stringUtils as stringUtils

    templateFile = 'dao_update_tests.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])


    def getFirstPropNameToChange(currentType):
        for prop in currentType.properties:
            if isinstance(prop.type, model.StringType) or isinstance(prop.type, model.EnumType):
                return prop.name
        if (len(currentType.properties) > 1):
            return currentType.properties[1].name
        else:
            return currentType.properties[0].name

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides the tests for the mongodb dao update functions.
*/

import * as fs from "fs";
import * as dotenv from "dotenv";
import * as mongoDb from "mongodb";
import * as dao_find from "../src_generated/dao_find"
import * as dao_update from "../src_generated/dao_update"
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
<%
    firstPropNameToChange = getFirstPropNameToChange(currentType)
%>
describe('${currentType.name} update by _id', () => {
    it('update${currentType.name}ByObjectId found', function(done) {
        try {
            const collectionName = '${currentType.name}_update_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                insertedElems.push(x);
                promises.push(dao_insert.insert${currentType.name}(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                const randomValue: types.${currentType.name} = dummy.random${currentType.name}();
                const x: Partial<types.${currentType.name}> = {};
                x.${firstPropNameToChange} = randomValue.${firstPropNameToChange};
                dao_update.update${currentType.name}ByObjectId(valuesArray[1], x, testDb, collectionName)
                    .then(found => {
                        if (found !== 1) {
                            return done(`didn't update value with _id in the database: $${}{valuesArray[1]}`);
                        }
                        dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                            .then(numberOfElems2 => {
                                if (numberOfElems2 !== elemCount) {
                                    return done(`wrong number of entries after update: expected=$${}{elemCount}, retrieved=$${}{numberOfElems2}`)
                                }
                                dao_find.find${currentType.name}ByObjectId(valuesArray[1], testDb, collectionName)
                                    .then(updatedEntry => {
                                        if (types.isEqual${currentType.name}(insertedElems[1], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("value wasn't change while update");
                                        }
                                        insertedElems[1].${firstPropNameToChange} = randomValue.${firstPropNameToChange}
                                        if (!types.isEqual${currentType.name}(insertedElems[1], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("updated value isn't equal the inserted value");
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

    it('update${currentType.name}ByObjectId not found', function(done) {
        try {
            const collectionName = '${currentType.name}_update_2';
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
                        const x: types.${currentType.name} = dummy.random${currentType.name}();
                        dao_update.update${currentType.name}ByObjectId(String(objectId), x, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`updated something with not inserted _id in the database: $${}{valuesArray[1]}`);
                                }
                                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after update: expected=$${}{elemCount-1}, retrieved=$${}{numberOfElems2}`)
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
describe('${currentType.name} update by key', () => {
    it('update${currentType.name}ByKey found', function(done) {
        try {
            const collectionName = '${currentType.name}_update_3';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                insertedElems.push(x);
                promises.push(dao_insert.insert${currentType.name}(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                const keyValue = insertedElems[2].${keyProperty.name};
                if (!keyValue) {
                    mongoConnection.closeDefaultConnection();
                    return done("key value (${keyProperty.name}) is undefined or null");
                }
                const randomValue: types.${currentType.name} = dummy.random${currentType.name}();
                const x: Partial<types.${currentType.name}> = {};
                x.${firstPropNameToChange} = randomValue.${firstPropNameToChange};

                dao_update.update${currentType.name}ByKey(keyValue, x, testDb, collectionName)
                    .then(found => {
                        if (found !== 1) {
                            return done(`didn't update value with key in the database: $${}{valuesArray[1]}`);
                        }
                        dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                            .then(numberOfElems2 => {
                                if (numberOfElems2 !== elemCount) {
                                    return done(`wrong number of entries after update: expected=$${}{elemCount}, retrieved=$${}{numberOfElems2}`)
                                }
                                dao_find.find${currentType.name}ByKey(keyValue, testDb, collectionName)
                                    .then(updatedEntry => {
                                        if (types.isEqual${currentType.name}(insertedElems[2], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("value wasn't change while update");
                                        }
                                        insertedElems[2].${firstPropNameToChange} = randomValue.${firstPropNameToChange}
                                        if (!types.isEqual${currentType.name}(insertedElems[2], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("updated value isn't equal the inserted value");
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

    it('update${currentType.name}ByKey not found', function(done) {
        try {
            const collectionName = '${currentType.name}_update_4';
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
                        dao_update.update${currentType.name}ByKey(keyValue, x, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`updated something with not inserted _id in the database: $${}{valuesArray[1]}`);
                                }
                                dao_find.count${currentType.name}(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after update: expected=$${}{elemCount-1}, retrieved=$${}{numberOfElems2}`)
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
