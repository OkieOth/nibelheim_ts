/**
    This file is generated.
    Template: ts_types.mako v0.1.0)
*/

export interface FieldFilter {
    field: string;
    strFilter?: StringFilter;
    enumFilter?: EnumFilter;
    uuidFilter?: UuidFilter;
    numFilter?: NumericFilter;
    dateFilter?: DateFilter;
    boolFilter?: BooleanFilter;
}

export interface StringFilter {
    operator: StringFilterOperator;
    values: string[];
}

export interface EnumFilter {
    operator: EnumFilterOperator;
    values: string[];
}

export interface UuidFilter {
    operator: UuidFilterOperator;
    values: string[];
}

export interface NumericFilter {
    operator: NumericFilterOperator;
    values: number[];
}

export interface DateFilter {
    operator: NumericFilterOperator;
    values: Date[];
}

export interface BooleanFilter {
    operator: BooleanFilterOperator;
    value: boolean;
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

export enum EnumFilterOperator {
        EQ = "EQ",
        NE = "NE",
        IN = "IN",
        NI = "NI",
}

export enum UuidFilterOperator {
        EQ = "EQ",
        NE = "NE",
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
    field: string;
    direction: SortDirection;
}

