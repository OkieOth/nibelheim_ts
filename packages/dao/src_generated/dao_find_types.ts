/**
    This file is generated.
    Template: dao_find_types.mako v0.1.0)

    The file provides helper types to filter database collections. All types that are
    tagged with 'mongodb' are included. For filter are properties with a 'x-tag' 'daoFilter'
    included.
*/
import * as filter from "filter";
import * as filterExt from "../src/filter_types_ext"
import * as types from "types"


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

export function createMineFilterStorageMithril(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "storage.mithril",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createMineFilterStorageGold(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "storage.gold",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createMineFilterStorageSilver(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "storage.silver",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createMineFilterStorageDiamond(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "storage.diamond",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createMineFilterStorageIron(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "storage.iron",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createMineFilterStorageCupper(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "storage.cupper",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
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

export function createMineFilterDwarfs(op: filter.UuidFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "dwarfs",
        uuidFilter: {
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

export function createMineSpotRowFilterMine_id(op: filter.UuidFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "mine_id",
        uuidFilter: {
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

export function createMineSpotRowFilterColumnsMaterial(op: filter.EnumFilterOperator, v: types.MineSpotMaterial[]): filterExt.DaoFieldFilter {
    return {
        field: "columns.material",
        enumFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertEnumValue
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

export function createDwarfFilterMine_id(op: filter.UuidFilterOperator, v: string[]): filterExt.DaoFieldFilter {
    return {
        field: "mine_id",
        uuidFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertUUIDValue
    };
}

export function createDwarfFilterPocketMithril(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "pocket.mithril",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterPocketGold(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "pocket.gold",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterPocketSilver(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "pocket.silver",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterPocketDiamond(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "pocket.diamond",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterPocketIron(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "pocket.iron",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
    };
}

export function createDwarfFilterPocketCupper(op: filter.NumericFilterOperator, v: number[]): filterExt.DaoFieldFilter {
    return {
        field: "pocket.cupper",
        numFilter: {
            operator: op,
            values: v
        },
        convertValue: filterExt.convertNumValue
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

