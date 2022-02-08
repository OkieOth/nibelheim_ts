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
    });
}

export async function parseMineArray(json: string): Promise<types.Mine[]> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (!utils.isArray(parsedData)) {
            logger.error(() => `input is no array: ${json}`, "parseMineArray");
            reject("input is no array");
        }
        parsedData.forEach(elem => {
            if (!guards.isMine(elem)) {
                const errorMsg = "input is not of Mine type";
                logger.error(errorMsg, "parseMineArray");
                reject(errorMsg);
            }
        });
        resolve(parsedData as types.Mine[]);
    });
}

export async function parseMineSpotRow(json: string): Promise<types.MineSpotRow> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (guards.isMineSpotRow(parsedData)) {
            resolve(parsedData as types.MineSpotRow);
        }
        else {
            logger.error(() => `input doesn't match expected type: ${json}`, "parseMineSpotRow");
            reject("input doesn't match expected type");
        }
    });
}

export async function parseMineSpotRowArray(json: string): Promise<types.MineSpotRow[]> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (!utils.isArray(parsedData)) {
            logger.error(() => `input is no array: ${json}`, "parseMineSpotRowArray");
            reject("input is no array");
        }
        parsedData.forEach(elem => {
            if (!guards.isMineSpotRow(elem)) {
                const errorMsg = "input is not of MineSpotRow type";
                logger.error(errorMsg, "parseMineSpotRowArray");
                reject(errorMsg);
            }
        });
        resolve(parsedData as types.MineSpotRow[]);
    });
}

export async function parseDwarf(json: string): Promise<types.Dwarf> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (guards.isDwarf(parsedData)) {
            resolve(parsedData as types.Dwarf);
        }
        else {
            logger.error(() => `input doesn't match expected type: ${json}`, "parseDwarf");
            reject("input doesn't match expected type");
        }
    });
}

export async function parseDwarfArray(json: string): Promise<types.Dwarf[]> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (!utils.isArray(parsedData)) {
            logger.error(() => `input is no array: ${json}`, "parseDwarfArray");
            reject("input is no array");
        }
        parsedData.forEach(elem => {
            if (!guards.isDwarf(elem)) {
                const errorMsg = "input is not of Dwarf type";
                logger.error(errorMsg, "parseDwarfArray");
                reject(errorMsg);
            }
        });
        resolve(parsedData as types.Dwarf[]);
    });
}

export async function parseStorage(json: string): Promise<types.Storage> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (guards.isStorage(parsedData)) {
            resolve(parsedData as types.Storage);
        }
        else {
            logger.error(() => `input doesn't match expected type: ${json}`, "parseStorage");
            reject("input doesn't match expected type");
        }
    });
}

export async function parseStorageArray(json: string): Promise<types.Storage[]> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (!utils.isArray(parsedData)) {
            logger.error(() => `input is no array: ${json}`, "parseStorageArray");
            reject("input is no array");
        }
        parsedData.forEach(elem => {
            if (!guards.isStorage(elem)) {
                const errorMsg = "input is not of Storage type";
                logger.error(errorMsg, "parseStorageArray");
                reject(errorMsg);
            }
        });
        resolve(parsedData as types.Storage[]);
    });
}

export async function parseMineSpot(json: string): Promise<types.MineSpot> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (guards.isMineSpot(parsedData)) {
            resolve(parsedData as types.MineSpot);
        }
        else {
            logger.error(() => `input doesn't match expected type: ${json}`, "parseMineSpot");
            reject("input doesn't match expected type");
        }
    });
}

export async function parseMineSpotArray(json: string): Promise<types.MineSpot[]> {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(json, utils.reviver);
        if (!utils.isArray(parsedData)) {
            logger.error(() => `input is no array: ${json}`, "parseMineSpotArray");
            reject("input is no array");
        }
        parsedData.forEach(elem => {
            if (!guards.isMineSpot(elem)) {
                const errorMsg = "input is not of MineSpot type";
                logger.error(errorMsg, "parseMineSpotArray");
                reject(errorMsg);
            }
        });
        resolve(parsedData as types.MineSpot[]);
    });
}

