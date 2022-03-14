/**
    This file is generated.
    Template: type_factories_tests.mako v0.1.0)
*/
import * as types from '../src_generated/types';
import * as guards from '../src_generated/type_guards';
import { assert } from 'chai';

describe('Test of type factories and their helper funcs', () => {
    it('test guards.isMine', () => {
        assert.isFalse(guards.isMine("x"));
        assert.isTrue(guards.isMine(null));
    });

    it('test guards.isMineArray', () => {
        assert.isFalse(guards.isMineArray("x"));
        assert.isFalse(guards.isMineArray(["x"]));
        assert.isTrue(guards.isMineArray(null));
        assert.isTrue(guards.isMineArray([]));
    });

    it('test guards.isStorage', () => {
        assert.isFalse(guards.isStorage("x"));
        assert.isTrue(guards.isStorage(null));
    });

    it('test guards.isStorageArray', () => {
        assert.isFalse(guards.isStorageArray("x"));
        assert.isFalse(guards.isStorageArray(["x"]));
        assert.isTrue(guards.isStorageArray(null));
        assert.isTrue(guards.isStorageArray([]));
    });

    it('test guards.isMineSpotMaterial', () => {
        assert.isFalse(guards.isMineSpotMaterial("x"));
        assert.isTrue(guards.isMineSpotMaterial(null));
    });

    it('test guards.isMineSpotMaterialArray', () => {
        assert.isFalse(guards.isMineSpotMaterialArray("x"));
        assert.isFalse(guards.isMineSpotMaterialArray(["x"]));
        assert.isTrue(guards.isMineSpotMaterialArray(null));
        assert.isTrue(guards.isMineSpotMaterialArray([]));
    });

    it('test guards.isMineSpot', () => {
        assert.isFalse(guards.isMineSpot("x"));
        assert.isTrue(guards.isMineSpot(null));
    });

    it('test guards.isMineSpotArray', () => {
        assert.isFalse(guards.isMineSpotArray("x"));
        assert.isFalse(guards.isMineSpotArray(["x"]));
        assert.isTrue(guards.isMineSpotArray(null));
        assert.isTrue(guards.isMineSpotArray([]));
    });

    it('test guards.isMineSpotRow', () => {
        assert.isFalse(guards.isMineSpotRow("x"));
        assert.isTrue(guards.isMineSpotRow(null));
    });

    it('test guards.isMineSpotRowArray', () => {
        assert.isFalse(guards.isMineSpotRowArray("x"));
        assert.isFalse(guards.isMineSpotRowArray(["x"]));
        assert.isTrue(guards.isMineSpotRowArray(null));
        assert.isTrue(guards.isMineSpotRowArray([]));
    });

    it('test guards.isDwarf', () => {
        assert.isFalse(guards.isDwarf("x"));
        assert.isTrue(guards.isDwarf(null));
    });

    it('test guards.isDwarfArray', () => {
        assert.isFalse(guards.isDwarfArray("x"));
        assert.isFalse(guards.isDwarfArray(["x"]));
        assert.isTrue(guards.isDwarfArray(null));
        assert.isTrue(guards.isDwarfArray([]));
    });

    it('test guards.isDwarfWay', () => {
        assert.isFalse(guards.isDwarfWay("x"));
        assert.isTrue(guards.isDwarfWay(null));
    });

    it('test guards.isDwarfWayArray', () => {
        assert.isFalse(guards.isDwarfWayArray("x"));
        assert.isFalse(guards.isDwarfWayArray(["x"]));
        assert.isTrue(guards.isDwarfWayArray(null));
        assert.isTrue(guards.isDwarfWayArray([]));
    });

    it('test guards.isHistory', () => {
        assert.isFalse(guards.isHistory("x"));
        assert.isTrue(guards.isHistory(null));
    });

    it('test guards.isHistoryArray', () => {
        assert.isFalse(guards.isHistoryArray("x"));
        assert.isFalse(guards.isHistoryArray(["x"]));
        assert.isTrue(guards.isHistoryArray(null));
        assert.isTrue(guards.isHistoryArray([]));
    });

    it('test guards.isHistoryChangeEnum', () => {
        assert.isFalse(guards.isHistoryChangeEnum("x"));
        assert.isTrue(guards.isHistoryChangeEnum(null));
    });

    it('test guards.isHistoryChangeEnumArray', () => {
        assert.isFalse(guards.isHistoryChangeEnumArray("x"));
        assert.isFalse(guards.isHistoryChangeEnumArray(["x"]));
        assert.isTrue(guards.isHistoryChangeEnumArray(null));
        assert.isTrue(guards.isHistoryChangeEnumArray([]));
    });

});

