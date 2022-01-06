/**
    This file is generated.
    Template: faker_instances.mako v0.1.0)
*/
import * as types from 'types';

function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum);
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return anEnum[randomEnumValue];
}

export function fakeMine(randomizeOptionalAttribs = false): types.Mine {
    const ret: types.Mine = {
    }
    return ret;
}

export function fakeMineSpotRow(randomizeOptionalAttribs = false): types.MineSpotRow {
    const ret: types.MineSpotRow = {
    }
    return ret;
}

export function fakeDwarf(randomizeOptionalAttribs = false): types.Dwarf {
    const ret: types.Dwarf = {
    }
    return ret;
}

export function fakeStorage(randomizeOptionalAttribs = false): types.Storage {
    const ret: types.Storage = {
    }
    return ret;
}

export function fakeMineSpotMaterial(): types.MineSpotMaterial {
    return randomEnum(types.MineSpotMaterial);
}

export function fakeMineSpot(randomizeOptionalAttribs = false): types.MineSpot {
    const ret: types.MineSpot = {
    }
    return ret;
}

