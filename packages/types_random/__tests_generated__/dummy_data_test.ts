/**
    This file is generated.
    Template: random_instances_tests.mako v0.1.0)
*/
import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';


describe('Dummy data creation test suite', () => {
    it('test Mine', () => {
        const x = dummy.randomMine();
        assert.isNotNull(x, 'randomMine returns null');
    });

    it('test MineSpotRow', () => {
        const x = dummy.randomMineSpotRow();
        assert.isNotNull(x, 'randomMineSpotRow returns null');
    });

    it('test Dwarf', () => {
        const x = dummy.randomDwarf();
        assert.isNotNull(x, 'randomDwarf returns null');
    });

    it('test Storage', () => {
        const x = dummy.randomStorage();
        assert.isNotNull(x, 'randomStorage returns null');
    });

    it('test MineSpotMaterial', () => {
        const x = dummy.randomMineSpotMaterial();
        assert.isNotNull(x, 'randomMineSpotMaterial returns null');
        // test that the enum is generated with different values
        const x2 = dummy.randomMineSpotMaterial();
        assert.isNotNull(x2, 'randomMineSpotMaterial returns null');
        const x3 = dummy.randomMineSpotMaterial();
        assert.isNotNull(x3, 'randomMineSpotMaterial returns null');
        const x4 = dummy.randomMineSpotMaterial();
        assert.isNotNull(x4, 'randomMineSpotMaterial returns null');
        const x5 = dummy.randomMineSpotMaterial();
        assert.isNotNull(x5, 'randomMineSpotMaterial returns null');
        const valuesAreEqual = (x === x2) && (x2 === x3) && (x3 === x4) && (x4 === x5);
        assert.isNotTrue(valuesAreEqual, 'randomMineSpotMaterial creates constant values')
    });

    it('test MineSpot', () => {
        const x = dummy.randomMineSpot();
        assert.isNotNull(x, 'randomMineSpot returns null');
    });

});
