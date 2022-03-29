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
        if ( ! (isFieldFilterStrFilter(attrib)) ) {
            logger.error(() => `'strFilter' has wrong type: ${value}`, caller);
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
        if ( ! (isFieldFilterNumFilter(attrib)) ) {
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
        if ( ! (isFieldFilterDateFilter(attrib)) ) {
            logger.error(() => `'dateFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    if ("booleanFilter" in obj) {
        const attrib: any = obj["booleanFilter"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'booleanFilter' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isFieldFilterBooleanFilter(attrib)) ) {
            logger.error(() => `'booleanFilter' has wrong type: ${value}`, caller);
            return false;
        }
    }
    return true;
}

export function isFieldFilterStrFilter(value: any): value is types.FieldFilterStrFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isFieldFilterStrFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
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
    if (value  == "NM")
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

export function isFieldFilterNumFilter(value: any): value is types.FieldFilterNumFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isFieldFilterNumFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
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

export function isFieldFilterDateFilter(value: any): value is types.FieldFilterDateFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isFieldFilterDateFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
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

export function isFieldFilterBooleanFilter(value: any): value is types.FieldFilterBooleanFilter {
    if (value == null || value == undefined)
        return true;
    const caller = "isFieldFilterBooleanFilter";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: ${value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: ${value}`, caller);
        return false;
    }
    const obj = value as Object;
    if ("booleanOperator" in obj) {
        const attrib: any = obj["booleanOperator"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != false)) {
            logger.error(() => `'booleanOperator' has wrong multiplicity: ${value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        if ( ! (isBooleanFilterOperator(attrib)) ) {
            logger.error(() => `'booleanOperator' has wrong type: ${value}`, caller);
            return false;
        }
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

export function isFieldFilterStrFilterArray(value: any): value is types.FieldFilterStrFilter[] {
    const caller = "isFieldFilterStrFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isFieldFilterStrFilter(elem)) {
                logger.error(() => `input is not of FieldFilterStrFilter type: ${elem}`, caller);
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

export function isFieldFilterNumFilterArray(value: any): value is types.FieldFilterNumFilter[] {
    const caller = "isFieldFilterNumFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isFieldFilterNumFilter(elem)) {
                logger.error(() => `input is not of FieldFilterNumFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isFieldFilterDateFilterArray(value: any): value is types.FieldFilterDateFilter[] {
    const caller = "isFieldFilterDateFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isFieldFilterDateFilter(elem)) {
                logger.error(() => `input is not of FieldFilterDateFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

export function isFieldFilterBooleanFilterArray(value: any): value is types.FieldFilterBooleanFilter[] {
    const caller = "isFieldFilterBooleanFilterArray";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: ${value}`, caller);
        return false;
    }
    try {
        value.forEach(elem => {
            if (!isFieldFilterBooleanFilter(elem)) {
                logger.error(() => `input is not of FieldFilterBooleanFilter type: ${elem}`, caller);
                throw new Error("wrong type");
            }
        });
    }
    catch(e) {
        return false;
    }
    return true;
}

