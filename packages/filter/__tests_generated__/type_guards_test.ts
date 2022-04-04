/**
    This file is generated.
    Template: type_factories_tests.mako v0.1.0)
*/
import * as guards from '../src_generated/filter_type_guards';
import { assert } from 'chai';

describe('Test of type factories and their helper funcs', () => {
    it('test guards.isFieldFilter', () => {
        assert.isFalse(guards.isFieldFilter("x"));
        assert.isTrue(guards.isFieldFilter(null));
    });

    it('test guards.isFieldFilterArray', () => {
        assert.isFalse(guards.isFieldFilterArray("x"));
        assert.isFalse(guards.isFieldFilterArray(["x"]));
        assert.isTrue(guards.isFieldFilterArray(null));
        assert.isTrue(guards.isFieldFilterArray([]));
    });

    it('test guards.isStringFilter', () => {
        assert.isFalse(guards.isStringFilter("x"));
        assert.isTrue(guards.isStringFilter(null));
    });

    it('test guards.isStringFilterArray', () => {
        assert.isFalse(guards.isStringFilterArray("x"));
        assert.isFalse(guards.isStringFilterArray(["x"]));
        assert.isTrue(guards.isStringFilterArray(null));
        assert.isTrue(guards.isStringFilterArray([]));
    });

    it('test guards.isEnumFilter', () => {
        assert.isFalse(guards.isEnumFilter("x"));
        assert.isTrue(guards.isEnumFilter(null));
    });

    it('test guards.isEnumFilterArray', () => {
        assert.isFalse(guards.isEnumFilterArray("x"));
        assert.isFalse(guards.isEnumFilterArray(["x"]));
        assert.isTrue(guards.isEnumFilterArray(null));
        assert.isTrue(guards.isEnumFilterArray([]));
    });

    it('test guards.isUuidFilter', () => {
        assert.isFalse(guards.isUuidFilter("x"));
        assert.isTrue(guards.isUuidFilter(null));
    });

    it('test guards.isUuidFilterArray', () => {
        assert.isFalse(guards.isUuidFilterArray("x"));
        assert.isFalse(guards.isUuidFilterArray(["x"]));
        assert.isTrue(guards.isUuidFilterArray(null));
        assert.isTrue(guards.isUuidFilterArray([]));
    });

    it('test guards.isNumericFilter', () => {
        assert.isFalse(guards.isNumericFilter("x"));
        assert.isTrue(guards.isNumericFilter(null));
    });

    it('test guards.isNumericFilterArray', () => {
        assert.isFalse(guards.isNumericFilterArray("x"));
        assert.isFalse(guards.isNumericFilterArray(["x"]));
        assert.isTrue(guards.isNumericFilterArray(null));
        assert.isTrue(guards.isNumericFilterArray([]));
    });

    it('test guards.isDateFilter', () => {
        assert.isFalse(guards.isDateFilter("x"));
        assert.isTrue(guards.isDateFilter(null));
    });

    it('test guards.isDateFilterArray', () => {
        assert.isFalse(guards.isDateFilterArray("x"));
        assert.isFalse(guards.isDateFilterArray(["x"]));
        assert.isTrue(guards.isDateFilterArray(null));
        assert.isTrue(guards.isDateFilterArray([]));
    });

    it('test guards.isBooleanFilter', () => {
        assert.isFalse(guards.isBooleanFilter("x"));
        assert.isTrue(guards.isBooleanFilter(null));
    });

    it('test guards.isBooleanFilterArray', () => {
        assert.isFalse(guards.isBooleanFilterArray("x"));
        assert.isFalse(guards.isBooleanFilterArray(["x"]));
        assert.isTrue(guards.isBooleanFilterArray(null));
        assert.isTrue(guards.isBooleanFilterArray([]));
    });

    it('test guards.isNumericFilterOperator', () => {
        assert.isFalse(guards.isNumericFilterOperator("x"));
        assert.isTrue(guards.isNumericFilterOperator(null));
    });

    it('test guards.isNumericFilterOperatorArray', () => {
        assert.isFalse(guards.isNumericFilterOperatorArray("x"));
        assert.isFalse(guards.isNumericFilterOperatorArray(["x"]));
        assert.isTrue(guards.isNumericFilterOperatorArray(null));
        assert.isTrue(guards.isNumericFilterOperatorArray([]));
    });

    it('test guards.isStringFilterOperator', () => {
        assert.isFalse(guards.isStringFilterOperator("x"));
        assert.isTrue(guards.isStringFilterOperator(null));
    });

    it('test guards.isStringFilterOperatorArray', () => {
        assert.isFalse(guards.isStringFilterOperatorArray("x"));
        assert.isFalse(guards.isStringFilterOperatorArray(["x"]));
        assert.isTrue(guards.isStringFilterOperatorArray(null));
        assert.isTrue(guards.isStringFilterOperatorArray([]));
    });

    it('test guards.isEnumFilterOperator', () => {
        assert.isFalse(guards.isEnumFilterOperator("x"));
        assert.isTrue(guards.isEnumFilterOperator(null));
    });

    it('test guards.isEnumFilterOperatorArray', () => {
        assert.isFalse(guards.isEnumFilterOperatorArray("x"));
        assert.isFalse(guards.isEnumFilterOperatorArray(["x"]));
        assert.isTrue(guards.isEnumFilterOperatorArray(null));
        assert.isTrue(guards.isEnumFilterOperatorArray([]));
    });

    it('test guards.isUuidFilterOperator', () => {
        assert.isFalse(guards.isUuidFilterOperator("x"));
        assert.isTrue(guards.isUuidFilterOperator(null));
    });

    it('test guards.isUuidFilterOperatorArray', () => {
        assert.isFalse(guards.isUuidFilterOperatorArray("x"));
        assert.isFalse(guards.isUuidFilterOperatorArray(["x"]));
        assert.isTrue(guards.isUuidFilterOperatorArray(null));
        assert.isTrue(guards.isUuidFilterOperatorArray([]));
    });

    it('test guards.isBooleanFilterOperator', () => {
        assert.isFalse(guards.isBooleanFilterOperator("x"));
        assert.isTrue(guards.isBooleanFilterOperator(null));
    });

    it('test guards.isBooleanFilterOperatorArray', () => {
        assert.isFalse(guards.isBooleanFilterOperatorArray("x"));
        assert.isFalse(guards.isBooleanFilterOperatorArray(["x"]));
        assert.isTrue(guards.isBooleanFilterOperatorArray(null));
        assert.isTrue(guards.isBooleanFilterOperatorArray([]));
    });

    it('test guards.isSortDirection', () => {
        assert.isFalse(guards.isSortDirection("x"));
        assert.isTrue(guards.isSortDirection(null));
    });

    it('test guards.isSortDirectionArray', () => {
        assert.isFalse(guards.isSortDirectionArray("x"));
        assert.isFalse(guards.isSortDirectionArray(["x"]));
        assert.isTrue(guards.isSortDirectionArray(null));
        assert.isTrue(guards.isSortDirectionArray([]));
    });

    it('test guards.isFieldSort', () => {
        assert.isFalse(guards.isFieldSort("x"));
        assert.isTrue(guards.isFieldSort(null));
    });

    it('test guards.isFieldSortArray', () => {
        assert.isFalse(guards.isFieldSortArray("x"));
        assert.isFalse(guards.isFieldSortArray(["x"]));
        assert.isTrue(guards.isFieldSortArray(null));
        assert.isTrue(guards.isFieldSortArray([]));
    });

});

