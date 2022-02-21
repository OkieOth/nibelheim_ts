/**
    This file is generated.
    Template: dao_tests.mako v0.1.0)

    The file provides the tests for the mongodb dao functions.
*/

import * as fs from "fs";
import * as dotenv from "dotenv";
import * as dao from "../src_generated/dao"
import * as dummy from "types_random"
import * as types from "types"
import * as mongoConnection from "../src/mongo_connection"
import {logger} from "logger";

const randomInserts = 10;

const envPath1 = "packages/dao/__tests__/singleMongo";

if (fs.existsSync(envPath1)) {
    dotenv.config({ path: `${envPath1}/.env` });
} else {
    dotenv.config({ path: "__tests__/singleMongo/.env" });
}

const testDb = `nibelheim_test_${new Date().getTime()}`;

function* indexGenerator(maxItems) {
    let index = 0;
    while (index < maxItems) {
      yield index;
      index++;
    }
}

describe('Mine', () => {
    it('insertMine', function(done) {
        try {
            let promises = [];
            for (const num of indexGenerator(randomInserts)) {
                const x: types.Mine = dummy.randomMine()
                promises.push(dao.insertMine(x, testDb));
            }
            Promise.all(promises).then(function(){
                // all inserts are done
                dao.findMine(testDb)
                .then(found => {
                    mongoConnection.closeDefaultConnection();
                    if (found.length != randomInserts) {
                        done(`received wrong number of elements. Expected ${randomInserts} got ${found.length}`);
                        return;
                    }
                    if (!types.isMineArray(found)) {
                        done("expected Mine array, but got something different");
                        return;
                    }
                    logger.info("done :)");
                    done();
                });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: ${e}`);
        }
    });
});

describe('MineSpotRow', () => {
    it('insertMineSpotRow', function(done) {
        try {
            let promises = [];
            for (const num of indexGenerator(randomInserts)) {
                const x: types.MineSpotRow = dummy.randomMineSpotRow()
                promises.push(dao.insertMineSpotRow(x, testDb));
            }
            Promise.all(promises).then(function(){
                // all inserts are done
                dao.findMineSpotRow(testDb)
                .then(found => {
                    mongoConnection.closeDefaultConnection();
                    if (found.length != randomInserts) {
                        done(`received wrong number of elements. Expected ${randomInserts} got ${found.length}`);
                        return;
                    }
                    if (!types.isMineSpotRowArray(found)) {
                        done("expected MineSpotRow array, but got something different");
                        return;
                    }
                    logger.info("done :)");
                    done();
                });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: ${e}`);
        }
    });
});

describe('Dwarf', () => {
    it('insertDwarf', function(done) {
        try {
            let promises = [];
            for (const num of indexGenerator(randomInserts)) {
                const x: types.Dwarf = dummy.randomDwarf()
                promises.push(dao.insertDwarf(x, testDb));
            }
            Promise.all(promises).then(function(){
                // all inserts are done
                dao.findDwarf(testDb)
                .then(found => {
                    mongoConnection.closeDefaultConnection();
                    if (found.length != randomInserts) {
                        done(`received wrong number of elements. Expected ${randomInserts} got ${found.length}`);
                        return;
                    }
                    if (!types.isDwarfArray(found)) {
                        done("expected Dwarf array, but got something different");
                        return;
                    }
                    logger.info("done :)");
                    done();
                });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: ${e}`);
        }
    });
});

