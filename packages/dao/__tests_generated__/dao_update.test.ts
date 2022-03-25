/**
    This file is generated.
    Template: dao_update_tests.mako v0.1.0)

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


describe('Mine update by _id', () => {
    it('updateMineByObjectId found', function(done) {
        try {
            const collectionName = 'Mine_update_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                const randomValue: types.Mine = dummy.randomMine();
                const x: Partial<types.Mine> = {};
                x.name = randomValue.name;
                dao_update.updateMineByObjectId(valuesArray[1], x, testDb, collectionName)
                    .then(found => {
                        if (found !== 1) {
                            return done(`didn't update value with _id in the database: ${valuesArray[1]}`);
                        }
                        dao_find.countMine(NO_FILTER, testDb, collectionName)
                            .then(numberOfElems2 => {
                                if (numberOfElems2 !== elemCount) {
                                    return done(`wrong number of entries after update: expected=${elemCount}, retrieved=${numberOfElems2}`)
                                }
                                dao_find.findMineByObjectId(valuesArray[1], testDb, collectionName)
                                    .then(updatedEntry => {
                                        if (types.isEqualMine(insertedElems[1], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("value wasn't change while update");
                                        }
                                        insertedElems[1].name = randomValue.name
                                        if (!types.isEqualMine(insertedElems[1], updatedEntry)) {
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('updateMineByObjectId not found', function(done) {
        try {
            const collectionName = 'Mine_update_2';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMine(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const objectId = new mongoDb.ObjectId();
                        const x: types.Mine = dummy.randomMine();
                        dao_update.updateMineByObjectId(String(objectId), x, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`updated something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMine(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after update: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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


describe('Mine update by key', () => {
    it('updateMineByKey found', function(done) {
        try {
            const collectionName = 'Mine_update_3';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                const keyValue = insertedElems[2].id;
                if (!keyValue) {
                    mongoConnection.closeDefaultConnection();
                    return done("key value (id) is undefined or null");
                }
                const randomValue: types.Mine = dummy.randomMine();
                const x: Partial<types.Mine> = {};
                x.name = randomValue.name;

                dao_update.updateMineByKey(keyValue, x, testDb, collectionName)
                    .then(found => {
                        if (found !== 1) {
                            return done(`didn't update value with key in the database: ${valuesArray[1]}`);
                        }
                        dao_find.countMine(NO_FILTER, testDb, collectionName)
                            .then(numberOfElems2 => {
                                if (numberOfElems2 !== elemCount) {
                                    return done(`wrong number of entries after update: expected=${elemCount}, retrieved=${numberOfElems2}`)
                                }
                                dao_find.findMineByKey(keyValue, testDb, collectionName)
                                    .then(updatedEntry => {
                                        if (types.isEqualMine(insertedElems[2], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("value wasn't change while update");
                                        }
                                        insertedElems[2].name = randomValue.name
                                        if (!types.isEqualMine(insertedElems[2], updatedEntry)) {
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('updateMineByKey not found', function(done) {
        try {
            const collectionName = 'Mine_update_4';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Mine = dummy.randomMine();
                insertedElems.push(x);
                promises.push(dao_insert.insertMine(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMine(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const x: types.Mine = dummy.randomMine();
                        const keyValue = x.id;
                        if (!keyValue) {
                            return done("key value (id) is undefined or null");
                        }
                        dao_update.updateMineByKey(keyValue, x, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`updated something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMine(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after update: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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


describe('MineSpotRow update by _id', () => {
    it('updateMineSpotRowByObjectId found', function(done) {
        try {
            const collectionName = 'MineSpotRow_update_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.MineSpotRow = dummy.randomMineSpotRow();
                insertedElems.push(x);
                promises.push(dao_insert.insertMineSpotRow(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                const randomValue: types.MineSpotRow = dummy.randomMineSpotRow();
                const x: Partial<types.MineSpotRow> = {};
                x.row_number = randomValue.row_number;
                dao_update.updateMineSpotRowByObjectId(valuesArray[1], x, testDb, collectionName)
                    .then(found => {
                        if (found !== 1) {
                            return done(`didn't update value with _id in the database: ${valuesArray[1]}`);
                        }
                        dao_find.countMineSpotRow(NO_FILTER, testDb, collectionName)
                            .then(numberOfElems2 => {
                                if (numberOfElems2 !== elemCount) {
                                    return done(`wrong number of entries after update: expected=${elemCount}, retrieved=${numberOfElems2}`)
                                }
                                dao_find.findMineSpotRowByObjectId(valuesArray[1], testDb, collectionName)
                                    .then(updatedEntry => {
                                        if (types.isEqualMineSpotRow(insertedElems[1], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("value wasn't change while update");
                                        }
                                        insertedElems[1].row_number = randomValue.row_number
                                        if (!types.isEqualMineSpotRow(insertedElems[1], updatedEntry)) {
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('updateMineSpotRowByObjectId not found', function(done) {
        try {
            const collectionName = 'MineSpotRow_update_2';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.MineSpotRow = dummy.randomMineSpotRow();
                insertedElems.push(x);
                promises.push(dao_insert.insertMineSpotRow(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countMineSpotRow(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const objectId = new mongoDb.ObjectId();
                        const x: types.MineSpotRow = dummy.randomMineSpotRow();
                        dao_update.updateMineSpotRowByObjectId(String(objectId), x, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`updated something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countMineSpotRow(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after update: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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



describe('Dwarf update by _id', () => {
    it('updateDwarfByObjectId found', function(done) {
        try {
            const collectionName = 'Dwarf_update_1';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                const randomValue: types.Dwarf = dummy.randomDwarf();
                const x: Partial<types.Dwarf> = {};
                x.name = randomValue.name;
                dao_update.updateDwarfByObjectId(valuesArray[1], x, testDb, collectionName)
                    .then(found => {
                        if (found !== 1) {
                            return done(`didn't update value with _id in the database: ${valuesArray[1]}`);
                        }
                        dao_find.countDwarf(NO_FILTER, testDb, collectionName)
                            .then(numberOfElems2 => {
                                if (numberOfElems2 !== elemCount) {
                                    return done(`wrong number of entries after update: expected=${elemCount}, retrieved=${numberOfElems2}`)
                                }
                                dao_find.findDwarfByObjectId(valuesArray[1], testDb, collectionName)
                                    .then(updatedEntry => {
                                        if (types.isEqualDwarf(insertedElems[1], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("value wasn't change while update");
                                        }
                                        insertedElems[1].name = randomValue.name
                                        if (!types.isEqualDwarf(insertedElems[1], updatedEntry)) {
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('updateDwarfByObjectId not found', function(done) {
        try {
            const collectionName = 'Dwarf_update_2';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countDwarf(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const objectId = new mongoDb.ObjectId();
                        const x: types.Dwarf = dummy.randomDwarf();
                        dao_update.updateDwarfByObjectId(String(objectId), x, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`updated something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countDwarf(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after update: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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


describe('Dwarf update by key', () => {
    it('updateDwarfByKey found', function(done) {
        try {
            const collectionName = 'Dwarf_update_3';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                const keyValue = insertedElems[2].id;
                if (!keyValue) {
                    mongoConnection.closeDefaultConnection();
                    return done("key value (id) is undefined or null");
                }
                const randomValue: types.Dwarf = dummy.randomDwarf();
                const x: Partial<types.Dwarf> = {};
                x.name = randomValue.name;

                dao_update.updateDwarfByKey(keyValue, x, testDb, collectionName)
                    .then(found => {
                        if (found !== 1) {
                            return done(`didn't update value with key in the database: ${valuesArray[1]}`);
                        }
                        dao_find.countDwarf(NO_FILTER, testDb, collectionName)
                            .then(numberOfElems2 => {
                                if (numberOfElems2 !== elemCount) {
                                    return done(`wrong number of entries after update: expected=${elemCount}, retrieved=${numberOfElems2}`)
                                }
                                dao_find.findDwarfByKey(keyValue, testDb, collectionName)
                                    .then(updatedEntry => {
                                        if (types.isEqualDwarf(insertedElems[2], updatedEntry)) {
                                            mongoConnection.closeDefaultConnection();
                                            return done("value wasn't change while update");
                                        }
                                        insertedElems[2].name = randomValue.name
                                        if (!types.isEqualDwarf(insertedElems[2], updatedEntry)) {
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
            done(`can't connect to db: ${e}`);
        }
    });

    it('updateDwarfByKey not found', function(done) {
        try {
            const collectionName = 'Dwarf_update_4';
            let insertedElems = [];
            let promises = [];
            const elemCount = 3;
            for (const num of indexGenerator(elemCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                insertedElems.push(x);
                promises.push(dao_insert.insertDwarf(x, testDb, collectionName));
            }
            Promise.all(promises).then(function(valuesArray){
                dao_find.countDwarf(NO_FILTER, testDb, collectionName)
                    .then(numberOfElems => {
                        if (numberOfElems !== elemCount) {
                            return done(`wrong number of entries after insert: expected=${elemCount}, retrieved=${numberOfElems}`)
                        }
                        const x: types.Dwarf = dummy.randomDwarf();
                        const keyValue = x.id;
                        if (!keyValue) {
                            return done("key value (id) is undefined or null");
                        }
                        dao_update.updateDwarfByKey(keyValue, x, testDb, collectionName)
                            .then(found => {
                                if (found !== 0) {
                                    return done(`updated something with not inserted _id in the database: ${valuesArray[1]}`);
                                }
                                dao_find.countDwarf(NO_FILTER, testDb, collectionName)
                                    .then(numberOfElems2 => {
                                        if (numberOfElems2 !== elemCount) {
                                            return done(`wrong number of entries after update: expected=${elemCount-1}, retrieved=${numberOfElems2}`)
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

