/**
    This file is generated.
    Template: dao_delete_tests.mako v0.1.0)

    The file provides the tests for the mongodb dao functions.
*/

import { assert } from "chai";
import * as fs from "fs";
import * as dotenv from "dotenv";
import * as mongoDb from "mongodb";
import * as dao_find from "../src_generated/dao_find"
import * as dao_delete from "../src_generated/dao_delete"
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

describe('Mine delete by _id', () => {
    it('deleteMineByObjectId found', function(done) {
        try {
            const collectionName = 'Mine_delete_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMine(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        dao_delete.deleteMineByObjectId(valuesArray[1], testDb, collectionName)
                            .then(found => {
                                if (found !== 1) {
                                    return done(`didn't delete value with _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMine(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount-1) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('deleteMineByObjectId not found', function(done) {
        try {
            const collectionName = 'Mine_delete_2';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMine(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const objectId = new mongoDb.ObjectId();
                        dao_delete.deleteMineByObjectId(String(objectId), testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`deleted something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMine(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });
});


describe('Mine delete by key', () => {
    it('deleteMineByKey found', function(done) {
        try {
            const collectionName = 'Mine_delete_3';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMine(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const keyValue = insertedElems[2].id;
                        if (!keyValue) {
                            mongoConnection.closeDefaultConnection();
                            return done("key value (id) is undefined or null");
                        }
                        dao_delete.deleteMineByKey(keyValue, testDb, collectionName)
                            .then(found => {
                                if (found !== 1) {
                                    return done(`didn't delete value with key in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMine(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount-1) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('deleteMineByKey not found', function(done) {
        try {
            const collectionName = 'Mine_delete_4';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMine(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const x: types.Mine = dummy.randomMine();
                        const keyValue = x.id;
                        if (!keyValue) {
                            return done("key value (id) is undefined or null");
                        }
                        dao_delete.deleteMineByKey(keyValue, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`deleted something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMine(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });
});

describe('MineSpotRow delete by _id', () => {
    it('deleteMineSpotRowByObjectId found', function(done) {
        try {
            const collectionName = 'MineSpotRow_delete_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.MineSpotRow = dummy.randomMineSpotRow();
                insertedElems.push(x);
                promises.push(dao_insert.insertMineSpotRow(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMineSpotRow(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        dao_delete.deleteMineSpotRowByObjectId(valuesArray[1], testDb, collectionName)
                            .then(found => {
                                if (found !== 1) {
                                    return done(`didn't delete value with _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMineSpotRow(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount-1) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('deleteMineSpotRowByObjectId not found', function(done) {
        try {
            const collectionName = 'MineSpotRow_delete_2';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.MineSpotRow = dummy.randomMineSpotRow();
                insertedElems.push(x);
                promises.push(dao_insert.insertMineSpotRow(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMineSpotRow(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const objectId = new mongoDb.ObjectId();
                        dao_delete.deleteMineSpotRowByObjectId(String(objectId), testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`deleted something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMineSpotRow(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });
});


describe('Dwarf delete by _id', () => {
    it('deleteDwarfByObjectId found', function(done) {
        try {
            const collectionName = 'Dwarf_delete_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countDwarf(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        dao_delete.deleteDwarfByObjectId(valuesArray[1], testDb, collectionName)
                            .then(found => {
                                if (found !== 1) {
                                    return done(`didn't delete value with _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countDwarf(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount-1) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('deleteDwarfByObjectId not found', function(done) {
        try {
            const collectionName = 'Dwarf_delete_2';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countDwarf(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const objectId = new mongoDb.ObjectId();
                        dao_delete.deleteDwarfByObjectId(String(objectId), testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`deleted something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countDwarf(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });
});


describe('Dwarf delete by key', () => {
    it('deleteDwarfByKey found', function(done) {
        try {
            const collectionName = 'Dwarf_delete_3';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countDwarf(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const keyValue = insertedElems[2].id;
                        if (!keyValue) {
                            mongoConnection.closeDefaultConnection();
                            return done("key value (id) is undefined or null");
                        }
                        dao_delete.deleteDwarfByKey(keyValue, testDb, collectionName)
                            .then(found => {
                                if (found !== 1) {
                                    return done(`didn't delete value with key in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countDwarf(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount-1) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('deleteDwarfByKey not found', function(done) {
        try {
            const collectionName = 'Dwarf_delete_4';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countDwarf(testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const x: types.Dwarf = dummy.randomDwarf();
                        const keyValue = x.id;
                        if (!keyValue) {
                            return done("key value (id) is undefined or null");
                        }
                        dao_delete.deleteDwarfByKey(keyValue, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`deleted something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countDwarf(testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after delete: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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
            done(`can't connect to db: ${e}`);
        }
    });
});

