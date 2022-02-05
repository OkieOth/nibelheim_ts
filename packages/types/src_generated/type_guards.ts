/**
    This file is generated.
    Template: type_guards.mako v0.1.0)
*/
import * as types from "./types";
import * as utils from "../src/factory_utils";
import {logger} from "logger";

export function isMine(value: any): value is types.Mine {
    if (value == null || value == undefined)
        return true;
    const caller = "isMine";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("rows" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'rows': ${value}`, caller);
        return false;
    }
    if ("rows" in obj) {
        const attrib: any = obj["rows"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'rows' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isMineSpotRowArray(attrib)) ) {
            logger.error(() => `'rows' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("dwarfs" in obj) {
        const attrib: any = obj["dwarfs"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'dwarfs' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isDwarfArray(attrib)) ) {
            logger.error(() => `'dwarfs' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("storage" in obj) {
        const attrib: any = obj["storage"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'storage' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isStorage(attrib)) ) {
            logger.error(() => `'storage' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("time" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'time': ${value}`, caller);
        return false;
    }
    if ("time" in obj) {
        const attrib: any = obj["time"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'time' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.isDate(attrib)) ) {
            logger.error(() => `'time' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isMineSpotRow(value: any): value is types.MineSpotRow {
    if (value == null || value == undefined)
        return true;
    const caller = "isMineSpotRow";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if ("columns" in obj) {
        const attrib: any = obj["columns"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'columns' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isMineSpotArray(attrib)) ) {
            logger.error(() => `'columns' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isDwarf(value: any): value is types.Dwarf {
    if (value == null || value == undefined)
        return true;
    const caller = "isDwarf";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("name" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'name': ${value}`, caller);
        return false;
    }
    if ("name" in obj) {
        const attrib: any = obj["name"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'name' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "string") ) {
            logger.error(() => `'name' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("pocket" in obj) {
        const attrib: any = obj["pocket"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'pocket' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isStorage(attrib)) ) {
            logger.error(() => `'pocket' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("strongness" in obj) {
        const attrib: any = obj["strongness"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'strongness' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'strongness' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("currentStrongness" in obj) {
        const attrib: any = obj["currentStrongness"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'currentStrongness' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'currentStrongness' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("hunger" in obj) {
        const attrib: any = obj["hunger"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'hunger' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'hunger' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("healthiness" in obj) {
        const attrib: any = obj["healthiness"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'healthiness' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'healthiness' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("motivation" in obj) {
        const attrib: any = obj["motivation"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'motivation' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'motivation' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("currentWay" in obj) {
        const attrib: any = obj["currentWay"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'currentWay' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.allArrayElemsAreUUIDs(attrib)) ) {
            logger.error(() => `'currentWay' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isStorage(value: any): value is types.Storage {
    if (value == null || value == undefined)
        return true;
    const caller = "isStorage";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if ("mithril" in obj) {
        const attrib: any = obj["mithril"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'mithril' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'mithril' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("gold" in obj) {
        const attrib: any = obj["gold"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'gold' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'gold' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("silver" in obj) {
        const attrib: any = obj["silver"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'silver' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'silver' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("diamond" in obj) {
        const attrib: any = obj["diamond"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'diamond' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'diamond' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("iron" in obj) {
        const attrib: any = obj["iron"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'iron' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'iron' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("cupper" in obj) {
        const attrib: any = obj["cupper"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'cupper' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'cupper' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isMineSpotMaterial(value: any): value is types.MineSpotMaterial {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string MineSpotMaterial: ${value}`, "isMineSpotMaterial");
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

export function isMineSpot(value: any): value is types.MineSpot {
    if (value == null || value == undefined)
        return true;
    const caller = "isMineSpot";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if ("id" in obj) {
        const attrib: any = obj["id"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'id' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.isUUID(attrib)) ) {
            logger.error(() => `'id' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("material" in obj) {
        const attrib: any = obj["material"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'material' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isMineSpotMaterial(attrib)) ) {
            logger.error(() => `'material' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("initialAmountOfMaterial" in obj) {
        const attrib: any = obj["initialAmountOfMaterial"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'initialAmountOfMaterial' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'initialAmountOfMaterial' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("currentAmountOfMaterial" in obj) {
        const attrib: any = obj["currentAmountOfMaterial"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'currentAmountOfMaterial' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'currentAmountOfMaterial' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("miningDifficulty" in obj) {
        const attrib: any = obj["miningDifficulty"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'miningDifficulty' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "number") ) {
            logger.error(() => `'miningDifficulty' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}


export function isMineArray(value: any): value is types.Mine[] {
    const caller = "isMineArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!isMine(value[i])) {
            logger.error(() => `input is not of Mine type: ${value[i]}`, caller);
            return false;
        }
    }
    return true;
}

export function isMineSpotRowArray(value: any): value is types.MineSpotRow[] {
    const caller = "isMineSpotRowArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!isMineSpotRow(value[i])) {
            logger.error(() => `input is not of MineSpotRow type: ${value[i]}`, caller);
            return false;
        }
    }
    return true;
}

export function isDwarfArray(value: any): value is types.Dwarf[] {
    const caller = "isDwarfArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!isDwarf(value[i])) {
            logger.error(() => `input is not of Dwarf type: ${value[i]}`, caller);
            return false;
        }
    }
    return true;
}

export function isStorageArray(value: any): value is types.Storage[] {
    const caller = "isStorageArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!isStorage(value[i])) {
            logger.error(() => `input is not of Storage type: ${value[i]}`, caller);
            return false;
        }
    }
    return true;
}

export function isMineSpotMaterialArray(value: any): value is types.MineSpotMaterial[] {
    const caller = "isMineSpotMaterialArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!isMineSpotMaterial(value[i])) {
            logger.error(() => `input is not of MineSpotMaterial type: ${value[i]}`, caller);
            return false;
        }
    }
    return true;
}

export function isMineSpotArray(value: any): value is types.MineSpot[] {
    const caller = "isMineSpotArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!isMineSpot(value[i])) {
            logger.error(() => `input is not of MineSpot type: ${value[i]}`, caller);
            return false;
        }
    }
    return true;
}

