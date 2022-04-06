import * as mongoDb from "mongodb";
import * as filterExt from "../src/filter_types_ext"
import * as filter from "filter";
import {logger} from "logger";

export const NO_LIMIT=0;

export const NO_FILTER=[];

export const NO_SORT=[];

type FilterValues = string[] | number [] | Date[] | boolean[];

function createEqualFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createNotEqualFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createLessFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createLessEqualFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createGreaterFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createGreaterEqualFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createBetweenIncludeFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createBetweenExcludeFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createInFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createNotInFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createMatchFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function createMatchNotFilter(filterValues: FilterValues): object {
    return {};// TODO
}

function processDateFilter(field: string, f: filter.DateFilter, convertValue: filterExt.ConvertDateValue): object {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.NumericFilterOperator.EQ:
            return createEqualFilter(filterValues);
        case filter.NumericFilterOperator.NE:
            return createNotEqualFilter(filterValues);
        case filter.NumericFilterOperator.LT:
            return createLessFilter(filterValues);
        case filter.NumericFilterOperator.LE:
            return createLessEqualFilter(filterValues);
        case filter.NumericFilterOperator.GT:
            return createGreaterFilter(filterValues);
        case filter.NumericFilterOperator.GE:
            return createGreaterEqualFilter(filterValues);
        case filter.NumericFilterOperator.IB:
            return createBetweenIncludeFilter(filterValues);
        case filter.NumericFilterOperator.EB:
            return createBetweenExcludeFilter(filterValues);
        case filter.NumericFilterOperator.IN:
            return createInFilter(filterValues);
        case filter.NumericFilterOperator.NI:
            return createNotInFilter(filterValues);
        default:
            logger.error("unknown numeric filter operator","processNumFilter");
    }
}
function processBooleanFilter(field: string, f: filter.BooleanFilter, convertValue: filterExt.ConvertBooleanValue): object {
    const filterValue = convertValue(f.value);
    switch (f.operator) {
        case filter.BooleanFilterOperator.EQ:
            return createEqualFilter([filterValue]);
        case filter.BooleanFilterOperator.NE:
            return createNotEqualFilter([filterValue]);
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
            return createEqualFilter(filterValues);
        case filter.NumericFilterOperator.NE:
            return createNotEqualFilter(filterValues);
        case filter.NumericFilterOperator.LT:
            return createLessFilter(filterValues);
        case filter.NumericFilterOperator.LE:
            return createLessEqualFilter(filterValues);
        case filter.NumericFilterOperator.GT:
            return createGreaterFilter(filterValues);
        case filter.NumericFilterOperator.GE:
            return createGreaterEqualFilter(filterValues);
        case filter.NumericFilterOperator.IB:
            return createBetweenIncludeFilter(filterValues);
        case filter.NumericFilterOperator.EB:
            return createBetweenExcludeFilter(filterValues);
        case filter.NumericFilterOperator.IN:
            return createInFilter(filterValues);
        case filter.NumericFilterOperator.NI:
            return createNotInFilter(filterValues);
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
            return createEqualFilter(filterValues);
        case filter.EnumFilterOperator.NE:
            return createNotEqualFilter(filterValues);
        case filter.EnumFilterOperator.IN:
            return createInFilter(filterValues);
        case filter.EnumFilterOperator.NI:
            return createNotInFilter(filterValues);
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
            return createEqualFilter(filterValues);
        case filter.UuidFilterOperator.NE:
            return createNotEqualFilter(filterValues);
        case filter.UuidFilterOperator.IN:
            return createInFilter(filterValues);
        case filter.UuidFilterOperator.NI:
            return createNotInFilter(filterValues);
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
            return createEqualFilter(filterValues);
        case filter.StringFilterOperator.NE:
            return createNotEqualFilter(filterValues);
        case filter.StringFilterOperator.MA:
            return createMatchFilter(filterValues);
        case filter.StringFilterOperator.NM:
            return createMatchNotFilter(filterValues);
        case filter.StringFilterOperator.IN:
            return createInFilter(filterValues);
        case filter.StringFilterOperator.NI:
            return createNotInFilter(filterValues);
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
        if (singleFilter) {
            return mongoFilter;
        }
        else {
            filterElemArray.push(mongoFilter);
        }
    });
    retObj["$and"]=filterElemArray;
    return retObj;
}

export function getMongoSort(sort: filter.FieldSort[]): mongoDb.Sort {
    return {}; // TODO
}