/**
    This file is generated.
    Template: dao_delete.mako v0.1.0)

    The file provides functions to delete types objects from mongodb. All types that are
    tagged with 'mongodb' are included.
*/
import * as mongoDb from "mongodb";
import * as uuid from "uuid-mongodb";
import {logger} from "logger";
import * as types from "types";
import * as mongoConnection from "../src/mongo_connection"

export async function updateMineByObjectId(objId: string, newValues: Partial<types.Mine>, dbName: string, collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Mine" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = new mongoDb.ObjectId(objId);
            const result = await collection.deleteOne({_id: filter});
            if (result.deletedCount === 0) {
                logger.info(() => `found no element to delete in db: ${dbName}, collection: ${collectionNameToUse}, _id=${objId}`, "deleteMineByObjectId");
            }
            else {
                logger.info(() => `deleted  ${result.deletedCount} elements in db: ${dbName}, collection: ${collectionNameToUse}, _id=${objId}`, "deleteMineByObjectId");
            }
            resolve(result.deletedCount);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}


export async function updateMineByKey(key: string | any ,newValues: Partial<types.Mine>, dbName: string, collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Mine" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = uuid.from(key);
            const result = await collection.deleteOne({id: filter});
            if (result.deletedCount === 0) {
                logger.info(() => `found no element to delete in db: ${dbName}, collection: ${collectionNameToUse}, id=${key}`, "deleteMineByKey");
            }
            else {
                logger.info(() => `deleted  ${result.deletedCount} elements in db: ${dbName}, collection: ${collectionNameToUse}, id=${key}`, "deleteMineByKey");
            }
            resolve(result.deletedCount);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

export async function updateMineSpotRowByObjectId(objId: string, newValues: Partial<types.MineSpotRow>, dbName: string, collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "MineSpotRow" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = new mongoDb.ObjectId(objId);
            const result = await collection.deleteOne({_id: filter});
            if (result.deletedCount === 0) {
                logger.info(() => `found no element to delete in db: ${dbName}, collection: ${collectionNameToUse}, _id=${objId}`, "deleteMineSpotRowByObjectId");
            }
            else {
                logger.info(() => `deleted  ${result.deletedCount} elements in db: ${dbName}, collection: ${collectionNameToUse}, _id=${objId}`, "deleteMineSpotRowByObjectId");
            }
            resolve(result.deletedCount);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

export async function updateDwarfByObjectId(objId: string, newValues: Partial<types.Dwarf>, dbName: string, collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Dwarf" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = new mongoDb.ObjectId(objId);
            const result = await collection.deleteOne({_id: filter});
            if (result.deletedCount === 0) {
                logger.info(() => `found no element to delete in db: ${dbName}, collection: ${collectionNameToUse}, _id=${objId}`, "deleteDwarfByObjectId");
            }
            else {
                logger.info(() => `deleted  ${result.deletedCount} elements in db: ${dbName}, collection: ${collectionNameToUse}, _id=${objId}`, "deleteDwarfByObjectId");
            }
            resolve(result.deletedCount);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}


export async function updateDwarfByKey(key: string | any ,newValues: Partial<types.Dwarf>, dbName: string, collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "Dwarf" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = uuid.from(key);
            const result = await collection.deleteOne({id: filter});
            if (result.deletedCount === 0) {
                logger.info(() => `found no element to delete in db: ${dbName}, collection: ${collectionNameToUse}, id=${key}`, "deleteDwarfByKey");
            }
            else {
                logger.info(() => `deleted  ${result.deletedCount} elements in db: ${dbName}, collection: ${collectionNameToUse}, id=${key}`, "deleteDwarfByKey");
            }
            resolve(result.deletedCount);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

