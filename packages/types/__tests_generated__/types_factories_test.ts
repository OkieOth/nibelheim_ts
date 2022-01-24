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
        assert.isTrue(factory.isMine(null));
    });

    it('test isMineArray', () => {
        assert.isFalse(factory.isMineArray("x"));
        assert.isFalse(factory.isMineArray(["x"]));
        assert.isTrue(factory.isMineArray(null));
        assert.isTrue(factory.isMineArray([]));
    });

    it('test isMineSpotRow', () => {
        assert.isFalse(factory.isMineSpotRow("x"));
        assert.isTrue(factory.isMineSpotRow(null));
    });

    it('test isMineSpotRowArray', () => {
        assert.isFalse(factory.isMineSpotRowArray("x"));
        assert.isFalse(factory.isMineSpotRowArray(["x"]));
        assert.isTrue(factory.isMineSpotRowArray(null));
        assert.isTrue(factory.isMineSpotRowArray([]));
    });

    it('test isDwarf', () => {
        assert.isFalse(factory.isDwarf("x"));
        assert.isTrue(factory.isDwarf(null));
    });

    it('test isDwarfArray', () => {
        assert.isFalse(factory.isDwarfArray("x"));
        assert.isFalse(factory.isDwarfArray(["x"]));
        assert.isTrue(factory.isDwarfArray(null));
        assert.isTrue(factory.isDwarfArray([]));
    });

    it('test isStorage', () => {
        assert.isFalse(factory.isStorage("x"));
        assert.isTrue(factory.isStorage(null));
    });

    it('test isStorageArray', () => {
        assert.isFalse(factory.isStorageArray("x"));
        assert.isFalse(factory.isStorageArray(["x"]));
        assert.isTrue(factory.isStorageArray(null));
        assert.isTrue(factory.isStorageArray([]));
    });

    it('test isMineSpotMaterial', () => {
        assert.isFalse(factory.isMineSpotMaterial("x"));
        assert.isTrue(factory.isMineSpotMaterial(null));
    });

    it('test isMineSpotMaterialArray', () => {
        assert.isFalse(factory.isMineSpotMaterialArray("x"));
        assert.isFalse(factory.isMineSpotMaterialArray(["x"]));
        assert.isTrue(factory.isMineSpotMaterialArray(null));
        assert.isTrue(factory.isMineSpotMaterialArray([]));
    });

    it('test isMineSpot', () => {
        assert.isFalse(factory.isMineSpot("x"));
        assert.isTrue(factory.isMineSpot(null));
    });

    it('test isMineSpotArray', () => {
        assert.isFalse(factory.isMineSpotArray("x"));
        assert.isFalse(factory.isMineSpotArray(["x"]));
        assert.isTrue(factory.isMineSpotArray(null));
        assert.isTrue(factory.isMineSpotArray([]));
    });

});

