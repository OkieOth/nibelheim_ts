import { assert } from 'chai';
import * as nibelheim_types from '../src_generated/types';
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" })

describe('Dummy test suite', () => {
    it('dotenv', () => {
        assert.deepEqual("i am a dummy", process.env.DUMMY);
    });
});