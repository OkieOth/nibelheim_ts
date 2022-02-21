import { assert, expect } from 'chai';
import * as dotenv from "dotenv";
import * as dao from "../src_generated/dao"
import * as dummy from "types_random"
import * as types from "types"
import * as mongoDb from "mongodb";
import * as mongoConnection from "../src/mongo_connection"
import {logger} from "logger";
import { rejects } from 'assert';
import  * as fs from "fs";


const envPath1 = "packages/dao/__tests__/singleMongo";
if (fs.existsSync(envPath1)) {
    dotenv.config({ path: `${envPath1}/.env` });
} else {
    dotenv.config({ path: "__tests__/singleMongo/.env" });
}

const errorPromise = (msg) => {
    return new Promise((resovle, reject) => {
        logger.error(`finish with error: ${msg}`);
        reject(msg);
    });
}

const errorPromise2 = (msg, done) => {
    done(msg);
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
            let i = 0;
            const iMax = 10;
            let promises = [];
            for (const num of indexGenerator(10)) {
                const mine: types.Mine = dummy.randomMine()
                promises.push(dao.insertMine(mine, testDb));
            }
            Promise.all(promises).then(function(){
                //All operations done
                dao.findMine(testDb)
                .then(mines => {
                    mongoConnection.closeDefaultConnection();
                    if (mines.length != 10) {
                        return errorPromise2(`received wrong number of elements. Expected 1000 got ${mines.length}`, done);
                    }
                    if (!types.isMineArray(mines)) {
                        return errorPromise2("expected Mine array, but got something different", done);
                    }
                    logger.info("done :)");
                    done();
                });
            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            return errorPromise2(`can't connect to db: ${e}`, done);
        }
    });


});
