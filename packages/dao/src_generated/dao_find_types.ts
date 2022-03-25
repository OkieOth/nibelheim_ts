/**
    This file is generated.
    Template: dao_find_types.mako v0.1.0)

    The file provides helper types to filter database collections. All types that are
    tagged with 'mongodb' are included. For filter are properties with a 'x-tag' 'daoFilter'
    included.
*/
import {
    StringFilterOperator,
    NumericFilterOperator,
    FieldFilter,
    SortDirection,
    FieldSort} from "../src/mongo_helper";

export type MineFilter =
                FieldFilter<string, StringFilterOperator> |
                FieldFilter<Date, NumericFilterOperator>;

export type MineSpotRowFilter =
                FieldFilter<string, StringFilterOperator> |
                FieldFilter<number, NumericFilterOperator>;

export type DwarfFilter =
                FieldFilter<string, StringFilterOperator> |
                FieldFilter<number, NumericFilterOperator>;


export function createMineFilterName(op: StringFilterOperator, v: string[]): FieldFilter<StringFilterOperator, string> {
    return {
        field: "name",
        operator: op,
        values: v
    };
}

export function createMineFilterTime(op: NumericFilterOperator, v: Date[]): FieldFilter<NumericFilterOperator, Date> {
    return {
        field: "time",
        operator: op,
        values: v
    };
}

export function createMineFilterDwarfs(op: StringFilterOperator, v: string[]): FieldFilter<StringFilterOperator, string> {
    return {
        field: "dwarfs",
        operator: op,
        values: v
    };
}

export function createMineSpotRowFilterMine_id(op: StringFilterOperator, v: string[]): FieldFilter<StringFilterOperator, string> {
    return {
        field: "mine_id",
        operator: op,
        values: v
    };
}

export function createMineSpotRowFilterRow_number(op: NumericFilterOperator, v: number[]): FieldFilter<NumericFilterOperator, number> {
    return {
        field: "row_number",
        operator: op,
        values: v
    };
}

export function createMineSpotRowFilterLevel(op: NumericFilterOperator, v: number[]): FieldFilter<NumericFilterOperator, number> {
    return {
        field: "level",
        operator: op,
        values: v
    };
}

export function createDwarfFilterName(op: StringFilterOperator, v: string[]): FieldFilter<StringFilterOperator, string> {
    return {
        field: "name",
        operator: op,
        values: v
    };
}

export function createDwarfFilterMine_id(op: StringFilterOperator, v: string[]): FieldFilter<StringFilterOperator, string> {
    return {
        field: "mine_id",
        operator: op,
        values: v
    };
}

export function createDwarfFilterCurrentStrongness(op: NumericFilterOperator, v: number[]): FieldFilter<NumericFilterOperator, number> {
    return {
        field: "currentStrongness",
        operator: op,
        values: v
    };
}

export function createDwarfFilterHunger(op: NumericFilterOperator, v: number[]): FieldFilter<NumericFilterOperator, number> {
    return {
        field: "hunger",
        operator: op,
        values: v
    };
}

export function createDwarfFilterHealthiness(op: NumericFilterOperator, v: number[]): FieldFilter<NumericFilterOperator, number> {
    return {
        field: "healthiness",
        operator: op,
        values: v
    };
}

export function createDwarfFilterMotivation(op: NumericFilterOperator, v: number[]): FieldFilter<NumericFilterOperator, number> {
    return {
        field: "motivation",
        operator: op,
        values: v
    };
}

