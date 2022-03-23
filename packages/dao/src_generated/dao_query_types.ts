import {
    StringFilterOperator,
    NumericFilterOperator,
    FieldFilter,
    SortDirection,
    FieldSort} from "../src/mongo_helper";

export type MineFilter = 
                FieldFilter<StringFilterOperator, string> |
                FieldFilter<NumericFilterOperator, Date>;


export function createMineFilterName(op: StringFilterOperator, v: string[]): FieldFilter<StringFilterOperator, string> {
    return {
        field: "name",
        operator: op,
        values: v
    };
}

export function createMineFilterDwarf(op: StringFilterOperator, v: string[]): FieldFilter<StringFilterOperator, string> {
    return {
        field: "name",
        operator: op,
        values: v
    };
}

export function createMineFilterTimestamp(op: NumericFilterOperator, v: Date[]): FieldFilter<NumericFilterOperator, Date> {
    return {
        field: "timestamp",
        operator: op,
        values: v
    };
}

export function createMineSortName(d: SortDirection): FieldSort {
    return {
        field: "name",
        direction: d
    };
}

