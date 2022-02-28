/**
    This file is generated.
    Template: dao.mako v0.1.0)

    The file provides functions to insert types objects into mongodb. All types that are
    tagged with 'mongodb' are included.
*/
import * as types from 'types';
import * as mongoDb from "mongodb";
import * as dao_uuid from "./dao_uuid"
import {logger} from "logger";
import * as mongoConnection from "../src/mongo_connection"

export async function insertMine(x: types.Mine, dbName: string, collectionName?: string): Promise<mongoDb.ObjectId> {
    return new Promise(async (resolve, reject) => {
        try {
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collectionNameToUse = ! collectionName ? "Mine" : collectionName;
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            logger.info(() => `insert into db: ${dbName}, collection: ${collectionNameToUse}`, "insertMine");
            logger.debug(() => JSON.stringify(x), "insertMine");

            // TODO check if type or child contains UuuiType
            var objToInsert = {...x};
            dao_uuid.mine2Dao(objToInsert);
            const result = await collection.insertOne(objToInsert);
            resolve(result.insertedId);
        }
        catch(e) {
            logger.error(e, "insertMine");
            reject(e);
        }
    });
}

export async function insertMineSpotRow(x: types.MineSpotRow, dbName: string, collectionName?: string): Promise<mongoDb.ObjectId> {
    return new Promise(async (resolve, reject) => {
        try {
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collectionNameToUse = ! collectionName ? "MineSpotRow" : collectionName;
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            logger.info(() => `insert into db: ${dbName}, collection: ${collectionNameToUse}`, "insertMineSpotRow");
            logger.debug(() => JSON.stringify(x), "insertMineSpotRow");

            // TODO check if type or child contains UuuiType
            var objToInsert = {...x};
            dao_uuid.mineSpotRow2Dao(objToInsert);
            const result = await collection.insertOne(objToInsert);
            resolve(result.insertedId);
        }
        catch(e) {
            logger.error(e, "insertMineSpotRow");
            reject(e);
        }
    });
}

export async function insertDwarf(x: types.Dwarf, dbName: string, collectionName?: string): Promise<mongoDb.ObjectId> {
    return new Promise(async (resolve, reject) => {
        try {
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collectionNameToUse = ! collectionName ? "Dwarf" : collectionName;
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            logger.info(() => `insert into db: ${dbName}, collection: ${collectionNameToUse}`, "insertDwarf");
            logger.debug(() => JSON.stringify(x), "insertDwarf");

            // TODO check if type or child contains UuuiType
            var objToInsert = {...x};
            dao_uuid.dwarf2Dao(objToInsert);
            const result = await collection.insertOne(objToInsert);
            resolve(result.insertedId);
        }
        catch(e) {
            logger.error(e, "insertDwarf");
            reject(e);
        }
    });
}

