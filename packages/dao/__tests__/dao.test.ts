import { assert } from 'chai';
import * as dotenv from "dotenv";
import * as mongo from "../src/mongo_connection"
import * as mongoDB from "mongodb";
import {logger} from "logger";


dotenv.config({ path: "packages/dao/__tests__/singleMongo/.env" })


describe('basic connection tests', () => {
    it('get default client', (done) => {
        assert.equal(process.env.MONGODB_USER, "root");
        //console.log(`TEST: ${process.env.MONGODB_USER}, ${process.cwd()}`)
        mongo.getDefaultMongoClient()
            .then(mongoClient => {
                logger.info("got db connection");
                assert.isNotNull(mongoClient);
                const db: mongoDB.Db = mongoClient.db("test");
                assert.isNotNull(db);
                db.collections()
                    .then(c => {
                        logger.info("got collections");
                        done();
                    })
                    .catch(e => {
                        logger.error(`can't read collections: ${e}`);
                        assert.fail("can't read collections")
                        done();
                    });
            })
            .catch(e => {
                logger.error(`can't connect to db: ${e}`);
                assert.fail(e)
                done();
            });
    });
    it('get custom client', (done) => {
        mongo.getMongoClient("mongodb://root:strengGeheim@127.0.0.1:27017")
            .then(mongoClient => {
                logger.info("got db connection");
                assert.isNotNull(mongoClient);
                const db: mongoDB.Db = mongoClient.db("test");
                assert.isNotNull(db);
                db.collections()
                    .then(c => {
                        logger.info("got collections");
                        done();
                    })
                    .catch(e => {
                        logger.error(`can't read collections: ${e}`);
                        assert.fail("can't read collections")
                        done();
                    });
            })
            .catch(e => {
                logger.error(`can't connect to db: ${e}`);
                assert.fail(e)
                done();
            });
    });
    it('connection failure', (done) => {
        mongo.getMongoClient("mongodb://ruth:strengGeheim@127.0.0.1:27017")
            .then(mongoClient => {
                logger.error("should not get connection");
                assert.fail("got connection with wrong credentials");
                done();
            })
            .catch(e => {
                logger.info(`got connection error :D ${e}`);
                done();
            });
    });

});
