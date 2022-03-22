import {StringFilterOperator} from "../src/mongo_helper";
import {MineFilterName}  from "../src_generated/dao_query_types";

describe('some constructor tests', async () => {
    it('filter type', async () => {
        const nameFilter: MineFilterName = {
            operator: StringFilterOperator.EQUAL
        };
    });
});