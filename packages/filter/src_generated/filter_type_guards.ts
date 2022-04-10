/**
    This file is generated.
    Template: type_guards.mako v0.1.0)
*/
import * as types from "./filter_types";
import * as utils from "types";
import {logger} from "logger";

export function isFieldFilter(value: any): value is types.FieldFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isFieldFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("field" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'field': ${value}`, caller);
        return false;
    }
    if ("field" in obj) {
        const attrib: any = obj["field"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'field' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "string") ) {
            logger.error(() => `'field' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("strFilter" in obj) {
        const attrib: any = obj["strFilter"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'strFilter' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isStringFilter(attrib)) ) {
            logger.error(() => `'strFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("enumFilter" in obj) {
        const attrib: any = obj["enumFilter"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'enumFilter' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isEnumFilter(attrib)) ) {
            logger.error(() => `'enumFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("uuidFilter" in obj) {
        const attrib: any = obj["uuidFilter"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'uuidFilter' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isUuidFilter(attrib)) ) {
            logger.error(() => `'uuidFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("numFilter" in obj) {
        const attrib: any = obj["numFilter"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'numFilter' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isNumericFilter(attrib)) ) {
            logger.error(() => `'numFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("dateFilter" in obj) {
        const attrib: any = obj["dateFilter"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'dateFilter' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isDateFilter(attrib)) ) {
            logger.error(() => `'dateFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("boolFilter" in obj) {
        const attrib: any = obj["boolFilter"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'boolFilter' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isBooleanFilter(attrib)) ) {
            logger.error(() => `'boolFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isStringFilter(value: any): value is types.StringFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isStringFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("operator" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'operator': ${value}`, caller);
        return false;
    }
    if ("operator" in obj) {
        const attrib: any = obj["operator"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'operator' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isStringFilterOperator(attrib)) ) {
            logger.error(() => `'operator' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("values" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'values': ${value}`, caller);
        return false;
    }
    if ("values" in obj) {
        const attrib: any = obj["values"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'values' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "string") ) {
            logger.error(() => `'values' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isEnumFilter(value: any): value is types.EnumFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isEnumFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("operator" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'operator': ${value}`, caller);
        return false;
    }
    if ("operator" in obj) {
        const attrib: any = obj["operator"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'operator' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isEnumFilterOperator(attrib)) ) {
            logger.error(() => `'operator' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("values" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'values': ${value}`, caller);
        return false;
    }
    if ("values" in obj) {
        const attrib: any = obj["values"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'values' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "string") ) {
            logger.error(() => `'values' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isUuidFilter(value: any): value is types.UuidFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isUuidFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("operator" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'operator': ${value}`, caller);
        return false;
    }
    if ("operator" in obj) {
        const attrib: any = obj["operator"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'operator' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isUuidFilterOperator(attrib)) ) {
            logger.error(() => `'operator' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("values" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'values': ${value}`, caller);
        return false;
    }
    if ("values" in obj) {
        const attrib: any = obj["values"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'values' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "string") ) {
            logger.error(() => `'values' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isNumericFilter(value: any): value is types.NumericFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isNumericFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("operator" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'operator': ${value}`, caller);
        return false;
    }
    if ("operator" in obj) {
        const attrib: any = obj["operator"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'operator' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isNumericFilterOperator(attrib)) ) {
            logger.error(() => `'operator' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("values" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'values': ${value}`, caller);
        return false;
    }
    if ("values" in obj) {
        const attrib: any = obj["values"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'values' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.allArrayElemsAreNumbers(attrib)) ) {
            logger.error(() => `'values' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isDateFilter(value: any): value is types.DateFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isDateFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("operator" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'operator': ${value}`, caller);
        return false;
    }
    if ("operator" in obj) {
        const attrib: any = obj["operator"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'operator' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isNumericFilterOperator(attrib)) ) {
            logger.error(() => `'operator' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("values" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'values': ${value}`, caller);
        return false;
    }
    if ("values" in obj) {
        const attrib: any = obj["values"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != true)) {
            logger.error(() => `'values' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (utils.isDate(attrib)) ) {
            logger.error(() => `'values' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isBooleanFilter(value: any): value is types.BooleanFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isBooleanFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("operator" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'operator': ${value}`, caller);
        return false;
    }
    if ("operator" in obj) {
        const attrib: any = obj["operator"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'operator' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isBooleanFilterOperator(attrib)) ) {
            logger.error(() => `'operator' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("value" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'value': ${value}`, caller);
        return false;
    }
    if ("value" in obj) {
        const attrib: any = obj["value"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'value' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "boolean") ) {
            logger.error(() => `'value' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isNumericFilterOperator(value: any): value is types.NumericFilterOperator {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string NumericFilterOperator: ${value}`, "isNumericFilterOperator");
        return false;
    }
    if (value  == "EQ")
        return true;
    if (value  == "NE")
        return true;
    if (value  == "LT")
        return true;
    if (value  == "LE")
        return true;
    if (value  == "GT")
        return true;
    if (value  == "GE")
        return true;
    if (value  == "IB")
        return true;
    if (value  == "EB")
        return true;
    if (value  == "IN")
        return true;
    if (value  == "NI")
        return true;
    return false;
}

export function isStringFilterOperator(value: any): value is types.StringFilterOperator {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string StringFilterOperator: ${value}`, "isStringFilterOperator");
        return false;
    }
    if (value  == "EQ")
        return true;
    if (value  == "NE")
        return true;
    if (value  == "MA")
        return true;
    if (value  == "IN")
        return true;
    if (value  == "NI")
        return true;
    return false;
}

export function isEnumFilterOperator(value: any): value is types.EnumFilterOperator {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string EnumFilterOperator: ${value}`, "isEnumFilterOperator");
        return false;
    }
    if (value  == "EQ")
        return true;
    if (value  == "NE")
        return true;
    if (value  == "IN")
        return true;
    if (value  == "NI")
        return true;
    return false;
}

export function isUuidFilterOperator(value: any): value is types.UuidFilterOperator {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string UuidFilterOperator: ${value}`, "isUuidFilterOperator");
        return false;
    }
    if (value  == "EQ")
        return true;
    if (value  == "NE")
        return true;
    if (value  == "IN")
        return true;
    if (value  == "NI")
        return true;
    return false;
}

export function isBooleanFilterOperator(value: any): value is types.BooleanFilterOperator {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string BooleanFilterOperator: ${value}`, "isBooleanFilterOperator");
        return false;
    }
    if (value  == "EQ")
        return true;
    if (value  == "NE")
        return true;
    return false;
}

export function isSortDirection(value: any): value is types.SortDirection {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string SortDirection: ${value}`, "isSortDirection");
        return false;
    }
    if (value  == "ASC")
        return true;
    if (value  == "DESC")
        return true;
    return false;
}

export function isFieldSort(value: any): value is types.FieldSort {
    if (value == null || value == undefined)
        return true;
    const caller = "isFieldSort";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if (!("field" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'field': ${value}`, caller);
        return false;
    }
    if ("field" in obj) {
        const attrib: any = obj["field"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'field' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (typeof attrib === "string") ) {
            logger.error(() => `'field' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if (!("direction" in obj)) { // check required attribute
        logger.error(() => `missing required attribute 'direction': ${value}`, caller);
        return false;
    }
    if ("direction" in obj) {
        const attrib: any = obj["direction"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'direction' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isSortDirection(attrib)) ) {
            logger.error(() => `'direction' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}


export function isFieldFilterArray(value: any): value is types.FieldFilter[] {
    const caller = "isFieldFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isFieldFilter(elem)) {
                logger.error(() => `input is not of FieldFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isStringFilterArray(value: any): value is types.StringFilter[] {
    const caller = "isStringFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isStringFilter(elem)) {
                logger.error(() => `input is not of StringFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isEnumFilterArray(value: any): value is types.EnumFilter[] {
    const caller = "isEnumFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isEnumFilter(elem)) {
                logger.error(() => `input is not of EnumFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isUuidFilterArray(value: any): value is types.UuidFilter[] {
    const caller = "isUuidFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isUuidFilter(elem)) {
                logger.error(() => `input is not of UuidFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isNumericFilterArray(value: any): value is types.NumericFilter[] {
    const caller = "isNumericFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isNumericFilter(elem)) {
                logger.error(() => `input is not of NumericFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isDateFilterArray(value: any): value is types.DateFilter[] {
    const caller = "isDateFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isDateFilter(elem)) {
                logger.error(() => `input is not of DateFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isBooleanFilterArray(value: any): value is types.BooleanFilter[] {
    const caller = "isBooleanFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isBooleanFilter(elem)) {
                logger.error(() => `input is not of BooleanFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isNumericFilterOperatorArray(value: any): value is types.NumericFilterOperator[] {
    const caller = "isNumericFilterOperatorArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isNumericFilterOperator(elem)) {
                logger.error(() => `input is not of NumericFilterOperator type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isStringFilterOperatorArray(value: any): value is types.StringFilterOperator[] {
    const caller = "isStringFilterOperatorArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isStringFilterOperator(elem)) {
                logger.error(() => `input is not of StringFilterOperator type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isEnumFilterOperatorArray(value: any): value is types.EnumFilterOperator[] {
    const caller = "isEnumFilterOperatorArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isEnumFilterOperator(elem)) {
                logger.error(() => `input is not of EnumFilterOperator type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isUuidFilterOperatorArray(value: any): value is types.UuidFilterOperator[] {
    const caller = "isUuidFilterOperatorArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isUuidFilterOperator(elem)) {
                logger.error(() => `input is not of UuidFilterOperator type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isBooleanFilterOperatorArray(value: any): value is types.BooleanFilterOperator[] {
    const caller = "isBooleanFilterOperatorArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isBooleanFilterOperator(elem)) {
                logger.error(() => `input is not of BooleanFilterOperator type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isSortDirectionArray(value: any): value is types.SortDirection[] {
    const caller = "isSortDirectionArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isSortDirection(elem)) {
                logger.error(() => `input is not of SortDirection type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isFieldSortArray(value: any): value is types.FieldSort[] {
    const caller = "isFieldSortArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isFieldSort(elem)) {
                logger.error(() => `input is not of FieldSort type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

