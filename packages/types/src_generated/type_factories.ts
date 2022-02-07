/**
    This file is generated.
    Template: type_factories.mako v0.1.0)
*/
import * as types from "./types";
import * as utils from "../src/factory_utils";
import * as guards from "./type_guards";
import {logger} from "logger";


export async function parseMine(json: string): Promise<types.Mine> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (guards.isMine(parsedData)) {
            resolve(parsedData as types.Mine);
        }
        else {
            logger.error(() => `input doesn't match expected type: ${json}`, "parseMine");
            reject("input doesn't match expected type");
        }
    })
}

export function parseMineArray(json: string): types.Mine[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseMineArray");
        throw new Error("input is no array");
    }
    parsedData.forEach(elem => {
        if (!guards.isMine(elem)) {
            const errorMsg = "input is not of Mine type";
            logger.error(errorMsg, "parseMineArray");
            throw new Error(errorMsg);
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
        throw new Error("input doesn't match expected type");
    }
}

export function parseMineSpotRowArray(json: string): types.MineSpotRow[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseMineSpotRowArray");
        throw new Error("input is no array");
    }
    parsedData.forEach(elem => {
        if (!guards.isMineSpotRow(elem)) {
            const errorMsg = "input is not of MineSpotRow type";
            logger.error(errorMsg, "parseMineSpotRowArray");
            throw new Error(errorMsg);
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
        throw new Error("input doesn't match expected type");
    }
}

export function parseDwarfArray(json: string): types.Dwarf[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseDwarfArray");
        throw new Error("input is no array");
    }
    parsedData.forEach(elem => {
        if (!guards.isDwarf(elem)) {
            const errorMsg = "input is not of Dwarf type";
            logger.error(errorMsg, "parseDwarfArray");
            throw new Error(errorMsg);
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
        throw new Error("input doesn't match expected type");
    }
}

export function parseStorageArray(json: string): types.Storage[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseStorageArray");
        throw new Error("input is no array");
    }
    parsedData.forEach(elem => {
        if (!guards.isStorage(elem)) {
            const errorMsg = "input is not of Storage type";
            logger.error(errorMsg, "parseStorageArray");
            throw new Error(errorMsg);
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
        throw new Error("input doesn't match expected type");
    }
}

export function parseMineSpotArray(json: string): types.MineSpot[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        logger.error(() => `input is no array: ${json}`, "parseMineSpotArray");
        throw new Error("input is no array");
    }
    parsedData.forEach(elem => {
        if (!guards.isMineSpot(elem)) {
            const errorMsg = "input is not of MineSpot type";
            logger.error(errorMsg, "parseMineSpotArray");
            throw new Error(errorMsg);
        }
    });
    return parsedData;
}
