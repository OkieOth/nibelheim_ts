/**
    This file is generated.
    Template: random_instances.mako v0.1.0)
*/
import * as types from 'types';

function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum);
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return anEnum[randomEnumValue];
}

export function randomMine(randomizeOptionalAttribs = false): types.Mine {
    const ret: types.Mine = {
        // TODO
    }
    return ret;
}

export function randomMineSpotRow(randomizeOptionalAttribs = false): types.MineSpotRow {
    const ret: types.MineSpotRow = {
        // TODO
    }
    return ret;
}

export function randomDwarf(randomizeOptionalAttribs = false): types.Dwarf {
    const ret: types.Dwarf = {
        // TODO
    }
    return ret;
}

export function randomStorage(randomizeOptionalAttribs = false): types.Storage {
    const ret: types.Storage = {
        // TODO
    }
    return ret;
}

export function randomMineSpotMaterial(): types.MineSpotMaterial {
    return randomEnum(types.MineSpotMaterial);
}

export function randomMineSpot(randomizeOptionalAttribs = false): types.MineSpot {
    const ret: types.MineSpot = {
        // TODO
    }
    return ret;
}

