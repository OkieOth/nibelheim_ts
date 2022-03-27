
export const NO_LIMIT=0;

export const NO_FILTER=[];

export const NO_SORT=[];

export enum NumericFilterOperator {
    "EQUAL" = "==",
    "NOT_EQUAL" = "!=",
    "SMALLER_EQUAL" = "<=",
    "SMALLER" = "<",
    "LARGER_EQUAL" = ">=",
    "LARGER" = ">",
    "BETWEEN_INCLUSIVE" = ">=<",
    "BETWEEN_EXCLUSIVE" = "><",
    "IN" = "in",                    // attrib is in one of the values
    "NOT_IN" = "!in",               // attrib isn't in one of the values
}

export enum StringFilterOperator {
    "EQUAL" = "==",
    "NOT_EQUAL" = "!=",
    "MATCH" = "~=",
    "NOT_MATCH" = "!~=",
    "IN" = "in",
    "NOT_IN" = "!in",
}

export enum BooleanFilterOperator {
    "EQUAL" = "==",
    "NOT_EQUAL" = "!=",
}

export enum SortDirection {
    "ASC" = "asc",
    "DESC" = "desc"
}

export interface FieldFilter<S, T> {
    field: string;
    operator: S;
    values: T[];
    getFilterString: (filter:FieldFilter<S,T>) => string;
}

export interface FieldSort {
    field: string;
    direction: SortDirection;
}

export function buildMongoFilter<S, T>(filter: FieldFilter<S, T>[]): object {
    if (filter == null || filter.length == 0) {
        return {};
    }
    const andFilters = filter.map(elem => {
        elem.field
        const ret = {};
        ret[elem.field] = elem.getFilterString(elem.operator, elem.values);
        return ret;
    });

    const ret = {};
    ret["$and"] = andFilters
    // TODO
    return ret;
}

export function getStringValueFilterString(filter:FieldFilter<StringFilterOperator,string>): string {
    return ""; // TODO
}

export function getUUIDValueFilterString(op: StringFilterOperator, values: string[]): string {
    return ""; // TODO
}

export function getNumberValueFilterString(op: NumericFilterOperator, values: number[]): string {
    return ""; // TODO
}

export function getDateValueFilterString(op: NumericFilterOperator, values: Date[]): string {
    return ""; // TODO
}

export function getBoolValueFilterString(op: BooleanFilterOperator, values: boolean[]): string {
    return ""; // TODO
}
