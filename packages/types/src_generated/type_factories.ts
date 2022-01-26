/**
    This file is generated.
    Template: type_factories.mako v0.1.0)
*/
import * as types from "./types";
import * as utils from "../src/factory_utils";
import * as guards from "./type_guards";

export function parseMine(json: string): types.Mine {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isMine(parsedData)) {
        return parsedData as types.Mine;
    }
    else {
        console.log("[parseMine] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseMineArray(json: string): types.Mine[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        console.log("[parseMineArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!guards.isMine(parsedData[i])) {
            console.log("[parseMineArray] input is not of Mine type");
            return null;
        }
    }
    return parsedData;
}
export function parseMineSpotRow(json: string): types.MineSpotRow {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isMineSpotRow(parsedData)) {
        return parsedData as types.MineSpotRow;
    }
    else {
        console.log("[parseMineSpotRow] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseMineSpotRowArray(json: string): types.MineSpotRow[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        console.log("[parseMineSpotRowArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!guards.isMineSpotRow(parsedData[i])) {
            console.log("[parseMineSpotRowArray] input is not of MineSpotRow type");
            return null;
        }
    }
    return parsedData;
}
export function parseDwarf(json: string): types.Dwarf {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isDwarf(parsedData)) {
        return parsedData as types.Dwarf;
    }
    else {
        console.log("[parseDwarf] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseDwarfArray(json: string): types.Dwarf[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        console.log("[parseDwarfArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!guards.isDwarf(parsedData[i])) {
            console.log("[parseDwarfArray] input is not of Dwarf type");
            return null;
        }
    }
    return parsedData;
}
export function parseStorage(json: string): types.Storage {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isStorage(parsedData)) {
        return parsedData as types.Storage;
    }
    else {
        console.log("[parseStorage] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseStorageArray(json: string): types.Storage[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        console.log("[parseStorageArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!guards.isStorage(parsedData[i])) {
            console.log("[parseStorageArray] input is not of Storage type");
            return null;
        }
    }
    return parsedData;
}
export function parseMineSpot(json: string): types.MineSpot {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isMineSpot(parsedData)) {
        return parsedData as types.MineSpot;
    }
    else {
        console.log("[parseMineSpot] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseMineSpotArray(json: string): types.MineSpot[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        console.log("[parseMineSpotArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!guards.isMineSpot(parsedData[i])) {
            console.log("[parseMineSpotArray] input is not of MineSpot type");
            return null;
        }
    }
    return parsedData;
}
