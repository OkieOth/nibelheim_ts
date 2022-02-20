## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.util.stringUtils as stringUtils
    import yacg.templateHelper as templateHelper

    templateFile = 'dao.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])


%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides functions to access mongo db. For all types that are
    tagged with 'mongodb' the needed function for query, insert, update and
    delete are exported.
*/
import * as types from 'types';
import * as mongoDb from "mongodb";
import * as dao_uuid from "./dao_uuid"
import {logger} from "logger";
import * as mongoConnection from "../src/mongo_connection"

% for currentType in mongoTypes:
export async function insert${currentType.name}(x: types.${currentType.name}, dbName: string): Promise<mongoDb.ObjectId> {
    try {
        const db: mongoDb.Db = await mongoConnection.getDb(dbName);
        const collectionName = "${currentType.name}";
        const collection: mongoDb.Collection = db.collection(collectionName);

        logger.info(() => `insert into db: $${}{dbName}, collection: $${}{collectionName}`, "insert${currentType.name}");
        logger.debug(() => JSON.stringify(x), "insert${currentType.name}");

        // TODO check if type contains UUID type
        dao_uuid.${stringUtils.toLowerCamelCase(currentType.name)}2Dao(x);
        const result = await collection.insertOne(x);
        return new Promise((resolve, reject) => {
            resolve(result.insertedId);
        });
    }
    catch(e) {
        logger.error(e, "insert${currentType.name}");
        return new Promise((resolve, reject) => {
            reject(e);
        });
    }
}

export async function find${currentType.name}(dbName: string): Promise<types.${currentType.name}[]> {
    try {
        const collectionName = "${currentType.name}";
        const db: mongoDb.Db = await mongoConnection.getDb(dbName);
        const collection: mongoDb.Collection = db.collection(collectionName);
        const cursor = collection.find({});
        const elemCount = await cursor.count();
        logger.info(() => `found $${}{elemCount} elements in db: $${}{dbName}, collection: $${}{collectionName}`, "find${currentType.name}");
        const array: types.${currentType.name}[] = [];
        await cursor.forEach(doc => {
            // TODO check if type contains UUID type
            dao_uuid.dao2${currentType.name}(doc);
            if (types.is${currentType.name}(doc)) {
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

% endfor
