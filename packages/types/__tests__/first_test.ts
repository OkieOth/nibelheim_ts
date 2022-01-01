import { expect } from 'chai';
import { mock } from 'ts-mockito';
import * as nibelheim_types from '../src_generated/nibelheim_types';

describe('Dummy test suite', () => {
    it('first test', () => {
        let testMine: nibelheim_types.Mine = mock(nibelheim_types.MineClass);
        console.log(testMine);
        console.log("I am a dummy test");
    });
});