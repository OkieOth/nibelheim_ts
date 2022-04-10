import * as mongoDb from "mongodb";
import * as filterExt from "../src/filter_types_ext"
import * as filter from "filter";
import {logger} from "logger";

export const NO_LIMIT=0;

export const NO_FILTER=[];

export const NO_SORT=[];

type FilterValues = string[] | number [] | Date[] | boolean[];

function singleValueFilter(field: string, filterValues: FilterValues, operator: string): object {
    const ret = {};
    const equalObject = {};
    equalObject[operator] = filterValues[0];
    ret[field] = equalObject;
    return ret;
}

function listValueFilter(field: string, filterValues: FilterValues, operator: string): object {
    const ret = {};
    const equalObject = {};    
    equalObject[operator] = filterValues;
    ret[field] = equalObject;
    return ret;
}

function twoValueFilter(field: string, filterValues: FilterValues, operator1: string, operator2: string): object {
    const ret = {};
    const equalObject = {};    
    equalObject[operator1] = filterValues[0];
    equalObject[operator2] = filterValues[1];
    ret[field] = equalObject;
    return ret;
}

function createEqualFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$eq");
}

function createNotEqualFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$ne");
}

function createLessFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$lt");
}

function createLessEqualFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$lte");
}

function createGreaterFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$gt");
}

function createGreaterEqualFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$gte");
}

function createBetweenIncludeFilter(field: string, filterValues: FilterValues): object {
    // { "storage.gold": {"$gte": 0, "$lte": 10000}}
    return twoValueFilter(field, filterValues, "$gte", "$lte");
}

function createBetweenExcludeFilter(field: string, filterValues: FilterValues): object {
    // { "storage.gold": {"$gt": 0, "$lt": 10000}}
    return twoValueFilter(field, filterValues, "$gt", "$lt");
}

function createInFilter(field: string, filterValues: FilterValues): object {
    return listValueFilter(field, filterValues, "$in");
}

function createNotInFilter(field: string, filterValues: FilterValues): object {
    return listValueFilter(field, filterValues, "$nin");
}

function createMatchFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$regex");
}

function processDateFilter(field: string, f: filter.DateFilter, convertValue: filterExt.ConvertDateValue): object {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.NumericFilterOperator.EQ:
            return createEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.NE:
            return createNotEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.LT:
            return createLessFilter(field, filterValues);
        case filter.NumericFilterOperator.LE:
            return createLessEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.GT:
            return createGreaterFilter(field, filterValues);
        case filter.NumericFilterOperator.GE:
            return createGreaterEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.IB:
            return createBetweenIncludeFilter(field, filterValues);
        case filter.NumericFilterOperator.EB:
            return createBetweenExcludeFilter(field, filterValues);
        case filter.NumericFilterOperator.IN:
            return createInFilter(field, filterValues);
        case filter.NumericFilterOperator.NI:
            return createNotInFilter(field, filterValues);
        default:
            logger.error("unknown numeric filter operator","processNumFilter");
    }
}
function processBooleanFilter(field: string, f: filter.BooleanFilter, convertValue: filterExt.ConvertBooleanValue): object {
    const filterValue = convertValue(f.value);
    switch (f.operator) {
        case filter.BooleanFilterOperator.EQ:
            return createEqualFilter(field, [filterValue]);
        case filter.BooleanFilterOperator.NE:
            return createNotEqualFilter(field, [filterValue]);
        default:
            logger.error("unknown enum boolean operator","processBooleanFilter");
    }
}
function processNumFilter(field: string, f: filter.NumericFilter, convertValue: filterExt.ConvertNumValue): object {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.NumericFilterOperator.EQ:
            return createEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.NE:
            return createNotEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.LT:
            return createLessFilter(field, filterValues);
        case filter.NumericFilterOperator.LE:
            return createLessEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.GT:
            return createGreaterFilter(field, filterValues);
        case filter.NumericFilterOperator.GE:
            return createGreaterEqualFilter(field, filterValues);
        case filter.NumericFilterOperator.IB:
            return createBetweenIncludeFilter(field, filterValues);
        case filter.NumericFilterOperator.EB:
            return createBetweenExcludeFilter(field, filterValues);
        case filter.NumericFilterOperator.IN:
            return createInFilter(field, filterValues);
        case filter.NumericFilterOperator.NI:
            return createNotInFilter(field, filterValues);
        default:
            logger.error("unknown numeric filter operator","processNumFilter");
    }
}

