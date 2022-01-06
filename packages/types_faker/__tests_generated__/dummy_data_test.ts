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
    });

    it('test MineSpot', () => {
        const x = dummy.fakeMineSpot();
        assert.isNotNull(x, 'fakeMineSpot returns null');
    });

});
