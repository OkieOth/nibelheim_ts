/**
    This file is generated.
    Template: random_instances.mako v0.1.0)
*/
import * as types from 'types';
import { Chance } from 'chance'
import { randomEnum } from '../src/randomFuncs';

export function randomMine(randomizeOptionalAttribs = false): types.Mine {
    const chance = new Chance();
    const ret: types.Mine = {
    }
    return ret;
}

export function randomMineSpotRow(randomizeOptionalAttribs = false): types.MineSpotRow {
    const chance = new Chance();
    const ret: types.MineSpotRow = {
    }
    return ret;
}

export function randomDwarf(randomizeOptionalAttribs = false): types.Dwarf {
    const chance = new Chance();
    const ret: types.Dwarf = {
        name: chance.string(),
    }
    return ret;
}

export function randomStorage(randomizeOptionalAttribs = false): types.Storage {
    const chance = new Chance();
    const ret: types.Storage = {
    }
    return ret;
}

export function randomMineSpotMaterial(): types.MineSpotMaterial {
    return randomEnum(types.MineSpotMaterial);
}

export function randomMineSpot(randomizeOptionalAttribs = false): types.MineSpot {
    const chance = new Chance();
    const ret: types.MineSpot = {
    }
    return ret;
}

