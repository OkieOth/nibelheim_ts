/**
    This file is generated.
    Template: ts_types.mako v0.1.0)
*/

export interface FieldFilter {
    field?: string;
    strFilter?: FieldFilterStrFilter;
    numFilter?: FieldFilterNumFilter;
    dateFilter?: FieldFilterDateFilter;
    booleanFilter?: FieldFilterBooleanFilter;
}

export interface FieldFilterStrFilter {
    operator?: StringFilterOperator;
    values?: string[];
}

export enum NumericFilterOperator {
        EQ = "EQ",
        NE = "NE",
        LT = "LT",
        LE = "LE",
        GT = "GT",
        GE = "GE",
        IB = "IB",
        EB = "EB",
        IN = "IN",
        NI = "NI",
}

export enum StringFilterOperator {
        EQ = "EQ",
        NE = "NE",
        MA = "MA",
        NM = "NM",
        IN = "IN",
        NI = "NI",
}

export enum BooleanFilterOperator {
        EQ = "EQ",
        NE = "NE",
}

export enum SortDirection {
        ASC = "ASC",
        DESC = "DESC",
}

export interface FieldSort {

    /**
     field used for sorting
    */
    field?: string;
    direction?: SortDirection;
}

export interface FieldFilterNumFilter {
    operator?: NumericFilterOperator;
    values?: number[];
}

export interface FieldFilterDateFilter {
    operator?: NumericFilterOperator;
    values?: Date[];
}

export interface FieldFilterBooleanFilter {
    booleanOperator?: BooleanFilterOperator;
    value?: boolean;
}

