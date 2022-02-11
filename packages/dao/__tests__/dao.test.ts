import { assert } from 'chai';
import * as dotenv from "dotenv";
import * as mongo from "../src/mongo_connection"
import * as mongoDB from "mongodb";
import { stringify } from 'querystring';


dotenv.config({ path: "packages/dao/__tests__/singleMongo/.env" })


describe('basic connection tests', () => {
    it('get default client', () => {
        console.log(`TEST: ${process.env.MONGODB_USER}, ${process.cwd()}`)
        mongo.getDefaultMongoClient()
            .then(mongoClient => {
                assert.isNotNull(mongoClient);
                const db: mongoDB.Db = mongoClient.db("test");
                assert.isNotNull(db);
                db.collections()
                    .then(c => {
                        console.log("jippiii: " + String(c));
                    })
                    .catch(e => {
                        assert.fail("error while connect to db")
                    });
            })
            .catch(e => {
                assert.fail(e)
            })
    });
});
