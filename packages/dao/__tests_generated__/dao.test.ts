import { assert, expect } from 'chai';
import * as dotenv from "dotenv";
import * as dao from "../src_generated/dao"
import * as dummy from "types_random"
import * as types from "types"
import * as mongoDb from "mongodb";
import * as mongoConnection from "../src/mongo_connection"
import {logger} from "logger";
import { rejects } from 'assert';


dotenv.config({ path: "packages/dao/__tests__/singleMongo/.env" })

const errorPromise = (msg) => {
    return new Promise((resovle, reject) => {
        reject(msg);
    });
}

const testDb = `nibelheim_test_${new Date().getTime()}`;

describe('Mine', async () => {
    it('insertMine', async () => {
        try {
            for (let i=0; i<1000; i++) {
                const mine: types.Mine = dummy.randomMine()
                const insertedId: mongoDb.ObjectId = await dao.insertMine(mine, testDb);
            }
            const mines: types.Mine[] = await dao.findMine(testDb);
            mongoConnection.closeDefaultConnection();
            if (mines.length != 1000) {
                return errorPromise(`received wrong number of elements. Expected 1000 got ${mines.length}`);
            }
            if (!types.isMineArray(mines)) {
                return errorPromise("expectec Mine array, but got something different");
            }
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            return errorPromise(`can't connect to db: ${e}`);
        }
    });

    /*
    it('insertMine', async () => {
        try {
            return new Promise((resolve, reject) => {
                try {
                    for (let i=0; i<1000; i++) {
                        const mine: types.Mine = dummy.randomMine()
                        const insertedId: mongoDb.ObjectId = await dao.insertMine(mine, testDb);
                    }
                    mongoConnection.closeDefaultConnection();
                    resolve();
                }
                catch(e) {
                    reject(e);
                }
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            return errorPromise(`can't connect to db: ${e}`);
        }
    });

    */

});
