import { assert } from 'chai';
import * as utils from '../src/factory_utils';
import { Chance } from 'chance'
import { randomEnum } from '../../types_random/src/randomFuncs';

describe('Test factory utils', () => {
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
});
