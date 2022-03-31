/**
    This file is generated.
    Template: dao_find_types.mako v0.1.0)

    The file provides helper types to filter database collections. All types that are
    tagged with 'mongodb' are included. For filter are properties with a 'x-tag' 'daoFilter'
    included.
*/
import * as filter from "filter";
import * as filterExt from "../src/filter_types_ext"


export function createMineFilterName(op: filter.StringFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "name",
        strFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertStrValue
    };
}

export function createMineFilterTime(op: filter.NumericFilterOperator, v: Date[]): filterExt.DaoFieldFilter {
    return {
        field: "time",
        dateFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertDateValue
    };
}

export function createMineFilterDwarfs(op: filter.StringFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "dwarfs",
        strFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertUUIDValue
    };
}

export function createMineFilterActive(op: filter.BooleanFilterOperator, v: boolean): filterExt.DaoFieldFilter {
    return {
        field: "active",
        boolFilter: {
            operator: op,
            value: v
        },
        convertValue: filterExt.convertBooleanValue
    };
}

export function createMineSpotRowFilterMine_id(op: filter.StringFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "mine_id",
        strFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertUUIDValue
    };
}

export function createMineSpotRowFilterRow_number(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "row_number",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createMineSpotRowFilterLevel(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "level",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterName(op: filter.StringFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "name",
        strFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertStrValue
    };
}

export function createDwarfFilterMine_id(op: filter.StringFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "mine_id",
        strFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertUUIDValue
    };
}

export function createDwarfFilterCurrentStrongness(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "currentStrongness",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterHunger(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "hunger",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterHealthiness(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "healthiness",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterMotivation(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "motivation",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

