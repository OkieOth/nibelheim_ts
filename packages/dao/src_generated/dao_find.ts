/**
    This file is generated.
    Template: dao.mako v0.1.0)

    The file provides functions to query types objects from mongodb. All types that are
    tagged with 'mongodb' are included.
*/
import * as types from 'types';
import * as mongoDb from "mongodb";
import * as uuid from "uuid-mongodb";
import * as dao_uuid from "./dao_uuid";
import {logger} from "logger";
import * as mongoConnection from "../src/mongo_connection"

export async function findMine(dbName: string, collectionName?: string): Promise<types.Mine[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Mine" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found ${elemCount} elements in db: ${dbName}, collection: ${collectionNameToUse}`, "findMine");
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


export async function findMineByKey(key: string, dbName: string, collectionName?: string): Promise<types.Mine> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Mine" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = uuid.from(key);
            const result = await collection.findOne({id: filter});
            if (types.isMine(result)) {
                logger.info(() => `found element in db: ${dbName}, collection: ${collectionNameToUse}, id=${key}`, "findMineByKey");
                resolve(result);
            }
            else {
                const errorMsg = `found something in db, but it has wrong type: ${dbName}, collection: ${collectionNameToUse}, id=${key}`;
                logger.info(errorMsg, "findMineByKey");
                reject();
            }
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

export async function findMineSpotRow(dbName: string, collectionName?: string): Promise<types.MineSpotRow[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "MineSpotRow" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found ${elemCount} elements in db: ${dbName}, collection: ${collectionNameToUse}`, "findMineSpotRow");
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

export async function findDwarf(dbName: string, collectionName?: string): Promise<types.Dwarf[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Dwarf" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found ${elemCount} elements in db: ${dbName}, collection: ${collectionNameToUse}`, "findDwarf");
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


export async function findDwarfByKey(key: string, dbName: string, collectionName?: string): Promise<types.Dwarf> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Dwarf" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = uuid.from(key);
            const result = await collection.findOne({id: filter});
            if (types.isDwarf(result)) {
                logger.info(() => `found element in db: ${dbName}, collection: ${collectionNameToUse}, id=${key}`, "findDwarfByKey");
                resolve(result);
            }
            else {
                const errorMsg = `found something in db, but it has wrong type: ${dbName}, collection: ${collectionNameToUse}, id=${key}`;
                logger.info(errorMsg, "findDwarfByKey");
                reject();
            }
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

