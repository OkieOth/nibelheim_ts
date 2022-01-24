/**
    This file is generated.
    Template: type_factories_tests.mako v0.1.0)
*/
import * as types from '../src_generated/types';
import * as factory from '../src_generated/types_factories';
import { assert } from 'chai';

describe('Test of type factories and their helper funcs', () => {
    it('test isMine', () => {
        assert.isFalse(factory.isMine("x"));
    });

    it('test isMineArray', () => {
        assert.isFalse(factory.isMineArray("x"));
        assert.isFalse(factory.isMineArray(["x"]));
    });

    it('test isMineSpotRow', () => {
        assert.isFalse(factory.isMineSpotRow("x"));
    });

    it('test isMineSpotRowArray', () => {
        assert.isFalse(factory.isMineSpotRowArray("x"));
        assert.isFalse(factory.isMineSpotRowArray(["x"]));
    });

    it('test isDwarf', () => {
        assert.isFalse(factory.isDwarf("x"));
    });

    it('test isDwarfArray', () => {
        assert.isFalse(factory.isDwarfArray("x"));
        assert.isFalse(factory.isDwarfArray(["x"]));
    });

    it('test isStorage', () => {
        assert.isFalse(factory.isStorage("x"));
    });

    it('test isStorageArray', () => {
        assert.isFalse(factory.isStorageArray("x"));
        assert.isFalse(factory.isStorageArray(["x"]));
    });

    it('test isMineSpotMaterial', () => {
        assert.isFalse(factory.isMineSpotMaterial("x"));
    });

    it('test isMineSpotMaterialArray', () => {
        assert.isFalse(factory.isMineSpotMaterialArray("x"));
        assert.isFalse(factory.isMineSpotMaterialArray(["x"]));
    });

    it('test isMineSpot', () => {
        assert.isFalse(factory.isMineSpot("x"));
    });

    it('test isMineSpotArray', () => {
        assert.isFalse(factory.isMineSpotArray("x"));
        assert.isFalse(factory.isMineSpotArray(["x"]));
    });

});

