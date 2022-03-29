/**
    This file is generated.
    Template: dao_find_types.mako v0.1.0)

    The file provides helper types to filter database collections. All types that are
    tagged with 'mongodb' are included. For filter are properties with a 'x-tag' 'daoFilter'
    included.
*/
import * as filter from "filter";


export function createMineFilterName(op: filter.StringFilterOperator, v: string[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "name",
        operator: op,
        values: v
    };
*/
}

export function createMineFilterTime(op: filter.NumericFilterOperator, v: Date[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "time",
        operator: op,
        values: v
    };
*/
}

export function createMineFilterDwarfs(op: filter.StringFilterOperator, v: string[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "dwarfs",
        operator: op,
        values: v
    };
*/
}

export function createMineFilterActive(op: filter.BooleanFilterOperator, v: boolean[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "active",
        operator: op,
        values: v
    };
*/
}

export function createMineSpotRowFilterMine_id(op: filter.StringFilterOperator, v: string[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "mine_id",
        operator: op,
        values: v
    };
*/
}

export function createMineSpotRowFilterRow_number(op: filter.NumericFilterOperator, v: number[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "row_number",
        operator: op,
        values: v
    };
*/
}

export function createMineSpotRowFilterLevel(op: filter.NumericFilterOperator, v: number[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "level",
        operator: op,
        values: v
    };
*/
}

export function createDwarfFilterName(op: filter.StringFilterOperator, v: string[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "name",
        operator: op,
        values: v
    };
*/
}

export function createDwarfFilterMine_id(op: filter.StringFilterOperator, v: string[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "mine_id",
        operator: op,
        values: v
    };
*/
}

export function createDwarfFilterCurrentStrongness(op: filter.NumericFilterOperator, v: number[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "currentStrongness",
        operator: op,
        values: v
    };
*/
}

export function createDwarfFilterHunger(op: filter.NumericFilterOperator, v: number[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "hunger",
        operator: op,
        values: v
    };
*/
}

export function createDwarfFilterHealthiness(op: filter.NumericFilterOperator, v: number[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "healthiness",
        operator: op,
        values: v
    };
*/
}

export function createDwarfFilterMotivation(op: filter.NumericFilterOperator, v: number[]): filter.FieldFilter {
    return null;
/*
    return {
        field: "motivation",
        operator: op,
        values: v
    };
*/
}

