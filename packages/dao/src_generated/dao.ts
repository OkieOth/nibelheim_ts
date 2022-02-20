/**
    This file is generated.
    Template: dao.mako v0.1.0)

    The file provides functions to access mongo db. For all types that are
    tagged with 'mongodb' the needed function for query, insert, update and
    delete are exported.
*/
import * as types from 'types';
import * as mongoDb from "mongodb";
import * as dao_uuid from "./dao_uuid"
import {logger} from "logger";
import * as mongoConnection from "../src/mongo_connection"

export async function insertMine(mine: types.Mine, dbName: string): Promise<mongoDb.ObjectId> {
    try {
        const db: mongoDb.Db = await mongoConnection.getDb(dbName);
        const collection: mongoDb.Collection = db.collection("Mine");
        dao_uuid.mine2Dao(mine);
        const result = await collection.insertOne(mine);
        return new Promise((resolve, reject) => {
            // TODO logging
            resolve(result.insertedId);
        });
    }
    catch(e) {
        logger.error(e);
        return new Promise((resolve, reject) => {
            reject(e);
        });
    }
}

export async function findMine(dbName: string): Promise<types.Mine[]> {
    try {
        const db: mongoDb.Db = await mongoConnection.getDb(dbName);
        const collection: mongoDb.Collection = db.collection("Mine");
        const cursor = collection.find({});
        const elemCount = await cursor.count();
        logger.info(() => `found ${elemCount} elements`, "findMine");
        const array: types.Mine[] = [];
        await cursor.forEach(doc => {
            dao_uuid.dao2Mine(doc);
            if (types.isMine(doc)) {
                array.push(doc);
            }
        });
        cursor.close();
        return new Promise((resolve) => {
            resolve(array);
        });
    }
    catch(e) {
        logger.error(e);
        return new Promise((resolve, reject) => {
            reject(e);
        });
    }
}







