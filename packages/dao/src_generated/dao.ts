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

export async function insertMine(x: types.Mine, dbName: string): Promise<mongoDb.ObjectId> {
    return new Promise(async (resolve, reject) => {
        try {
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collectionName = "Mine";
            const collection: mongoDb.Collection = db.collection(collectionName);

            logger.info(() => `insert into db: ${dbName}, collection: ${collectionName}`, "insertMine");
            logger.debug(() => JSON.stringify(x), "insertMine");

            // TODO check if type or child contains UuuiType
            dao_uuid.mine2Dao(x);
            const result = await collection.insertOne(x);
            resolve(result.insertedId);
        }
        catch(e) {
            logger.error(e, "insertMine");
            reject(e);
        }
    });
}

export async function findMine(dbName: string): Promise<types.Mine[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionName = "Mine";
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionName);
            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found ${elemCount} elements in db: ${dbName}, collection: ${collectionName}`, "findMine");
            const array: types.Mine[] = [];
            await cursor.forEach(doc => {
                // TODO check if type or child contains UuuiType
                dao_uuid.dao2Mine(doc);
                if (types.isMine(doc)) {
                    array.push(doc);
                }
            });
            cursor.close();
            resolve(array);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

export async function insertMineSpotRow(x: types.MineSpotRow, dbName: string): Promise<mongoDb.ObjectId> {
    return new Promise(async (resolve, reject) => {
        try {
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collectionName = "MineSpotRow";
            const collection: mongoDb.Collection = db.collection(collectionName);

            logger.info(() => `insert into db: ${dbName}, collection: ${collectionName}`, "insertMineSpotRow");
            logger.debug(() => JSON.stringify(x), "insertMineSpotRow");

            // TODO check if type or child contains UuuiType
            dao_uuid.mineSpotRow2Dao(x);
            const result = await collection.insertOne(x);
            resolve(result.insertedId);
        }
        catch(e) {
            logger.error(e, "insertMineSpotRow");
            reject(e);
        }
    });
}

export async function findMineSpotRow(dbName: string): Promise<types.MineSpotRow[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionName = "MineSpotRow";
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionName);
            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found ${elemCount} elements in db: ${dbName}, collection: ${collectionName}`, "findMineSpotRow");
            const array: types.MineSpotRow[] = [];
            await cursor.forEach(doc => {
                // TODO check if type or child contains UuuiType
                dao_uuid.dao2MineSpotRow(doc);
                if (types.isMineSpotRow(doc)) {
                    array.push(doc);
                }
            });
            cursor.close();
            resolve(array);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

export async function insertDwarf(x: types.Dwarf, dbName: string): Promise<mongoDb.ObjectId> {
    return new Promise(async (resolve, reject) => {
        try {
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collectionName = "Dwarf";
            const collection: mongoDb.Collection = db.collection(collectionName);

            logger.info(() => `insert into db: ${dbName}, collection: ${collectionName}`, "insertDwarf");
            logger.debug(() => JSON.stringify(x), "insertDwarf");

            // TODO check if type or child contains UuuiType
            dao_uuid.dwarf2Dao(x);
            const result = await collection.insertOne(x);
            resolve(result.insertedId);
        }
        catch(e) {
            logger.error(e, "insertDwarf");
            reject(e);
        }
    });
}

export async function findDwarf(dbName: string): Promise<types.Dwarf[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionName = "Dwarf";
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionName);
            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found ${elemCount} elements in db: ${dbName}, collection: ${collectionName}`, "findDwarf");
            const array: types.Dwarf[] = [];
            await cursor.forEach(doc => {
                // TODO check if type or child contains UuuiType
                dao_uuid.dao2Dwarf(doc);
                if (types.isDwarf(doc)) {
                    array.push(doc);
                }
            });
            cursor.close();
            resolve(array);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

