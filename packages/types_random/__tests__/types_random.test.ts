import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';

it('first test', () => {
    console.log("types_random: I am a dummy test");
});

it('serialize/deserialize Mine', () => {
    const randomMine: types.Mine = dummy.randomMine();
    assert.isNotNull(randomMine, 'randomMine returns null');
    const serialized = JSON.stringify(randomMine);

    //JSON.parse(serialized);

    console.log(serialized);
});
