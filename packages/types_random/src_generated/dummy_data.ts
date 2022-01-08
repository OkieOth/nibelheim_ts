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
    }

    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.rows = [];
        const rowsCount = chance.integer({ min: 0, max: arrayMax });
        for (let i=0; i < rowsCount; i++) {
            ret.rows.push(randomMineSpotRow());
        }
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.dwarfs = [];
        const dwarfsCount = chance.integer({ min: 0, max: arrayMax });
        for (let i=0; i < dwarfsCount; i++) {
            ret.dwarfs.push(randomDwarf());
        }
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.storage = randomStorage();
    };
    return ret;
}

export function randomMineSpotRow(randomizeOptionalAttribs = false): types.MineSpotRow {
    const chance = new Chance();
    const ret: types.MineSpotRow = {
    }

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
    }

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
        ret.currentWay = [];
        const currentWayCount = chance.integer({ min: 0, max: arrayMax });
        for (let i=0; i < currentWayCount; i++) {
            ret.currentWay.push(chance.guid({version: 4}));
        }
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
    }

    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.id = chance.guid({version: 4});
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.material = randomEnum(types.MineSpotMaterial);
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.initialAmountOfMaterial = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.currentAmountOfMaterial = chance.integer();
    };
    if ((!randomizeOptionalAttribs) || chance.bool()) {
        ret.miningDifficulty = chance.floating();
    };
    return ret;
}

