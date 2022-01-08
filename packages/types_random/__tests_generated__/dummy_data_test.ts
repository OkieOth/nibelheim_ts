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
        assert.isNotNull(x, 'randomMine returns null');
    });

    it('test MineSpotRow', () => {
        const x: types.MineSpotRow = dummy.randomMineSpotRow();
        assert.isNotNull(x, 'randomMineSpotRow returns null');
    });

    it('test Dwarf', () => {
        const x: types.Dwarf = dummy.randomDwarf();
        assert.isNotNull(x, 'randomDwarf returns null');
    });

    it('test Storage', () => {
        const x: types.Storage = dummy.randomStorage();
        assert.isNotNull(x, 'randomStorage returns null');
    });

    it('test MineSpotMaterial', () => {
        const x: types.MineSpotMaterial = dummy.randomMineSpotMaterial();
        assert.isNotNull(x, 'randomMineSpotMaterial returns null');
    });

    it('test MineSpot', () => {
        const x: types.MineSpot = dummy.randomMineSpot();
        assert.isNotNull(x, 'randomMineSpot returns null');
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
