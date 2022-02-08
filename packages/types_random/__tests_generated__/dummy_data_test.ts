/**
    This file is generated.
    Template: random_instances_tests.mako v0.1.0)
*/
import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';


describe('Dummy data creation with random optional attributes', () => {
    it('test Mine', () => {
        const x: types.Mine = dummy.randomMine();
        const y: types.Mine = dummy.randomMine();
        assert.isNotNull(x, 'randomMine 1 returns null');
        assert.isNotNull(y, 'randomMine 2 returns null');
        assert.isTrue(types.isMine(x));
        assert.isTrue(types.isMine(y));
        assert.isFalse(types.isMine([y]));
        assert.isFalse(types.isMine([x,y]));
        assert.isFalse(types.isMine("test"));
        assert.isFalse(types.isMineArray(x));
        assert.isFalse(types.isMineArray(y));
        assert.isTrue(types.isMineArray([x]));
        assert.isTrue(types.isMineArray([y]));
        assert.isTrue(types.isMineArray([x,y]));
    });

    it('test MineSpotRow', () => {
        const x: types.MineSpotRow = dummy.randomMineSpotRow();
        const y: types.MineSpotRow = dummy.randomMineSpotRow();
        assert.isNotNull(x, 'randomMineSpotRow 1 returns null');
        assert.isNotNull(y, 'randomMineSpotRow 2 returns null');
        assert.isTrue(types.isMineSpotRow(x));
        assert.isTrue(types.isMineSpotRow(y));
        assert.isFalse(types.isMineSpotRow([y]));
        assert.isFalse(types.isMineSpotRow([x,y]));
        assert.isFalse(types.isMineSpotRow("test"));
        assert.isFalse(types.isMineSpotRowArray(x));
        assert.isFalse(types.isMineSpotRowArray(y));
        assert.isTrue(types.isMineSpotRowArray([x]));
        assert.isTrue(types.isMineSpotRowArray([y]));
        assert.isTrue(types.isMineSpotRowArray([x,y]));
    });

    it('test Dwarf', () => {
        const x: types.Dwarf = dummy.randomDwarf();
        const y: types.Dwarf = dummy.randomDwarf();
        assert.isNotNull(x, 'randomDwarf 1 returns null');
        assert.isNotNull(y, 'randomDwarf 2 returns null');
        assert.isTrue(types.isDwarf(x));
        assert.isTrue(types.isDwarf(y));
        assert.isFalse(types.isDwarf([y]));
        assert.isFalse(types.isDwarf([x,y]));
        assert.isFalse(types.isDwarf("test"));
        assert.isFalse(types.isDwarfArray(x));
        assert.isFalse(types.isDwarfArray(y));
        assert.isTrue(types.isDwarfArray([x]));
        assert.isTrue(types.isDwarfArray([y]));
        assert.isTrue(types.isDwarfArray([x,y]));
    });

    it('test Storage', () => {
        const x: types.Storage = dummy.randomStorage();
        const y: types.Storage = dummy.randomStorage();
        assert.isNotNull(x, 'randomStorage 1 returns null');
        assert.isNotNull(y, 'randomStorage 2 returns null');
        assert.isTrue(types.isStorage(x));
        assert.isTrue(types.isStorage(y));
        assert.isFalse(types.isStorage([y]));
        assert.isFalse(types.isStorage([x,y]));
        assert.isFalse(types.isStorage("test"));
        assert.isFalse(types.isStorageArray(x));
        assert.isFalse(types.isStorageArray(y));
        assert.isTrue(types.isStorageArray([x]));
        assert.isTrue(types.isStorageArray([y]));
        assert.isTrue(types.isStorageArray([x,y]));
    });

    it('test MineSpotMaterial', () => {
        const x: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        const y: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        assert.isNotNull(x, 'randomMineSpotMaterial 1 returns null');
        assert.isNotNull(y, 'randomMineSpotMaterial 2 returns null');
        assert.isTrue(types.isMineSpotMaterial(x));
        assert.isTrue(types.isMineSpotMaterial(y));
        assert.isFalse(types.isMineSpotMaterial([y]));
        assert.isFalse(types.isMineSpotMaterial([x,y]));
        assert.isFalse(types.isMineSpotMaterial("test"));
        assert.isFalse(types.isMineSpotMaterialArray(x));
        assert.isFalse(types.isMineSpotMaterialArray(y));
        assert.isTrue(types.isMineSpotMaterialArray([x]));
        assert.isTrue(types.isMineSpotMaterialArray([y]));
        assert.isTrue(types.isMineSpotMaterialArray([x,y]));
    });

    it('test MineSpot', () => {
        const x: types.MineSpot = dummy.randomMineSpot();
        const y: types.MineSpot = dummy.randomMineSpot();
        assert.isNotNull(x, 'randomMineSpot 1 returns null');
        assert.isNotNull(y, 'randomMineSpot 2 returns null');
        assert.isTrue(types.isMineSpot(x));
        assert.isTrue(types.isMineSpot(y));
        assert.isFalse(types.isMineSpot([y]));
        assert.isFalse(types.isMineSpot([x,y]));
        assert.isFalse(types.isMineSpot("test"));
        assert.isFalse(types.isMineSpotArray(x));
        assert.isFalse(types.isMineSpotArray(y));
        assert.isTrue(types.isMineSpotArray([x]));
        assert.isTrue(types.isMineSpotArray([y]));
        assert.isTrue(types.isMineSpotArray([x,y]));
    });

});

describe('Dummy data for enums create different values', () => {
    it('random enum test MineSpotMaterial', () => {
        const x: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        assert.isNotNull(x, 'randomMineSpotMaterial returns null');
        // test that the enum is generated with different values
        const x2: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        assert.isNotNull(x2, 'randomMineSpotMaterial returns null');
        const x3: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        assert.isNotNull(x3, 'randomMineSpotMaterial returns null');
        const x4: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        assert.isNotNull(x4, 'randomMineSpotMaterial returns null');
        const x5: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        assert.isNotNull(x5, 'randomMineSpotMaterial returns null');
        const valuesAreEqual = (x === x2) && (x2 === x3) && (x3 === x4) && (x4 === x5);
        assert.isNotTrue(valuesAreEqual, 'randomMineSpotMaterial creates constant values')
    });
});

describe('Dummy data creation with randomized optional attributes', () => {
    it('test type (2) Mine', () => {
        const x: types.Mine = dummy.randomMine(true);
        assert.isNotNull(x, 'randomMine (2) returns null');
    });
    it('test type (2) MineSpotRow', () => {
        const x: types.MineSpotRow = dummy.randomMineSpotRow(true);
        assert.isNotNull(x, 'randomMineSpotRow (2) returns null');
    });
    it('test type (2) Dwarf', () => {
        const x: types.Dwarf = dummy.randomDwarf(true);
        assert.isNotNull(x, 'randomDwarf (2) returns null');
    });
    it('test type (2) Storage', () => {
        const x: types.Storage = dummy.randomStorage(true);
        assert.isNotNull(x, 'randomStorage (2) returns null');
    });
    it('test type (2) MineSpot', () => {
        const x: types.MineSpot = dummy.randomMineSpot(true);
        assert.isNotNull(x, 'randomMineSpot (2) returns null');
    });
});
