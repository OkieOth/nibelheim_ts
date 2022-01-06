/**
    This file is generated.
    Template: faker_instances_tests.mako v0.1.0)
*/
import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';


describe('Dummy data creation test suite', () => {
    it('test Mine', () => {
        const x = dummy.fakeMine();
        assert.isNotNull(x, 'fakeMine returns null');
    });

    it('test MineSpotRow', () => {
        const x = dummy.fakeMineSpotRow();
        assert.isNotNull(x, 'fakeMineSpotRow returns null');
    });

    it('test Dwarf', () => {
        const x = dummy.fakeDwarf();
        assert.isNotNull(x, 'fakeDwarf returns null');
    });

    it('test Storage', () => {
        const x = dummy.fakeStorage();
        assert.isNotNull(x, 'fakeStorage returns null');
    });

    it('test MineSpotMaterial', () => {
        const x = dummy.fakeMineSpotMaterial();
        assert.isNotNull(x, 'fakeMineSpotMaterial returns null');
        // test that the enum is generated with different values
        const x2 = dummy.fakeMineSpotMaterial();
        assert.isNotNull(x2, 'fakeMineSpotMaterial returns null');
        const x3 = dummy.fakeMineSpotMaterial();
        assert.isNotNull(x3, 'fakeMineSpotMaterial returns null');
        const x4 = dummy.fakeMineSpotMaterial();
        assert.isNotNull(x4, 'fakeMineSpotMaterial returns null');
        const x5 = dummy.fakeMineSpotMaterial();
        assert.isNotNull(x5, 'fakeMineSpotMaterial returns null');
        const valuesAreEqual = (x === x2) && (x2 === x3) && (x3 === x4) && (x4 === x5);
        assert.isNotTrue(valuesAreEqual, 'fakeMineSpotMaterial creates constant values')
    });

    it('test MineSpot', () => {
        const x = dummy.fakeMineSpot();
        assert.isNotNull(x, 'fakeMineSpot returns null');
    });

});
