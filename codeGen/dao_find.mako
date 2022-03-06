## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.generators.helper.typescriptFuncs as typescriptFuncs
    import yacg.util.stringUtils as stringUtils
    import yacg.templateHelper as templateHelper

    templateFile = 'dao.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides functions to query types objects from mongodb. All types that are
    tagged with 'mongodb' are included.
*/
import * as types from 'types';
import * as mongoDb from "mongodb";
import * as uuid from "uuid-mongodb";
import * as dao_uuid from "./dao_uuid";
import {logger} from "logger";
import * as mongoConnection from "../src/mongo_connection"

% for currentType in mongoTypes:
export async function find${currentType.name}(dbName: string, collectionName?: string): Promise<types.${currentType.name}[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "${currentType.name}" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found $${}{elemCount} elements in db: $${}{dbName}, collection: $${}{collectionNameToUse}`, "find${currentType.name}");
            const array: types.${currentType.name}[] = [];
            await cursor.forEach(doc => {
                // TODO check if type or child contains UuuiType
                dao_uuid.dao2${currentType.name}(doc);
                if (types.is${currentType.name}(doc)) {
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

export async function count${currentType.name}(dbName: string, collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "${currentType.name}" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            const elemCount = await collection.countDocuments({});
            logger.info(() => `found $${}{elemCount} elements in db: $${}{dbName}, collection: $${}{collectionNameToUse}`, "find${currentType.name}");
            resolve(elemCount);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

export async function find${currentType.name}ByObjectId(objId: string, dbName: string, collectionName?: string): Promise<types.${currentType.name}> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "${currentType.name}" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = new mongoDb.ObjectId(objId);
            const result = await collection.findOne({_id: filter});
            if (!result) {
                logger.info(() => `found no element in db: $${}{dbName}, collection: $${}{collectionNameToUse}, _id=$${}{objId}`, "find${currentType.name}ByObjectId");
                return resolve(null);
            }
            // TODO check if type or child contains UuuiType
            dao_uuid.dao2${currentType.name}(result);
            if (types.is${currentType.name}(result)) {
                logger.info(() => `found element in db: $${}{dbName}, collection: $${}{collectionNameToUse}, _id=$${}{objId}`, "find${currentType.name}ByObjectId");
                resolve(result);
            }
            else {
                const errorMsg = `found something in db, but it has wrong type: $${}{dbName}, collection: $${}{collectionNameToUse}, _id=$${}{objId}`;
                logger.info(errorMsg, "find${currentType.name}ByObjectId");
                reject(errorMsg);
            }
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

    % if modelFuncs.hasKey(currentType):
<%
    keyProperty = modelFuncs.getKeyProperty(currentType)
%>
export async function find${currentType.name}ByKey(key: ${typescriptFuncs.printTypescriptType(keyProperty.type, False)}, dbName: string, collectionName?: string): Promise<types.${currentType.name}> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "${currentType.name}" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
    % if isinstance(keyProperty.type, model.UuidType):
            const filter = uuid.from(key);
    % else:
            const filter = key;
    % endif
            const result = await collection.findOne({${keyProperty.name}: filter});
            if (!result) {
                logger.info(() => `found no element in db: $${}{dbName}, collection: $${}{collectionNameToUse}, ${keyProperty.name}=$${}{key}`, "find${currentType.name}ByKey");
                return resolve(null);
            }
            // TODO check if type or child contains UuuiType
            dao_uuid.dao2${currentType.name}(result);
            if (types.is${currentType.name}(result)) {
                logger.info(() => `found element in db: $${}{dbName}, collection: $${}{collectionNameToUse}, ${keyProperty.name}=$${}{key}`, "find${currentType.name}ByKey");
                resolve(result);
            }
            else {
                const errorMsg = `found something in db, but it has wrong type: $${}{dbName}, collection: $${}{collectionNameToUse}, ${keyProperty.name}=$${}{key}`;
                logger.info(errorMsg, "find${currentType.name}ByKey");
                reject(errorMsg);
            }
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

    % endif
% endfor
