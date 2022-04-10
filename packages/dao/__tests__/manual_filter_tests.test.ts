import { assert, expect } from 'chai';
import * as dotenv from "dotenv";
import {logger} from "logger";
import  * as fs from "fs";
import * as dummy from "types_random";
import * as filter from "filter";
import * as mongoConnection from "../src/mongo_connection";
import * as mongoHelper from "../src/mongo_helper";
import * as dao_insert from "../src_generated/dao_insert";
import {NO_FILTER, NO_LIMIT, NO_SORT} from "../src/mongo_helper";
import * as types from "types";
import * as findTypes from "../src_generated/dao_find_types";
import { DaoFieldFilter } from '../src/filter_types_ext';

const envPath1 = "packages/dao/__tests__/singleMongo";
if (fs.existsSync(envPath1)) {
    dotenv.config({ path: `${envPath1}/.env` });
} else {
    dotenv.config({ path: "__tests__/singleMongo/.env" });
}

const errorPromise = (msg) => {
    return new Promise((resovle, reject) => {
        reject(msg);
    });
}

//const testDb = `nibelheim_test_${new Date().getTime()}`;
//const testDb = `nibelheim_test_manual_filter`;

function* indexGenerator(maxItems) {
    let index = 0;
    while (index < maxItems) {
      yield index;
      index++;
    }
}

const randomInserts = 10;


