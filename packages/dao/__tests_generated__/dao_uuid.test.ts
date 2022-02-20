/**
    This file is generated.
    Template: dao_uuid_tests.mako v0.1.0)

    The file provides the tests for the functions to convert uuid fields into 
    mongo compatible BSON UUIDs.
*/
import * as dummy from "types_random";
import * as types from "types";
import * as dao_uuid from "../src_generated/dao_uuid";
import {errorPromise, indexGenerator} from "../__tests__/helper/helper";

describe('test uuid convert', async () => {
    it('Mine', async () => {
        try {
            for await (const num of indexGenerator(10)) {
                const x: types.Mine = dummy.randomMine();
                if (!types.isMine(x)) {
                    return errorPromise("random elem isn't of type Mine");
                }
                // check uuid attribs - start
                if (typeof x.id !== "string") {
                    return errorPromise("x.id should be 'string'");
                }
                if (x.dwarfs) {
                    x.dwarfs.forEach(elem => {
                        if (typeof elem !== "string") {
                            return errorPromise("x.dwarfs elem should be 'string'");
                        }
                    });
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

    it('MineSpotRow', async () => {
        try {
            for await (const num of indexGenerator(10)) {
                const x: types.MineSpotRow = dummy.randomMineSpotRow();
                if (!types.isMineSpotRow(x)) {
                    return errorPromise("random elem isn't of type MineSpotRow");
                }
                // check uuid attribs - start
                if (typeof x.mine_id !== "string") {
                    return errorPromise("x.mine_id should be 'string'");
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

    it('Dwarf', async () => {
        try {
            for await (const num of indexGenerator(10)) {
                const x: types.Dwarf = dummy.randomDwarf();
                if (!types.isDwarf(x)) {
                    return errorPromise("random elem isn't of type Dwarf");
                }
                // check uuid attribs - start
                if (typeof x.id !== "string") {
                    return errorPromise("x.id should be 'string'");
                }
                if (typeof x.mine_id !== "string") {
                    return errorPromise("x.mine_id should be 'string'");
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
