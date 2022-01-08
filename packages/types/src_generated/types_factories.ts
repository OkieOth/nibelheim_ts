/**
    This file is generated.
    Template: types_factories.mako v0.1.0)
*/
import * as types from "./types";

export function parseMine(json: string): types.Mine {
    const parsedData = JSON.parse(json);
    if (isMine(parsedData)) {
        return parsedData as types.Mine;
    }
    else {
        console.log("input doesn't match expected Mine: json");
        return null;
    }
}

export function isMine(value: any): value is types.Mine {
    return true; // TODO
}

export function parseMineSpotRow(json: string): types.MineSpotRow {
    const parsedData = JSON.parse(json);
    if (isMineSpotRow(parsedData)) {
        return parsedData as types.MineSpotRow;
    }
    else {
        console.log("input doesn't match expected MineSpotRow: json");
        return null;
    }
}

export function isMineSpotRow(value: any): value is types.MineSpotRow {
    return true; // TODO
}

export function parseDwarf(json: string): types.Dwarf {
    const parsedData = JSON.parse(json);
    if (isDwarf(parsedData)) {
        return parsedData as types.Dwarf;
    }
    else {
        console.log("input doesn't match expected Dwarf: json");
        return null;
    }
}

export function isDwarf(value: any): value is types.Dwarf {
    return true; // TODO
}

export function parseStorage(json: string): types.Storage {
    const parsedData = JSON.parse(json);
    if (isStorage(parsedData)) {
        return parsedData as types.Storage;
    }
    else {
        console.log("input doesn't match expected Storage: json");
        return null;
    }
}

export function isStorage(value: any): value is types.Storage {
    return true; // TODO
}

export function isMineSpotMaterial(value: any): value is types.MineSpotMaterial {
    if (value == null)
        return true;
    if (!(typeof value === 'string' || value instanceof String))
        return false;
    if (value  == "MITHRIL")
        return true;
    if (value  == "GOLD")
        return true;
    if (value  == "SILVER")
        return true;
    if (value  == "DIAMOND")
        return true;
    if (value  == "IRON")
        return true;
    if (value  == "CUPPER")
        return true;
    if (value  == "ROCK")
        return true;
    return false;
}

export function parseMineSpot(json: string): types.MineSpot {
    const parsedData = JSON.parse(json);
    if (isMineSpot(parsedData)) {
        return parsedData as types.MineSpot;
    }
    else {
        console.log("input doesn't match expected MineSpot: json");
        return null;
    }
}

export function isMineSpot(value: any): value is types.MineSpot {
    return true; // TODO
}