function processEnumFilter(field: string, f: filter.EnumFilter, convertValue: filterExt.ConvertEnumValue): object {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.EnumFilterOperator.EQ:
            return createEqualFilter(field, filterValues);
        case filter.EnumFilterOperator.NE:
            return createNotEqualFilter(field, filterValues);
        case filter.EnumFilterOperator.IN:
            return createInFilter(field, filterValues);
        case filter.EnumFilterOperator.NI:
            return createNotInFilter(field, filterValues);
        default:
            logger.error("unknown enum filter operator","processEnumFilter");
    }
}

function processUuidFilter(field: string, f: filter.UuidFilter, convertValue: filterExt.ConvertUUIDValue): object {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.UuidFilterOperator.EQ:
            return createEqualFilter(field, filterValues);
        case filter.UuidFilterOperator.NE:
            return createNotEqualFilter(field, filterValues);
        case filter.UuidFilterOperator.IN:
            return createInFilter(field, filterValues);
        case filter.UuidFilterOperator.NI:
            return createNotInFilter(field, filterValues);
        default:
            logger.error("unknown uuid filter operator","processUuidFilter");
    }
}

function processStringFilter(field: string, f: filter.StringFilter, convertValue: filterExt.ConvertStrValue): object {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.StringFilterOperator.EQ:
            return createEqualFilter(field, filterValues);
        case filter.StringFilterOperator.NE:
            return createNotEqualFilter(field, filterValues);
        case filter.StringFilterOperator.MA:
            return createMatchFilter(field, filterValues);
        case filter.StringFilterOperator.IN:
            return createInFilter(field, filterValues);
        case filter.StringFilterOperator.NI:
            return createNotInFilter(field, filterValues);
        default:
            logger.error("unknown string filter operator","processStringFilter");
    }
}


export function getMongoFilter(filter: filterExt.DaoFieldFilter[]): object {
    let retObj: object = {};
    if (!filter) {
        return retObj;
    }
    const singleFilter: boolean = filter.length==1;
    const filterElemArray = [];
    filter.forEach(f => {
        let mongoFilter: object = {};
        if (f.dateFilter) {
            mongoFilter = processDateFilter(f.field, f.dateFilter, f.convertValue as filterExt.ConvertDateValue);
        }
        else if (f.boolFilter) {
            mongoFilter = processBooleanFilter(f.field, f.boolFilter, f.convertValue as filterExt.ConvertBooleanValue);
        }
        else if (f.numFilter) {
            mongoFilter = processNumFilter(f.field, f.numFilter, f.convertValue as filterExt.ConvertNumValue);
        }
        else if (f.strFilter) {
            mongoFilter = processStringFilter(f.field, f.strFilter, f.convertValue as filterExt.ConvertStrValue);
        }
        else if (f.uuidFilter) {
            mongoFilter = processUuidFilter(f.field, f.uuidFilter, f.convertValue as filterExt.ConvertUUIDValue);
        }
        else if (f.enumFilter) {
            mongoFilter = processEnumFilter(f.field, f.enumFilter, f.convertValue as filterExt.ConvertEnumValue);
        }
        else {
            logger.error("unknown filter type","getMongoFilter");
        }
        filterElemArray.push(mongoFilter);
    });
    if (singleFilter) {
        return filterElemArray[0];
    }
    else {
        retObj["$and"]=filterElemArray;
        return retObj;
    }
}

export function getMongoSort(sort: filter.FieldSort[]): mongoDb.Sort {
    return {}; // TODO
}