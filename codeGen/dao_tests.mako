## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper
    import yacg.util.stringUtils as stringUtils

    templateFile = 'dao_tests.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides the tests for the mongodb dao functions.
*/

import { assert } from "chai";
import * as fs from "fs";
import * as dotenv from "dotenv";
import * as dao_find from "../src_generated/dao_find"
import * as dao_insert from "../src_generated/dao_insert"
import * as dummy from "types_random"
import * as types from "types"
import * as mongoConnection from "../src/mongo_connection"
import {logger} from "logger";

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
describe('${currentType.name}', () => {
    it('insert${currentType.name}', function(done) {
        try {
            let promises = [];
            for (const num of indexGenerator(randomInserts)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}()
                promises.push(dao_insert.insert${currentType.name}(x, testDb));
            }
            Promise.all(promises).then(function(){
                // all inserts are done
                dao_find.find${currentType.name}(testDb)
                .then(found => {
                    mongoConnection.closeDefaultConnection();
                    if (found.length != randomInserts) {
                        done(`received wrong number of elements. Expected $${}{randomInserts} got $${}{found.length}`);
                        return;
                    }
                    if (!types.is${currentType.name}Array(found)) {
                        done("expected ${currentType.name} array, but got something different");
                        return;
                    }
                    logger.info("done :)");
                    done();
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
describe('${currentType.name} find by key', () => {
    it('find${currentType.name}ByKey', function(done) {
        try {
            const collectionName = '${currentType.name}_findByKey';
            let insertedElems = [];
            let promises = [];
            for (const num of indexGenerator(3)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                insertedElems.push(x);
                promises.push(dao_insert.insert${currentType.name}(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(){
                const keyValue = insertedElems[2].${keyProperty.name};
                if (!keyValue) {
                    mongoConnection.closeDefaultConnection();
                    return done("key value (${keyProperty.name}) is undefined or null");
                }
                dao_find.find${currentType.name}ByKey(keyValue, testDb, collectionName)
                    .then(found => {
                        if (!found) {
                            return done(`didn't find value (${keyProperty.name}) in the database: $${}{keyValue}`);
                        }
                        mongoConnection.closeDefaultConnection();
                        if (!types.is${currentType.name}(found)) {
                            return done("expected ${currentType.name}, but got something different");
                        }
                        assert.deepEqual(insertedElems[2], found);
                        logger.info("done :)");
                        done();
                    })
                    .catch(e => {
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
