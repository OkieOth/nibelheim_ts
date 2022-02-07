/**
    This file is generated.
    Template: type_factories_tests.mako v0.1.0)
*/
import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';

it('serialize/deserialize Mine', () => {
    const randomValue: types.Mine = dummy.randomMine();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    types.parseMine(serialized)
        .then((deserialized: types.Mine) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomValue, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });
});

it('serialize/deserialize arrays of Mine', () => {
    const randomValue1: types.Mine = dummy.randomMine();
    assert.isNotNull(randomValue1, 'randomValue1 returns null');

    const randomValue2: types.Mine = dummy.randomMine();
    assert.isNotNull(randomValue2, 'randomValue2 returns null');

    const randomValue3: types.Mine = dummy.randomMine();    
    assert.isNotNull(randomValue3, 'randomValue3 returns null');

    const randomArray: types.Mine[] = [randomValue1, randomValue2, randomValue3];
    const serialized = JSON.stringify(randomArray);

    const deserialized: types.Mine[] = types.parseMineArray(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomArray, deserialized);

    const serialized2 = JSON.stringify(randomValue1);
    try {
        types.parseMineArray(serialized2);
        assert.fail();
    }
    catch(e) {}

    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    try {
        types.parseMineArray(serialized3);
        assert.fail();
    }
    catch(e) {}
});

it('serialize/deserialize MineSpotRow', () => {
    const randomValue: types.MineSpotRow = dummy.randomMineSpotRow();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    const deserialized: types.MineSpotRow = types.parseMineSpotRow(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomValue, deserialized);
});

it('serialize/deserialize arrays of MineSpotRow', () => {
    const randomValue1: types.MineSpotRow = dummy.randomMineSpotRow();
    assert.isNotNull(randomValue1, 'randomValue1 returns null');

    const randomValue2: types.MineSpotRow = dummy.randomMineSpotRow();
    assert.isNotNull(randomValue2, 'randomValue2 returns null');

    const randomValue3: types.MineSpotRow = dummy.randomMineSpotRow();    
    assert.isNotNull(randomValue3, 'randomValue3 returns null');

    const randomArray: types.MineSpotRow[] = [randomValue1, randomValue2, randomValue3];
    const serialized = JSON.stringify(randomArray);

    const deserialized: types.MineSpotRow[] = types.parseMineSpotRowArray(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomArray, deserialized);

    const serialized2 = JSON.stringify(randomValue1);
    try {
        types.parseMineSpotRowArray(serialized2);
        assert.fail();
    }
    catch(e) {}

    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    try {
        types.parseMineSpotRowArray(serialized3);
        assert.fail();
    }
    catch(e) {}
});

it('serialize/deserialize Dwarf', () => {
    const randomValue: types.Dwarf = dummy.randomDwarf();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    const deserialized: types.Dwarf = types.parseDwarf(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomValue, deserialized);
});

it('serialize/deserialize arrays of Dwarf', () => {
    const randomValue1: types.Dwarf = dummy.randomDwarf();
    assert.isNotNull(randomValue1, 'randomValue1 returns null');

    const randomValue2: types.Dwarf = dummy.randomDwarf();
    assert.isNotNull(randomValue2, 'randomValue2 returns null');

    const randomValue3: types.Dwarf = dummy.randomDwarf();    
    assert.isNotNull(randomValue3, 'randomValue3 returns null');

    const randomArray: types.Dwarf[] = [randomValue1, randomValue2, randomValue3];
    const serialized = JSON.stringify(randomArray);

    const deserialized: types.Dwarf[] = types.parseDwarfArray(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomArray, deserialized);

    const serialized2 = JSON.stringify(randomValue1);
    try {
        types.parseDwarfArray(serialized2);
        assert.fail();
    }
    catch(e) {}

    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    try {
        types.parseDwarfArray(serialized3);
        assert.fail();
    }
    catch(e) {}
});

it('serialize/deserialize Storage', () => {
    const randomValue: types.Storage = dummy.randomStorage();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    const deserialized: types.Storage = types.parseStorage(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomValue, deserialized);
});

it('serialize/deserialize arrays of Storage', () => {
    const randomValue1: types.Storage = dummy.randomStorage();
    assert.isNotNull(randomValue1, 'randomValue1 returns null');

    const randomValue2: types.Storage = dummy.randomStorage();
    assert.isNotNull(randomValue2, 'randomValue2 returns null');

    const randomValue3: types.Storage = dummy.randomStorage();    
    assert.isNotNull(randomValue3, 'randomValue3 returns null');

    const randomArray: types.Storage[] = [randomValue1, randomValue2, randomValue3];
    const serialized = JSON.stringify(randomArray);

    const deserialized: types.Storage[] = types.parseStorageArray(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomArray, deserialized);

    const serialized2 = JSON.stringify(randomValue1);
    try {
        types.parseStorageArray(serialized2);
        assert.fail();
    }
    catch(e) {}

    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    try {
        types.parseStorageArray(serialized3);
        assert.fail();
    }
    catch(e) {}
});

it('serialize/deserialize MineSpot', () => {
    const randomValue: types.MineSpot = dummy.randomMineSpot();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    const deserialized: types.MineSpot = types.parseMineSpot(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomValue, deserialized);
});

it('serialize/deserialize arrays of MineSpot', () => {
    const randomValue1: types.MineSpot = dummy.randomMineSpot();
    assert.isNotNull(randomValue1, 'randomValue1 returns null');

    const randomValue2: types.MineSpot = dummy.randomMineSpot();
    assert.isNotNull(randomValue2, 'randomValue2 returns null');

    const randomValue3: types.MineSpot = dummy.randomMineSpot();    
    assert.isNotNull(randomValue3, 'randomValue3 returns null');

    const randomArray: types.MineSpot[] = [randomValue1, randomValue2, randomValue3];
    const serialized = JSON.stringify(randomArray);

    const deserialized: types.MineSpot[] = types.parseMineSpotArray(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomArray, deserialized);

    const serialized2 = JSON.stringify(randomValue1);
    try {
        types.parseMineSpotArray(serialized2);
        assert.fail();
    }
    catch(e) {}

    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    try {
        types.parseMineSpotArray(serialized3);
        assert.fail();
    }
    catch(e) {}
});


