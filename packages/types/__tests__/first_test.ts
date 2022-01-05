import { expect } from 'chai';
import { mock, instance } from 'ts-mockito';
import * as nibelheim_types from '../src_generated/types';
import * as faker from 'faker';

describe('Dummy test suite', () => {
    it('first test', () => {
        const randomString1 = faker.datatype.string();
        const randomString2 = faker.datatype.string();
        const uuid = faker.datatype.uuid();
        console.log("I am a dummy test");
    });
});