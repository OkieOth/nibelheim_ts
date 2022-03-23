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

