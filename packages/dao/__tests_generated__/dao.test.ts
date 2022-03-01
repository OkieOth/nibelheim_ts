/**
    This file is generated.
    Template: dao_tests.mako v0.1.0)

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
                promises.push(dao_insert.insertMine(x, testDb));
            }
            Promise.all(promises).then(function(){
                // all inserts are done
                dao_find.findMine(testDb)
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


describe('Mine find by key', () => {
    it('findMineByKey equal', function(done) {
        try {
            const collectionName = 'Mine_findByKey';
            let insertedElems = [];
            let promises = [];
            for (const num of indexGenerator(3)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(){
                const keyValue = insertedElems[2].id;
                if (!keyValue) {
                    mongoConnection.closeDefaultConnection();
                    return done("key value (id) is undefined or null");
                }
                dao_find.findMineByKey(keyValue, testDb, collectionName)
                    .then(found => {
                        if (!found) {
                            return done(`didn't find value (id) in the database: ${keyValue}`);
                        }
                        mongoConnection.closeDefaultConnection();
                        if (!types.isMine(found)) {
                            return done("expected Mine, but got something different");
                        }
                        if (!types.isEqualMine(insertedElems[2], found)) {
                            return done("read value isn't equal inserted value");
                        }
                        if (types.isEqualMine(insertedElems[1], found)) {
                            return done("read value is equal to wrong value");
                        }
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('findMineByKey not equal', function(done) {
        try {
            const collectionName = 'Mine_findByKey';
            const x: types.Mine = dummy.randomMine();
            const keyValue = x.id;
            if (!keyValue) {
                return done("key value (id) is undefined or null");
            }
            dao_find.findMineByKey(keyValue, testDb, collectionName)
                .then(found => {
                    if (found) {
                        return done(`found value (id) in the database: ${keyValue}, even w/o insert`);
                    }
                    mongoConnection.closeDefaultConnection();
                    done();
                })
                .catch(e => {
                    done(e);
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
                promises.push(dao_insert.insertMineSpotRow(x, testDb));
            }
            Promise.all(promises).then(function(){
                // all inserts are done
                dao_find.findMineSpotRow(testDb)
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
                promises.push(dao_insert.insertDwarf(x, testDb));
            }
            Promise.all(promises).then(function(){
                // all inserts are done
                dao_find.findDwarf(testDb)
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


describe('Dwarf find by key', () => {
    it('findDwarfByKey equal', function(done) {
        try {
            const collectionName = 'Dwarf_findByKey';
            let insertedElems = [];
            let promises = [];
            for (const num of indexGenerator(3)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(){
                const keyValue = insertedElems[2].id;
                if (!keyValue) {
                    mongoConnection.closeDefaultConnection();
                    return done("key value (id) is undefined or null");
                }
                dao_find.findDwarfByKey(keyValue, testDb, collectionName)
                    .then(found => {
                        if (!found) {
                            return done(`didn't find value (id) in the database: ${keyValue}`);
                        }
                        mongoConnection.closeDefaultConnection();
                        if (!types.isDwarf(found)) {
                            return done("expected Dwarf, but got something different");
                        }
                        if (!types.isEqualDwarf(insertedElems[2], found)) {
                            return done("read value isn't equal inserted value");
                        }
                        if (types.isEqualDwarf(insertedElems[1], found)) {
                            return done("read value is equal to wrong value");
                        }
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('findDwarfByKey not equal', function(done) {
        try {
            const collectionName = 'Dwarf_findByKey';
            const x: types.Dwarf = dummy.randomDwarf();
            const keyValue = x.id;
            if (!keyValue) {
                return done("key value (id) is undefined or null");
            }
            dao_find.findDwarfByKey(keyValue, testDb, collectionName)
                .then(found => {
                    if (found) {
                        return done(`found value (id) in the database: ${keyValue}, even w/o insert`);
                    }
                    mongoConnection.closeDefaultConnection();
                    done();
                })
                .catch(e => {
                    done(e);
                });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: ${e}`);
        }
    });
});

