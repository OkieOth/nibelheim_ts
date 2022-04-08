import { assert, expect } from 'chai';
import * as dotenv from "dotenv";
import {logger} from "logger";
import  * as fs from "fs";
import * as dummy from "types_random";
import * as filter from "filter";
import * as mongoConnection from "../src/mongo_connection";
import * as dao_find from "../src_generated/dao_find";
import * as dao_insert from "../src_generated/dao_insert";
import {NO_FILTER, NO_LIMIT, NO_SORT} from "../src/mongo_helper";
import * as types from "types";
import * as findTypes from "../src_generated/dao_find_types";
import { DaoFieldFilter } from '../src/filter_types_ext';

const envPath1 = "packages/dao/__tests__/singleMongo";
if (fs.existsSync(envPath1)) {
    dotenv.config({ path: `${envPath1}/.env` });
} else {
    dotenv.config({ path: "__tests__/singleMongo/.env" });
}

const errorPromise = (msg) => {
    return new Promise((resovle, reject) => {
        reject(msg);
    });
}

//const testDb = `nibelheim_test_${new Date().getTime()}`;
const testDb = `nibelheim_test_manual_filter`;

function* indexGenerator(maxItems) {
    let index = 0;
    while (index < maxItems) {
      yield index;
      index++;
    }
}

const randomInserts = 10;


describe('some filter tests', async () => {
    it('simple uuid', function (done) {
        try {
            /*
            let promises = [];
            for (const num of indexGenerator(randomInserts)) {
                const x: types.Mine = dummy.randomMine()
                promises.push(dao_insert.insertMine(x, testDb));
            }
            Promise.all(promises).then(function(){
            */
                // all inserts are done
                const f: DaoFieldFilter = findTypes.createMineFilterDwarfs(filter.UuidFilterOperator.EQ, ["bdc3d2b9-72f9-46e3-981f-864e44e1b9c1"])
                dao_find.findMine([f], NO_SORT, 0, NO_LIMIT,testDb)
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
//            });
        }
        catch(e) {
            mongoConnection.closeDefaultConnection();
            done(`can't connect to db: ${e}`);
        }
    });

});
