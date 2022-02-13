import { assert, expect } from 'chai';
import * as dotenv from "dotenv";
import * as mongo from "../src/mongo_connection"
import * as mongoDB from "mongodb";
import {logger} from "logger";


dotenv.config({ path: "packages/dao/__tests__/singleMongo/.env" })

const errorPromise = (msg) => {
    return new Promise((resovle, reject) => {
        reject(msg);
    });
}


describe('basic connection tests', async () => {
    it('get default client', async () => {
        if (process.env.MONGODB_USER !== "root") {
            return errorPromise("expected process.env.MONGODB_USER=='root'");
        }
        try {
            const mongoClient = await mongo.getDefaultMongoConnection();
            if (!mongoClient) return errorPromise("mongoClient is null");
            logger.info("got db connection");
            const db: mongoDB.Db = mongoClient.db("test");
            if (!db) return errorPromise("db is null");
            await db.collections();
            return new Promise((resolve) => {
                mongo.closeDefaultConnection();
                resolve();
            });
        }
        catch(e) {
            return errorPromise(`can't connect to db: ${e}`);
        }
        finally {
            return mongo.closeDefaultConnection();
        }
    });

    it('get custom client', async () => {
        const mongoClient = null;
        try {
            const mongoHost = process.env.MONGODB_HOST ? process.env.MONGODB_HOST : "127.0.0.1"
            const mongoClient = await mongo.getMongoConnection(`mongodb://root:strengGeheim@${mongoHost}:27017`);
            if (!mongoClient) return errorPromise("mongoClient is null");
            logger.info("got db connection");
            const db: mongoDB.Db = mongoClient.db("test");
            if (!db) return errorPromise("db is null");
            await db.collections();
            await mongoClient.close();
            return new Promise((resolve) => {
                resolve();
            });
        }
        catch(e) {
            if (mongoClient) {
                await mongoClient.close();
            }
            return errorPromise(`can't connect to db: ${e}`);
        }
    });

    it('connection failure', async () => {
        const mongoHost = process.env.MONGODB_HOST ? process.env.MONGODB_HOST : "127.0.0.1";
        try {
            await mongo.getMongoConnection(`mongodb://ruth:strengGeheim@${mongoHost}:27017`);
            return errorPromise("shouldn't get a connection");
        }
        catch(e) {
            if (`${e}` == "MongoServerError: Authentication failed." ) {
                logger.info(`got connection error :D ${e}`);
                return new Promise((resolve) => {
                    resolve();
                });    
            }
            else {
                return errorPromise(`received error, but not 'Authentication failed': ${e}`);
            }
        }
    });

    it('get default client multiple times', async () => {
        if (process.env.MONGODB_USER !== "root") {
            return errorPromise("expected process.env.MONGODB_USER=='root'");
        }
        try {
            const mongoClient = await mongo.getDefaultMongoConnection();
            if (!mongoClient) return errorPromise("mongoClient is null");
            logger.info("got db connection");
            const db: mongoDB.Db = mongoClient.db("test");
            if (!db) return errorPromise("db is null");
            await db.collections();

            const mongoClient2 = await mongo.getDefaultMongoConnection();
            if (!mongoClient2) return errorPromise("mongoClient is null");
            logger.info("got db connection");
            const db2: mongoDB.Db = mongoClient2.db("test");
            if (!db2) return errorPromise("db is null");
            await db2.collections();

            const mongoClient3 = await mongo.getDefaultMongoConnection();
            if (!mongoClient3) return errorPromise("mongoClient is null");

            const mongoClient4 = await mongo.getDefaultMongoConnection();
            if (!mongoClient4) return errorPromise("mongoClient is null");

            const mongoClient5 = await mongo.getDefaultMongoConnection();
            if (!mongoClient5) return errorPromise("mongoClient is null");

            await mongo.closeDefaultConnection();

            return new Promise((resolve) => {
                resolve();
            });
        }
        catch(e) {
            return errorPromise(`can't connect to db: ${e}`);
        }
        finally {
            return mongo.closeDefaultConnection();
        }
    });

    it('get default client close and reconnect', async () => {
        if (process.env.MONGODB_USER !== "root") {
            return errorPromise("expected process.env.MONGODB_USER=='root'");
        }
        try {
            const mongoClient = await mongo.getDefaultMongoConnection();
            if (!mongoClient) return errorPromise("mongoClient is null");
            logger.info("got db connection");
            const db: mongoDB.Db = mongoClient.db("test");
            if (!db) return errorPromise("db is null");
            await db.collections();
            await mongo.closeDefaultConnection();

            const mongoClient2 = await mongo.getDefaultMongoConnection();
            if (!mongoClient2) return errorPromise("mongoClient is null");
            logger.info("got db connection");
            const db2: mongoDB.Db = mongoClient2.db("test");
            if (!db2) return errorPromise("db is null");
            await db2.collections();

            await mongo.closeDefaultConnection();

            return new Promise((resolve) => {
                resolve();
            });
        }
        catch(e) {
            return errorPromise(`can't connect to db: ${e}`);
        }
        finally {
            return mongo.closeDefaultConnection();
        }
    });
});
