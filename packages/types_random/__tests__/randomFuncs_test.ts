import * as types from 'types';
import * as funcs from '../src/randomFuncs';
import { assert } from 'chai';

it('randomDate', () => {
    const d1: Date = funcs.randomDate();
    const d2: Date = funcs.randomDate();
    assert.isNotNull(d1);
    assert.isNotNull(d2);
    assert.typeOf(d1, "Date");
    assert.typeOf(d2, "Date");
    assert.isFalse(d1 === d2);
});

it('randomEnum', () => {
    const e1: types.MineSpotMaterial = funcs.randomEnum(types.MineSpotMaterial);
    const e2: types.MineSpotMaterial = funcs.randomEnum(types.MineSpotMaterial);
    const e3: types.MineSpotMaterial = funcs.randomEnum(types.MineSpotMaterial);
    const e4: types.MineSpotMaterial = funcs.randomEnum(types.MineSpotMaterial);
    const e5: types.MineSpotMaterial = funcs.randomEnum(types.MineSpotMaterial);
    assert.isNotNull(e1);
    assert.isNotNull(e2);
    assert.isNotNull(e3);
    assert.isNotNull(e4);
    assert.isNotNull(e5);
    assert.isFalse(e1 === e2 && e2 === e3 && e3 === e4 && e4 === e5);
});
