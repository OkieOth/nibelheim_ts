import * as mongoDb from "mongodb";
import * as filterExt from "../src/filter_types_ext"
import * as filter from "filter";

export const NO_LIMIT=0;

export const NO_FILTER=[];

export const NO_SORT=[];

export function getMongoFilter(filter: filterExt.DaoFieldFilter[]): object {
    return {}; // TODO
}

export function getMongoSort(sort: filter.FieldSort[]): mongoDb.Sort {
    return {}; // TODO
}