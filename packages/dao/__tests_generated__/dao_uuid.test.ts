import { assert, expect } from 'chai';
import * as dummy from "types_random"
import * as types from "types"
import * as dao_uuid from "../src_generated/dao_uuid"

const errorPromise = (msg) => {
    return new Promise((resovle, reject) => {
        reject(msg);
    });
}

function* indexGenerator(maxItems) {
    let index = 0;
    while (index < maxItems) {
        yield index;
        index++;
    }
}

describe('test uuid convert', async () => {
    it('Mine', async () => {
        try {
            for await (const num of indexGenerator(10)) {
                const mine: types.Mine = dummy.randomMine();
                if (!types.isMine(mine)) {
                    return errorPromise("random elem isn't of type Mine");
                }
                if (typeof mine.id !== "string") {
                    return errorPromise("x.id should be 'string'");
                }
                if (mine.dwarfs) {
                    mine.dwarfs.forEach(elem => {
                        if (typeof elem.id !== "string") {
                            return errorPromise("x.dwarfs elem should be 'string'");
                        }
                    })
                }
                dao_uuid.mine2Dao(mine);
                if (types.isMine(mine)) {
                    return errorPromise("after 2dao isMine doesn't work");
                }
                if (typeof (mine as types.Mine).id === "string") {
                    return errorPromise("x.id shouldn't be 'string'");
                }
                if ((mine as types.Mine).dwarfs) {
                    (mine as types.Mine).dwarfs.forEach(elem => {
                        if (typeof elem.id === "string") {
                            return errorPromise("x.dwarfs elem shouldn't be 'string'");
                        }
                    })
                }
                dao_uuid.dao2Mine(mine);
                if (!types.isMine(mine)) {
                    return errorPromise("isMine doesn't work after dao2Mine");
                }
                if (typeof (mine as types.Mine).id !== "string") {
                    return errorPromise("x.id should be 'string' again");
                }
                if ((mine as types.Mine).dwarfs) {
                    (mine as types.Mine).dwarfs.forEach(elem => {
                        if (typeof elem.id !== "string") {
                            return errorPromise("x.dwarfs elem should be 'string' again");
                        }
                    })
                }
            }
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
        catch (e) {
            return errorPromise(e);
        }
    });
});
