/**
    This file is generated.
    Template: types_factories.mako v0.1.0)
*/
import * as types from "./types";
import * as utils from "../src/factory_utils";

export function parseMine(json: string): types.Mine {
    const parsedData = JSON.parse(json);
    if (isMine(parsedData)) {
        return parsedData as types.Mine;
    }
    else {
        console.log("[parseMine] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseMineArray(json: string): types.Mine[] {
    const parsedData = JSON.parse(json);
    if (!utils.isArray(parsedData)) {
        console.log("[parseMineArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!isMine(parsedData[i])) {
            console.log("[parseMineArray] input is not of Mine type");
            return null;
        }
    }
    return parsedData;
}

export function isMine(value: any): value is types.Mine {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'object')) {
        console.log("[isMine] input is not of type object: " + String(value));
        return false;
    }
    if (Array.isArray(value)) {
        console.log("[isMine] input is an array: " + String(value));
        return false;
    }
    const obj = value as Object;
    if (!("rows" in obj)) { // check required attribute
        console.log("[isMine] missing required attribute 'rows'" + String(value));
        return false;
    }
    if ("rows" in obj) {
        const attrib: any = obj["rows"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            console.log("[isMine] 'rows' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isMineSpotRow(attrib)) ) {
            console.log("[isMine] 'rows' has wrong type: " + String(value));
            return false;
        }
    }
    if ("dwarfs" in obj) {
        const attrib: any = obj["dwarfs"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            console.log("[isMine] 'dwarfs' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isDwarf(attrib)) ) {
            console.log("[isMine] 'dwarfs' has wrong type: " + String(value));
            return false;
        }
    }
    if ("storage" in obj) {
        const attrib: any = obj["storage"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isMine] 'storage' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isStorage(attrib)) ) {
            console.log("[isMine] 'storage' has wrong type: " + String(value));
            return false;
        }
    }
    if (!("time" in obj)) { // check required attribute
        console.log("[isMine] missing required attribute 'time'" + String(value));
        return false;
    }
    if ("time" in obj) {
        const attrib: any = obj["time"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isMine] 'time' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.isDate(attrib)) ) {
            console.log("[isMine] 'time' has wrong type: " + String(value));
            return false;
        }
    }
    return true;
}

export function parseMineSpotRow(json: string): types.MineSpotRow {
    const parsedData = JSON.parse(json);
    if (isMineSpotRow(parsedData)) {
        return parsedData as types.MineSpotRow;
    }
    else {
        console.log("[parseMineSpotRow] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseMineSpotRowArray(json: string): types.MineSpotRow[] {
    const parsedData = JSON.parse(json);
    if (!utils.isArray(parsedData)) {
        console.log("[parseMineSpotRowArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!isMineSpotRow(parsedData[i])) {
            console.log("[parseMineSpotRowArray] input is not of MineSpotRow type");
            return null;
        }
    }
    return parsedData;
}

export function isMineSpotRow(value: any): value is types.MineSpotRow {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'object')) {
        console.log("[isMineSpotRow] input is not of type object: " + String(value));
        return false;
    }
    if (Array.isArray(value)) {
        console.log("[isMineSpotRow] input is an array: " + String(value));
        return false;
    }
    const obj = value as Object;
    if ("columns" in obj) {
        const attrib: any = obj["columns"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            console.log("[isMineSpotRow] 'columns' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isMineSpot(attrib)) ) {
            console.log("[isMineSpotRow] 'columns' has wrong type: " + String(value));
            return false;
        }
    }
    return true;
}

export function parseDwarf(json: string): types.Dwarf {
    const parsedData = JSON.parse(json);
    if (isDwarf(parsedData)) {
        return parsedData as types.Dwarf;
    }
    else {
        console.log("[parseDwarf] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseDwarfArray(json: string): types.Dwarf[] {
    const parsedData = JSON.parse(json);
    if (!utils.isArray(parsedData)) {
        console.log("[parseDwarfArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!isDwarf(parsedData[i])) {
            console.log("[parseDwarfArray] input is not of Dwarf type");
            return null;
        }
    }
    return parsedData;
}

export function isDwarf(value: any): value is types.Dwarf {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'object')) {
        console.log("[isDwarf] input is not of type object: " + String(value));
        return false;
    }
    if (Array.isArray(value)) {
        console.log("[isDwarf] input is an array: " + String(value));
        return false;
    }
    const obj = value as Object;
    if (!("name" in obj)) { // check required attribute
        console.log("[isDwarf] missing required attribute 'name'" + String(value));
        return false;
    }
    if ("name" in obj) {
        const attrib: any = obj["name"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isDwarf] 'name' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "string") ) {
            console.log("[isDwarf] 'name' has wrong type: " + String(value));
            return false;
        }
    }
    if ("pocket" in obj) {
        const attrib: any = obj["pocket"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isDwarf] 'pocket' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isStorage(attrib)) ) {
            console.log("[isDwarf] 'pocket' has wrong type: " + String(value));
            return false;
        }
    }
    if ("strongness" in obj) {
        const attrib: any = obj["strongness"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isDwarf] 'strongness' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isDwarf] 'strongness' has wrong type: " + String(value));
            return false;
        }
    }
    if ("currentStrongness" in obj) {
        const attrib: any = obj["currentStrongness"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isDwarf] 'currentStrongness' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isDwarf] 'currentStrongness' has wrong type: " + String(value));
            return false;
        }
    }
    if ("hunger" in obj) {
        const attrib: any = obj["hunger"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isDwarf] 'hunger' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isDwarf] 'hunger' has wrong type: " + String(value));
            return false;
        }
    }
    if ("healthiness" in obj) {
        const attrib: any = obj["healthiness"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isDwarf] 'healthiness' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isDwarf] 'healthiness' has wrong type: " + String(value));
            return false;
        }
    }
    if ("motivation" in obj) {
        const attrib: any = obj["motivation"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isDwarf] 'motivation' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isDwarf] 'motivation' has wrong type: " + String(value));
            return false;
        }
    }
    if ("currentWay" in obj) {
        const attrib: any = obj["currentWay"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            console.log("[isDwarf] 'currentWay' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.allArrayElemsAreUUIDs(attrib)) ) {
            console.log("[isDwarf] 'currentWay' has wrong type: " + String(value));
            return false;
        }
    }
    return true;
}

