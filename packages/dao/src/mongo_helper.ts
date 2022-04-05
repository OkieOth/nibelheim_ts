import * as mongoDb from "mongodb";
import * as filterExt from "../src/filter_types_ext"
import * as filter from "filter";
import {logger} from "logger";

export const NO_LIMIT=0;

export const NO_FILTER=[];

export const NO_SORT=[];

type FilterValues = string[] | number [] | Date[] | boolean[];

function createEqualFilter(filterValues: FilterValues, retObj: object) {
    // TODO
}

function createNotEqualFilter(filterValues: FilterValues, retObj: object) {
    // TODO
}


function processDateFilter(field: string, f: filter.DateFilter, convertValue: filterExt.ConvertDateValue, retObj: object) {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.NumericFilterOperator.EQ:
            createEqualFilter(filterValues, retObj);
            return;
        case filter.NumericFilterOperator.NE:
            createNotEqualFilter(filterValues, retObj);
            return;
        case filter.NumericFilterOperator.LT:
            // TODO
            return;
        case filter.NumericFilterOperator.LE:
            // TODO
            return;
        case filter.NumericFilterOperator.GT:
            // TODO
            return;
        case filter.NumericFilterOperator.GE:
            // TODO
            return;
        case filter.NumericFilterOperator.IB:
            // TODO
            return;
        case filter.NumericFilterOperator.EB:
            // TODO
            return;
        case filter.NumericFilterOperator.IN:
            // TODO
            return;
        case filter.NumericFilterOperator.NI:
            // TODO
            return;
        default:
            logger.error("unknown numeric filter operator","processNumFilter");
    }
}
function processBooleanFilter(field: string, f: filter.BooleanFilter, convertValue: filterExt.ConvertBooleanValue, retObj: object) {
    const filterValue = convertValue(f.value);
    switch (f.operator) {
        case filter.BooleanFilterOperator.EQ:
            createEqualFilter([filterValue], retObj);
            return;
        case filter.BooleanFilterOperator.NE:
            createNotEqualFilter([filterValue], retObj);
            return;
        default:
            logger.error("unknown enum boolean operator","processBooleanFilter");
    }
}
function processNumFilter(field: string, f: filter.NumericFilter, convertValue: filterExt.ConvertNumValue, retObj: object) {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.NumericFilterOperator.EQ:
            createEqualFilter(filterValues, retObj);
            return;
        case filter.NumericFilterOperator.NE:
            createNotEqualFilter(filterValues, retObj);
            return;
        case filter.NumericFilterOperator.LT:
            // TODO
            return;
        case filter.NumericFilterOperator.LE:
            // TODO
            return;
        case filter.NumericFilterOperator.GT:
            // TODO
            return;
        case filter.NumericFilterOperator.GE:
            // TODO
            return;
        case filter.NumericFilterOperator.IB:
            // TODO
            return;
        case filter.NumericFilterOperator.EB:
            // TODO
            return;
        case filter.NumericFilterOperator.IN:
            // TODO
            return;
        case filter.NumericFilterOperator.NI:
            // TODO
            return;
        default:
            logger.error("unknown numeric filter operator","processNumFilter");
    }
}

function processEnumFilter(field: string, f: filter.EnumFilter, convertValue: filterExt.ConvertEnumValue, retObj: object) {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.EnumFilterOperator.EQ:
            createEqualFilter(filterValues, retObj);
            return;
        case filter.EnumFilterOperator.NE:
            createNotEqualFilter(filterValues, retObj);
            return;
        case filter.EnumFilterOperator.IN:
            // TODO
            return;
        case filter.EnumFilterOperator.NI:
            // TODO
            return;
        default:
            logger.error("unknown enum filter operator","processEnumFilter");
    }
}

function processUuidFilter(field: string, f: filter.UuidFilter, convertValue: filterExt.ConvertUUIDValue, retObj: object) {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.UuidFilterOperator.EQ:
            createEqualFilter(filterValues, retObj);
            return;
        case filter.UuidFilterOperator.NE:
            createNotEqualFilter(filterValues, retObj);
            return;
        case filter.UuidFilterOperator.IN:
            // TODO
            return;
        case filter.UuidFilterOperator.NI:
            // TODO
            return;
        default:
            logger.error("unknown uuid filter operator","processUuidFilter");
    }
}

function processStringFilter(field: string, f: filter.StringFilter, convertValue: filterExt.ConvertStrValue, retObj: object) {
    const filterValues = f.values.map(value => {
        return convertValue(value)
    });
    switch (f.operator) {
        case filter.StringFilterOperator.EQ:
            createEqualFilter(filterValues, retObj);
            return;
        case filter.StringFilterOperator.NE:
            createNotEqualFilter(filterValues, retObj);
            return;
        case filter.StringFilterOperator.MA:
            // TODO
            return;
        case filter.StringFilterOperator.NM:
            // TODO
            return;
        case filter.StringFilterOperator.IN:
            // TODO
            return;
        case filter.StringFilterOperator.NI:
            // TODO
            return;
        default:
            logger.error("unknown string filter operator","processStringFilter");
    }
}


export function getMongoFilter(filter: filterExt.DaoFieldFilter[]): object {
    const retObj = {};
    filter.forEach(f => {
        if (f.dateFilter) {
            processDateFilter(f.field, f.dateFilter, f.convertValue as filterExt.ConvertDateValue, retObj);
        }
        else if (f.boolFilter) {
            processBooleanFilter(f.field, f.boolFilter, f.convertValue as filterExt.ConvertBooleanValue, retObj);
        }
        else if (f.numFilter) {
            processNumFilter(f.field, f.numFilter, f.convertValue as filterExt.ConvertNumValue, retObj);
        }
        else if (f.strFilter) {
            processStringFilter(f.field, f.strFilter, f.convertValue as filterExt.ConvertStrValue, retObj);
        }
        else if (f.uuidFilter) {
            processUuidFilter(f.field, f.uuidFilter, f.convertValue as filterExt.ConvertUUIDValue, retObj);
        }
        else if (f.enumFilter) {
            processEnumFilter(f.field, f.enumFilter, f.convertValue as filterExt.ConvertEnumValue, retObj);
        }
        else {
            logger.error("unknown filter type","getMongoFilter");
        }
    });
    return retObj;
}

export function getMongoSort(sort: filter.FieldSort[]): mongoDb.Sort {
    return {}; // TODO
}