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

    it('test guards.isFieldFilterStrFilter', () => {
        assert.isFalse(guards.isFieldFilterStrFilter("x"));
        assert.isTrue(guards.isFieldFilterStrFilter(null));
    });

    it('test guards.isFieldFilterStrFilterArray', () => {
        assert.isFalse(guards.isFieldFilterStrFilterArray("x"));
        assert.isFalse(guards.isFieldFilterStrFilterArray(["x"]));
        assert.isTrue(guards.isFieldFilterStrFilterArray(null));
        assert.isTrue(guards.isFieldFilterStrFilterArray([]));
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

    it('test guards.isFieldFilterNumFilter', () => {
        assert.isFalse(guards.isFieldFilterNumFilter("x"));
        assert.isTrue(guards.isFieldFilterNumFilter(null));
    });

    it('test guards.isFieldFilterNumFilterArray', () => {
        assert.isFalse(guards.isFieldFilterNumFilterArray("x"));
        assert.isFalse(guards.isFieldFilterNumFilterArray(["x"]));
        assert.isTrue(guards.isFieldFilterNumFilterArray(null));
        assert.isTrue(guards.isFieldFilterNumFilterArray([]));
    });

    it('test guards.isFieldFilterDateFilter', () => {
        assert.isFalse(guards.isFieldFilterDateFilter("x"));
        assert.isTrue(guards.isFieldFilterDateFilter(null));
    });

    it('test guards.isFieldFilterDateFilterArray', () => {
        assert.isFalse(guards.isFieldFilterDateFilterArray("x"));
        assert.isFalse(guards.isFieldFilterDateFilterArray(["x"]));
        assert.isTrue(guards.isFieldFilterDateFilterArray(null));
        assert.isTrue(guards.isFieldFilterDateFilterArray([]));
    });

    it('test guards.isFieldFilterBooleanFilter', () => {
        assert.isFalse(guards.isFieldFilterBooleanFilter("x"));
        assert.isTrue(guards.isFieldFilterBooleanFilter(null));
    });

    it('test guards.isFieldFilterBooleanFilterArray', () => {
        assert.isFalse(guards.isFieldFilterBooleanFilterArray("x"));
        assert.isFalse(guards.isFieldFilterBooleanFilterArray(["x"]));
        assert.isTrue(guards.isFieldFilterBooleanFilterArray(null));
        assert.isTrue(guards.isFieldFilterBooleanFilterArray([]));
    });

});

