import { assert } from 'chai';
import * as utils from '../src/factory_utils';
import { Chance } from 'chance'
import { randomEnum } from '../../types_random/src/randomFuncs';

describe('Test factory utils', () => {
    it("test date", () => {
        const chance = new Chance();
        const d: any = chance.date();
        assert.isTrue(utils.isDate(d), "didn't accept date object");
        assert.isTrue(utils.isDate(d.toISOString()), "didn't accept date str from date object");
        assert.isTrue(utils.isDate("2092-09-22T14:18:05.460Z"), "didn't accept str");
        assert.isFalse(utils.isDate("2092.09-22T14:18:05.460Z"), "accept wrong str");
        assert.isFalse(utils.isDate("92-09-22T14:18:05.460Z"), "accept wrong str-2");
        assert.isTrue(utils.isDate("2092-09-22T14:18:05"), "didn't accept str");
        // e.g. 2092-09-22T14:18:05.460Z
    });

    it('isUUID test', () => {
        const chance = new Chance();
        const randomUuidV4 = chance.guid({version: 4});
        assert.isTrue(utils.isUUID(randomUuidV4), "random UUID v4 doesn't match");
        const randomUuidV5 = chance.guid({version: 5});
        assert.isTrue(utils.isUUID(randomUuidV5), "random UUID v5 doesn't match");

        const uuid1 = "1234abcd-efg0-5678-0123-abcdefg01234"
        assert.isTrue(utils.isUUID(uuid1), "uuid1 doesn't match");
        const uuid2 = "1234ABCD-EFG0-5678-0123-abcdefg01234"
        assert.isTrue(utils.isUUID(uuid2), "uuid2 doesn't match");
        const uuid3 = "1234ABCD-EFG0-5678-0123-abcdefg0123"
        assert.isFalse(utils.isUUID(uuid3), "uuid3 does match");
        const uuid4 = "1234ABCD-EFG0-5678-0123-abcdefg012345"
        assert.isFalse(utils.isUUID(uuid4), "uuid3 does match");
        const uuid5 = "1234abck-efg0-5678-0123-abcdefg01234"
        assert.isFalse(utils.isUUID(uuid5), "uuid1 doesn't match");
    });

    it('allArrayElemsAreUUIDs test', () => {
        const chance = new Chance();
        const randomUuidV4 = chance.guid({version: 4});
        assert.isTrue(utils.isUUID(randomUuidV4), "random UUID v4 doesn't match");
        const randomUuidV5 = chance.guid({version: 5});
        assert.isTrue(utils.isUUID(randomUuidV5), "random UUID v5 doesn't match");
        const a1 = [randomUuidV4, randomUuidV5];
        assert.isTrue(utils.allArrayElemsAreUUIDs(a1), "no uuid array");

        const a2 = [randomUuidV4, randomUuidV5, "1234abck-efg0-5678-0123-abcdefg01234"];
        assert.isFalse(utils.allArrayElemsAreUUIDs(a2), "not detect wrong uuid array (1)");

        const a3 = ["randomUuidV4", "randomUuidV5"];
        assert.isFalse(utils.allArrayElemsAreUUIDs(a3), "not detect wrong uuid array (2)");

        const a4 = [1, randomUuidV4, randomUuidV5];
        assert.isFalse(utils.allArrayElemsAreUUIDs(a4), "not detect wrong uuid array (3)");
    });
});
