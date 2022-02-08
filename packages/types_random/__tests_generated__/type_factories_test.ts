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

    types.parseMineArray(serialized)
        .then((deserialized: types.Mine[]) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomArray, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });


    const serialized2 = JSON.stringify(randomValue1);
    types.parseMineArray(serialized2)
        .then((deserialized: types.Mine[]) => {
            assert.fail("parseMineArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseMineArray detect none array")
        });


    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    types.parseMineArray(serialized3)
        .then((deserialized: types.Mine[]) => {
            assert.fail("parseMineArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseMineArray detect array with wrong elements")
        });
});

it('serialize/deserialize MineSpotRow', () => {
    const randomValue: types.MineSpotRow = dummy.randomMineSpotRow();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    types.parseMineSpotRow(serialized)
        .then((deserialized: types.MineSpotRow) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomValue, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });
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

    types.parseMineSpotRowArray(serialized)
        .then((deserialized: types.MineSpotRow[]) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomArray, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });


    const serialized2 = JSON.stringify(randomValue1);
    types.parseMineSpotRowArray(serialized2)
        .then((deserialized: types.MineSpotRow[]) => {
            assert.fail("parseMineSpotRowArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseMineSpotRowArray detect none array")
        });


    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    types.parseMineSpotRowArray(serialized3)
        .then((deserialized: types.MineSpotRow[]) => {
            assert.fail("parseMineSpotRowArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseMineSpotRowArray detect array with wrong elements")
        });
});

it('serialize/deserialize Dwarf', () => {
    const randomValue: types.Dwarf = dummy.randomDwarf();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    types.parseDwarf(serialized)
        .then((deserialized: types.Dwarf) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomValue, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });
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

    types.parseDwarfArray(serialized)
        .then((deserialized: types.Dwarf[]) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomArray, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });


    const serialized2 = JSON.stringify(randomValue1);
    types.parseDwarfArray(serialized2)
        .then((deserialized: types.Dwarf[]) => {
            assert.fail("parseDwarfArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseDwarfArray detect none array")
        });


    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    types.parseDwarfArray(serialized3)
        .then((deserialized: types.Dwarf[]) => {
            assert.fail("parseDwarfArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseDwarfArray detect array with wrong elements")
        });
});

it('serialize/deserialize Storage', () => {
    const randomValue: types.Storage = dummy.randomStorage();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    types.parseStorage(serialized)
        .then((deserialized: types.Storage) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomValue, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });
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

    types.parseStorageArray(serialized)
        .then((deserialized: types.Storage[]) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomArray, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });


    const serialized2 = JSON.stringify(randomValue1);
    types.parseStorageArray(serialized2)
        .then((deserialized: types.Storage[]) => {
            assert.fail("parseStorageArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseStorageArray detect none array")
        });


    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    types.parseStorageArray(serialized3)
        .then((deserialized: types.Storage[]) => {
            assert.fail("parseStorageArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseStorageArray detect array with wrong elements")
        });
});

it('serialize/deserialize MineSpot', () => {
    const randomValue: types.MineSpot = dummy.randomMineSpot();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    types.parseMineSpot(serialized)
        .then((deserialized: types.MineSpot) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomValue, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });
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

    types.parseMineSpotArray(serialized)
        .then((deserialized: types.MineSpot[]) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomArray, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });


    const serialized2 = JSON.stringify(randomValue1);
    types.parseMineSpotArray(serialized2)
        .then((deserialized: types.MineSpot[]) => {
            assert.fail("parseMineSpotArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseMineSpotArray detect none array")
        });


    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    types.parseMineSpotArray(serialized3)
        .then((deserialized: types.MineSpot[]) => {
            assert.fail("parseMineSpotArray (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parseMineSpotArray detect array with wrong elements")
        });
});


