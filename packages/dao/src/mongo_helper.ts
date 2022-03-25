
export const NO_LIMIT=-1;

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

export interface NumericFilterField {
    operator: NumericFilterOperator;
}

export enum StringFilterOperator {
    "EQUAL" = "==",
    "NOT_EQUAL" = "!=",
    "MATCH" = "~=",
    "NOT_MATCH" = "!~=",
    "IN" = "in",
    "NOT_IN" = "!in",
}

export interface StringFilterField {
    operator: StringFilterOperator;
}

export enum SortDirection {
    "ASC" = "asc",
    "DESC" = "desc"
}

export interface FieldFilter<S, T> {
    field: string;
    operator: S;
    values: T[];
}

export interface FieldSort {
    field: string;
    direction: SortDirection;
}
