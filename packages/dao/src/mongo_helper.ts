import * as mongoDb from "mongodb";
import * as filterExt from "../src/filter_types_ext"
import * as filter from "filter";
import {logger} from "logger";

export const NO_LIMIT=0;

export const NO_FILTER=[];

export const NO_SORT=[];

function processDateFilter(field: string, filter: filter.DateFilter, retObj: object) {
/*
    switch (filter.operator) {
        case :
            break;
        default:
            logger.error("unknown string filter operator","processStringFilter");
            return;
    }
*/
    // TODO
}
function processBooleanFilter(field: string, filter: filter.BooleanFilter, retObj: object) {
/*
    switch (filter.operator) {
        case :
            break;
        default:
            logger.error("unknown string filter operator","processStringFilter");
            return;
    }
*/
    // TODO
}
function processNumFilter(field: string, filter: filter.NumericFilter, retObj: object) {
/*
    switch (filter.operator) {
        case :
            break;
        default:
            logger.error("unknown string filter operator","processStringFilter");
            return;
    }
*/
    // TODO
}
function processStringFilter(field: string, filter: filter.StringFilter, retObj: object) {
    // TODO
    switch (filter.operator) {
        case :
            break;
        default:
            logger.error("unknown string filter operator","processStringFilter");
            return;
    }
    const eqExpression = {
        "$eq": filter.values[0]
    };
    retObj[field] = eqExpression;
    return retObj;
}


export function getMongoFilter(filter: filterExt.DaoFieldFilter[]): object {
    const retObj = {};
    filter.forEach(f => {
        if (f.dateFilter) {
            processDateFilter(f.field, f.dateFilter, retObj);
        }
        else if (f.boolFilter) {
            processBooleanFilter(f.field, f.boolFilter, retObj);
        }
        else if (f.numFilter) {
            processNumFilter(f.field, f.numFilter, retObj);
        }
        else if (f.strFilter) {
            processStringFilter(f.field, f.strFilter, retObj);
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