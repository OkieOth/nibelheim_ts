/**
    This file is generated.
    Template: random_instances.mako v0.1.0)

    The file provides functions to create random data based on the model types.
*/
import * as types from 'types';
import { Chance } from 'chance'
import { randomEnum } from '../src/randomFuncs';

const arrayMax = 10;

export function randomMine(randomizeOptionalAttribs = false): types.Mine {
    const chance = new Chance();
    const ret: types.Mine = {
        id: chance.guid({version: 4}),
        name: chance.string(),
        time: chance.date(),
    }

    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.storage = randomStorage();
    };
    return ret;
}

export function randomStorage(randomizeOptionalAttribs = false): types.Storage {
    const chance = new Chance();
    const ret: types.Storage = {
    }

    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.mithril = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.gold = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.silver = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.diamond = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.iron = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.cupper = chance.integer();
    };
    return ret;
}

export function randomMineSpotMaterial(): types.MineSpotMaterial {
    return randomEnum(types.MineSpotMaterial);
}

export function randomMineSpot(randomizeOptionalAttribs = false): types.MineSpot {
    const chance = new Chance();
    const ret: types.MineSpot = {
        material: randomEnum(types.MineSpotMaterial),
        initialAmountOfMaterial: chance.integer(),
        currentAmountOfMaterial: chance.integer(),
        miningDifficulty: chance.floating(),
    }

    return ret;
}

export function randomMineSpotRow(randomizeOptionalAttribs = false): types.MineSpotRow {
    const chance = new Chance();
    const ret: types.MineSpotRow = {
        mine_id: chance.guid({version: 4}),
        level: chance.integer(),
    }

    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.row_number = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.columns = [];
        const columnsCount = chance.integer({ min: 0, max: arrayMax });
        for (let i=0; i < columnsCount; i++) {
            ret.columns.push(randomMineSpot());
        }
    };
    return ret;
}

export function randomDwarf(randomizeOptionalAttribs = false): types.Dwarf {
    const chance = new Chance();
    const ret: types.Dwarf = {
        name: chance.string(),
        mine_id: chance.guid({version: 4}),
    }

    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.id = chance.guid({version: 4});
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.pocket = randomStorage();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.strongness = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.currentStrongness = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.hunger = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.healthiness = chance.floating();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.motivation = chance.floating();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.way = [];
        const wayCount = chance.integer({ min: 0, max: arrayMax });
        for (let i=0; i < wayCount; i++) {
            ret.way.push(randomDwarfWay());
        }
    };
    return ret;
}

export function randomDwarfWay(randomizeOptionalAttribs = false): types.DwarfWay {
    const chance = new Chance();
    const ret: types.DwarfWay = {
    }

    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.row_number = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.spot = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.level = chance.integer();
    };
    return ret;
}