describe('some filter tests', async () => {
/*

function createBetweenIncludeFilter(field: string, filterValues: FilterValues): object {
    // { "storage.gold": {"$gte": 0, "$lte": 10000}}
    return twoValueFilter(field, filterValues, "$gte", "$lte");
}

function createBetweenExcludeFilter(field: string, filterValues: FilterValues): object {
    // { "storage.gold": {"$gt": 0, "$lt": 10000}}
    return twoValueFilter(field, filterValues, "$gt", "$lt");
}

function createInFilter(field: string, filterValues: FilterValues): object {
    return listValueFilter(field, filterValues, "$in");
}

function createNotInFilter(field: string, filterValues: FilterValues): object {
    return listValueFilter(field, filterValues, "$nin");
}

function createMatchFilter(field: string, filterValues: FilterValues): object {
    return singleValueFilter(field, filterValues,"$regex");
}
*/

    it('test createEqualFilter', () => {
        const strValues: string[] = ['eins', 'zwei', 'drei'];
        const numValues: number[] = [150, -100.3];
        const d1 = new Date(2000, 10 , 3 , 2 , 36);
        const d2 = new Date(2004, 8 , 15 , 11 , 12);
        const dateValues: Date[] = [d1, d2];
        const booleanValues: boolean[] = [true]
        const strFilter = mongoHelper.createEqualFilter("test.field", strValues)
        const expectedStrFilter = { "test.field": {"$eq": strValues[0]}}
        const expectedStrFilter2 = { "test.field": {"$eql": strValues[0]}}
        expect(strFilter).to.deep.eql(expectedStrFilter);
        expect(strFilter).to.not.deep.eql(expectedStrFilter2);

        const expectedNumFilter = { "test.field": {"$eq": numValues[0]}}
        const numFilter = mongoHelper.createEqualFilter("test.field", numValues)
        expect(numFilter).to.deep.eql(expectedNumFilter);

        const expectedDateFilter = { "test.field": {"$eq": d1}}
        const expectedDateFilter2 = { "test.field": {"$eq": d2}}
        const dateFilter = mongoHelper.createEqualFilter("test.field", dateValues)
        expect(dateFilter).to.deep.eql(expectedDateFilter);
        expect(dateFilter).to.not.deep.eql(expectedDateFilter2);

        const expectedBoolFilter = { "test.field": {"$eq": booleanValues[0]}}
        const boolFilter = mongoHelper.createEqualFilter("test.field", booleanValues)
        expect(boolFilter).to.deep.eql(expectedBoolFilter);
    });

    it('test createNotEqualFilter', () => {
        const strValues: string[] = ['eins', 'zwei', 'drei'];
        const numValues: number[] = [150, -100.3];
        const d1 = new Date(2000, 10 , 3 , 2 , 36);
        const d2 = new Date(2004, 8 , 15 , 11 , 12);
        const dateValues: Date[] = [d1, d2];
        const booleanValues: boolean[] = [true]
        const strFilter = mongoHelper.createNotEqualFilter("test.field", strValues)
        const expectedStrFilter = { "test.field": {"$ne": strValues[0]}}
        const expectedStrFilter2 = { "test.fieldx": {"$ne": strValues[0]}}
        expect(strFilter).to.deep.eql(expectedStrFilter);
        expect(strFilter).to.not.deep.eql(expectedStrFilter2);

        const expectedNumFilter = { "test.field": {"$ne": numValues[0]}}
        const numFilter = mongoHelper.createNotEqualFilter("test.field", numValues)
        expect(numFilter).to.deep.eql(expectedNumFilter);

        const expectedDateFilter = { "test.field": {"$ne": d1}}
        const expectedDateFilter2 = { "test.field": {"$ne": d2}}
        const dateFilter = mongoHelper.createNotEqualFilter("test.field", dateValues)
        expect(dateFilter).to.deep.eql(expectedDateFilter);
        expect(dateFilter).to.not.deep.eql(expectedDateFilter2);

        const expectedBoolFilter = { "test.field": {"$ne": booleanValues[0]}}
        const boolFilter = mongoHelper.createNotEqualFilter("test.field", booleanValues)
        expect(boolFilter).to.deep.eql(expectedBoolFilter);
    });

    it('test createLessFilter', () => {
        const strValues: string[] = ['eins', 'zwei', 'drei'];
        const numValues: number[] = [150, -100.3];
        const d1 = new Date(2000, 10 , 3 , 2 , 36);
        const d2 = new Date(2004, 8 , 15 , 11 , 12);
        const dateValues: Date[] = [d1, d2];
        const booleanValues: boolean[] = [true]
        const strFilter = mongoHelper.createLessFilter("test.field", strValues)
        const expectedStrFilter = { "test.field": {"$lt": strValues[0]}}
        const expectedStrFilter2 = { "test.fieldx": {"$lt": strValues[0]}}
        expect(strFilter).to.deep.eql(expectedStrFilter);
        expect(strFilter).to.not.deep.eql(expectedStrFilter2);

        const expectedNumFilter = { "test.field": {"$lt": numValues[0]}}
        const numFilter = mongoHelper.createLessFilter("test.field", numValues)
        expect(numFilter).to.deep.eql(expectedNumFilter);

        const expectedDateFilter = { "test.field": {"$lt": d1}}
        const expectedDateFilter2 = { "test.field": {"$lt": d2}}
        const dateFilter = mongoHelper.createLessFilter("test.field", dateValues)
        expect(dateFilter).to.deep.eql(expectedDateFilter);
        expect(dateFilter).to.not.deep.eql(expectedDateFilter2);

        const expectedBoolFilter = { "test.field": {"$lt": booleanValues[0]}}
        const boolFilter = mongoHelper.createLessFilter("test.field", booleanValues)
        expect(boolFilter).to.deep.eql(expectedBoolFilter);
    });

    it('test createLessEqualFilter', () => {
        const strValues: string[] = ['eins', 'zwei', 'drei'];
        const numValues: number[] = [150, -100.3];
        const d1 = new Date(2000, 10 , 3 , 2 , 36);
        const d2 = new Date(2004, 8 , 15 , 11 , 12);
        const dateValues: Date[] = [d1, d2];
        const booleanValues: boolean[] = [true]
        const strFilter = mongoHelper.createLessEqualFilter("test.field", strValues)
        const expectedStrFilter = { "test.field": {"$lte": strValues[0]}}
        const expectedStrFilter2 = { "test.fieldx": {"$lte": strValues[0]}}
        expect(strFilter).to.deep.eql(expectedStrFilter);
        expect(strFilter).to.not.deep.eql(expectedStrFilter2);

        const expectedNumFilter = { "test.field": {"$lte": numValues[0]}}
        const numFilter = mongoHelper.createLessEqualFilter("test.field", numValues)
        expect(numFilter).to.deep.eql(expectedNumFilter);

        const expectedDateFilter = { "test.field": {"$lte": d1}}
        const expectedDateFilter2 = { "test.field": {"$lte": d2}}
        const dateFilter = mongoHelper.createLessEqualFilter("test.field", dateValues)
        expect(dateFilter).to.deep.eql(expectedDateFilter);
        expect(dateFilter).to.not.deep.eql(expectedDateFilter2);

        const expectedBoolFilter = { "test.field": {"$lte": booleanValues[0]}}
        const boolFilter = mongoHelper.createLessEqualFilter("test.field", booleanValues)
        expect(boolFilter).to.deep.eql(expectedBoolFilter);
    });
//
    it('test createGreaterFilter', () => {
        const strValues: string[] = ['eins', 'zwei', 'drei'];
        const numValues: number[] = [150, -100.3];
        const d1 = new Date(2000, 10 , 3 , 2 , 36);
        const d2 = new Date(2004, 8 , 15 , 11 , 12);
        const dateValues: Date[] = [d1, d2];
        const booleanValues: boolean[] = [true]
        const strFilter = mongoHelper.createGreaterFilter("test.field", strValues)
        const expectedStrFilter = { "test.field": {"$gt": strValues[0]}}
        const expectedStrFilter2 = { "test.fieldx": {"$gt": strValues[0]}}
        expect(strFilter).to.deep.eql(expectedStrFilter);
        expect(strFilter).to.not.deep.eql(expectedStrFilter2);

        const expectedNumFilter = { "test.field": {"$gt": numValues[0]}}
        const numFilter = mongoHelper.createGreaterFilter("test.field", numValues)
        expect(numFilter).to.deep.eql(expectedNumFilter);

        const expectedDateFilter = { "test.field": {"$gt": d1}}
        const expectedDateFilter2 = { "test.field": {"$gt": d2}}
        const dateFilter = mongoHelper.createGreaterFilter("test.field", dateValues)
        expect(dateFilter).to.deep.eql(expectedDateFilter);
        expect(dateFilter).to.not.deep.eql(expectedDateFilter2);

        const expectedBoolFilter = { "test.field": {"$gt": booleanValues[0]}}
        const boolFilter = mongoHelper.createGreaterFilter("test.field", booleanValues)
        expect(boolFilter).to.deep.eql(expectedBoolFilter);
    });

    it('test createGreaterEqualFilter', () => {
        const strValues: string[] = ['eins', 'zwei', 'drei'];
        const numValues: number[] = [150, -100.3];
        const d1 = new Date(2000, 10 , 3 , 2 , 36);
        const d2 = new Date(2004, 8 , 15 , 11 , 12);
        const dateValues: Date[] = [d1, d2];
        const booleanValues: boolean[] = [true]
        const strFilter = mongoHelper.createGreaterEqualFilter("test.field", strValues)
        const expectedStrFilter = { "test.field": {"$gte": strValues[0]}}
        const expectedStrFilter2 = { "test.fieldx": {"$gte": strValues[0]}}
        expect(strFilter).to.deep.eql(expectedStrFilter);
        expect(strFilter).to.not.deep.eql(expectedStrFilter2);

        const expectedNumFilter = { "test.field": {"$gte": numValues[0]}}
        const numFilter = mongoHelper.createGreaterEqualFilter("test.field", numValues)
        expect(numFilter).to.deep.eql(expectedNumFilter);

        const expectedDateFilter = { "test.field": {"$gte": d1}}
        const expectedDateFilter2 = { "test.field": {"$gte": d2}}
        const dateFilter = mongoHelper.createGreaterEqualFilter("test.field", dateValues)
        expect(dateFilter).to.deep.eql(expectedDateFilter);
        expect(dateFilter).to.not.deep.eql(expectedDateFilter2);

        const expectedBoolFilter = { "test.field": {"$gte": booleanValues[0]}}
        const boolFilter = mongoHelper.createGreaterEqualFilter("test.field", booleanValues)
        expect(boolFilter).to.deep.eql(expectedBoolFilter);
    });

});