export function parseStorage(json: string): types.Storage {
    const parsedData = JSON.parse(json);
    if (isStorage(parsedData)) {
        return parsedData as types.Storage;
    }
    else {
        console.log("[parseStorage] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseStorageArray(json: string): types.Storage[] {
    const parsedData = JSON.parse(json);
    if (!utils.isArray(parsedData)) {
        console.log("[parseStorageArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!isStorage(parsedData[i])) {
            console.log("[parseStorageArray] input is not of Storage type");
            return null;
        }
    }
    return parsedData;
}

export function isStorage(value: any): value is types.Storage {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'object')) {
        console.log("[isStorage] input is not of type object: " + String(value));
        return false;
    }
    if (Array.isArray(value)) {
        console.log("[isStorage] input is an array: " + String(value));
        return false;
    }
    const obj = value as Object;
    if ("mithril" in obj) {
        const attrib: any = obj["mithril"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isStorage] 'mithril' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isStorage] 'mithril' has wrong type: " + String(value));
            return false;
        }
    }
    if ("gold" in obj) {
        const attrib: any = obj["gold"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isStorage] 'gold' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isStorage] 'gold' has wrong type: " + String(value));
            return false;
        }
    }
    if ("silver" in obj) {
        const attrib: any = obj["silver"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isStorage] 'silver' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isStorage] 'silver' has wrong type: " + String(value));
            return false;
        }
    }
    if ("diamond" in obj) {
        const attrib: any = obj["diamond"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isStorage] 'diamond' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isStorage] 'diamond' has wrong type: " + String(value));
            return false;
        }
    }
    if ("iron" in obj) {
        const attrib: any = obj["iron"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isStorage] 'iron' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isStorage] 'iron' has wrong type: " + String(value));
            return false;
        }
    }
    if ("cupper" in obj) {
        const attrib: any = obj["cupper"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isStorage] 'cupper' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isStorage] 'cupper' has wrong type: " + String(value));
            return false;
        }
    }
    return true;
}

export function isMineSpotMaterial(value: any): value is types.MineSpotMaterial {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        console.log("[isMineSpotMaterial] input is no string MineSpotMaterial: " + String(value));
        return false;
    }
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

export function isMineSpotMaterialArray(value: any): value is types.MineSpotMaterial[] {
    if (!utils.isArray(value)) {
        console.log("[isMineSpotMaterialArray] input is no array: " + value);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!isMineSpotMaterial(value[i])) {
            console.log("[isMineSpotMaterialArray] input is not of MineSpotMaterial type: " + value[i]);
            return false;
        }
    }
    return true;
}

export function parseMineSpot(json: string): types.MineSpot {
    const parsedData = JSON.parse(json);
    if (isMineSpot(parsedData)) {
        return parsedData as types.MineSpot;
    }
    else {
        console.log("[parseMineSpot] input doesn't match expected type: " + json);
        return null;
    }
}

export function parseMineSpotArray(json: string): types.MineSpot[] {
    const parsedData = JSON.parse(json);
    if (!utils.isArray(parsedData)) {
        console.log("[parseMineSpotArray] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!isMineSpot(parsedData[i])) {
            console.log("[parseMineSpotArray] input is not of MineSpot type");
            return null;
        }
    }
    return parsedData;
}

export function isMineSpot(value: any): value is types.MineSpot {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'object')) {
        console.log("[isMineSpot] input is not of type object: " + String(value));
        return false;
    }
    if (Array.isArray(value)) {
        console.log("[isMineSpot] input is an array: " + String(value));
        return false;
    }
    const obj = value as Object;
    if ("id" in obj) {
        const attrib: any = obj["id"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isMineSpot] 'id' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.isUUID(attrib)) ) {
            console.log("[isMineSpot] 'id' has wrong type: " + String(value));
            return false;
        }
    }
    if ("material" in obj) {
        const attrib: any = obj["material"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isMineSpot] 'material' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isMineSpotMaterial(attrib)) ) {
            console.log("[isMineSpot] 'material' has wrong type: " + String(value));
            return false;
        }
    }
    if ("initialAmountOfMaterial" in obj) {
        const attrib: any = obj["initialAmountOfMaterial"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isMineSpot] 'initialAmountOfMaterial' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isMineSpot] 'initialAmountOfMaterial' has wrong type: " + String(value));
            return false;
        }
    }
    if ("currentAmountOfMaterial" in obj) {
        const attrib: any = obj["currentAmountOfMaterial"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isMineSpot] 'currentAmountOfMaterial' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isMineSpot] 'currentAmountOfMaterial' has wrong type: " + String(value));
            return false;
        }
    }
    if ("miningDifficulty" in obj) {
        const attrib: any = obj["miningDifficulty"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            console.log("[isMineSpot] 'miningDifficulty' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            console.log("[isMineSpot] 'miningDifficulty' has wrong type: " + String(value));
            return false;
        }
    }
    return true;
}

