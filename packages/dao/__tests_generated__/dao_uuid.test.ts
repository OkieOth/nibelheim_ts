/**
    This file is generated.
    Template: dao_uuid_tests.mako v0.1.0)

    The file provides the tests for the functions to convert uuid fields into 
    mongo compatible BSON UUIDs.
*/

import { assert } from 'chai';
import * as dummy from "types_random";
import * as types from "types";
import * as dao_uuid from "../src_generated/dao_uuid";
import {indexGenerator} from "../__tests__/helper/helper";

const randomObjectCount = 3;

const checkMineAttribs = (x, isType) => {
    if (types.isMine(x) != isType) {
        assert.fail("random elem isn't of type Mine");
    }
    if ((typeof x.id !== "string") == isType) {
        assert.fail(`x.id === 'string': ${isType}`);
    }
    if (x.dwarfs) {
        x.dwarfs.forEach(elem => {
            if ((typeof elem !== "string") == isType) {
                assert.fail(`x.dwarfs === 'string': ${isType}`);
            }
        });
    }
};

const checkMineSpotRowAttribs = (x, isType) => {
    if (types.isMineSpotRow(x) != isType) {
        assert.fail("random elem isn't of type MineSpotRow");
    }
    if ((typeof x.mine_id !== "string") == isType) {
        assert.fail(`x.id === 'string': ${isType}`);
    }
};

const checkDwarfAttribs = (x, isType) => {
    if (types.isDwarf(x) != isType) {
        assert.fail("random elem isn't of type Dwarf");
    }
    if ((typeof x.id !== "string") == isType) {
        assert.fail(`x.id === 'string': ${isType}`);
    }
    if ((typeof x.mine_id !== "string") == isType) {
        assert.fail(`x.id === 'string': ${isType}`);
    }
};


describe('test uuid convert', () => {
    it('Mine', () => {
        try {
            for (const num of indexGenerator(randomObjectCount)) {
                const x: types.Mine = dummy.randomMine();
                checkMineAttribs(x, true);
                dao_uuid.mine2Dao(x);
                checkMineAttribs(x, false);
                dao_uuid.dao2Mine(x);
                checkMineAttribs(x, true);
            }
        }
        catch (e) {
            assert.fail(e);
        }
    });

    it('MineSpotRow', () => {
        try {
            for (const num of indexGenerator(randomObjectCount)) {
                const x: types.MineSpotRow = dummy.randomMineSpotRow();
                checkMineSpotRowAttribs(x, true);
                dao_uuid.mineSpotRow2Dao(x);
                checkMineSpotRowAttribs(x, false);
                dao_uuid.dao2MineSpotRow(x);
                checkMineSpotRowAttribs(x, true);
            }
        }
        catch (e) {
            assert.fail(e);
        }
    });

    it('Dwarf', () => {
        try {
            for (const num of indexGenerator(randomObjectCount)) {
                const x: types.Dwarf = dummy.randomDwarf();
                checkDwarfAttribs(x, true);
                dao_uuid.dwarf2Dao(x);
                checkDwarfAttribs(x, false);
                dao_uuid.dao2Dwarf(x);
                checkDwarfAttribs(x, true);
            }
        }
        catch (e) {
            assert.fail(e);
        }
    });

});
