/**
    This file is generated.
    Template: type_factories.mako v0.1.0)
*/
import * as types from "./types";
import * as utils from "../src/factory_utils";
import * as guards from "./type_guards";
import {logger} from "logger";


export function parseMine(json: string): types.Mine {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isMine(parsedData)) {
        return parsedData as types.Mine;
    }
    else {
        logger.error(() => `input doesn't match expected type: ${json}`, "parseMine");
        return null;
    }
}

export function parseMineArray(json: string): types.Mine[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseMineArray");
        return null;
    }
    parsedData.forEach(elem => {
        if (!guards.isMine(elem)) {
            logger.error(() => `input is not of Mine type`, "parseMineArray");
            return null;
        }
    });
    return parsedData;
}
export function parseMineSpotRow(json: string): types.MineSpotRow {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isMineSpotRow(parsedData)) {
        return parsedData as types.MineSpotRow;
    }
    else {
        logger.error(() => `input doesn't match expected type: ${json}`, "parseMineSpotRow");
        return null;
    }
}

export function parseMineSpotRowArray(json: string): types.MineSpotRow[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseMineSpotRowArray");
        return null;
    }
    parsedData.forEach(elem => {
        if (!guards.isMineSpotRow(elem)) {
            logger.error(() => `input is not of MineSpotRow type`, "parseMineSpotRowArray");
            return null;
        }
    });
    return parsedData;
}
export function parseDwarf(json: string): types.Dwarf {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isDwarf(parsedData)) {
        return parsedData as types.Dwarf;
    }
    else {
        logger.error(() => `input doesn't match expected type: ${json}`, "parseDwarf");
        return null;
    }
}

export function parseDwarfArray(json: string): types.Dwarf[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseDwarfArray");
        return null;
    }
    parsedData.forEach(elem => {
        if (!guards.isDwarf(elem)) {
            logger.error(() => `input is not of Dwarf type`, "parseDwarfArray");
            return null;
        }
    });
    return parsedData;
}
export function parseStorage(json: string): types.Storage {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isStorage(parsedData)) {
        return parsedData as types.Storage;
    }
    else {
        logger.error(() => `input doesn't match expected type: ${json}`, "parseStorage");
        return null;
    }
}

export function parseStorageArray(json: string): types.Storage[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseStorageArray");
        return null;
    }
    parsedData.forEach(elem => {
        if (!guards.isStorage(elem)) {
            logger.error(() => `input is not of Storage type`, "parseStorageArray");
            return null;
        }
    });
    return parsedData;
}
export function parseMineSpot(json: string): types.MineSpot {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.isMineSpot(parsedData)) {
        return parsedData as types.MineSpot;
    }
    else {
        logger.error(() => `input doesn't match expected type: ${json}`, "parseMineSpot");
        return null;
    }
}

export function parseMineSpotArray(json: string): types.MineSpot[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseMineSpotArray");
        return null;
    }
    parsedData.forEach(elem => {
        if (!guards.isMineSpot(elem)) {
            logger.error(() => `input is not of MineSpot type`, "parseMineSpotArray");
            return null;
        }
    });
    return parsedData;
}
