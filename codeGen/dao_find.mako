## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.generators.helper.typescriptFuncs as typescriptFuncs
    import yacg.util.stringUtils as stringUtils
    import yacg.templateHelper as templateHelper

    templateFile = 'dao_find.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])

    typesWithUuids = []
    for t in modelTypes:
        if modelFuncs.doesTypeOrAttribContainsType(t, model.UuidType):
            typesWithUuids.append(t.name)

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
import * as mongoConnection from "../src/mongo_connection";
import * as mongoHelper from "../src/mongo_helper";
import * as filter from "filter";
import * as filterExt from "../src/filter_types_ext"

% for currentType in mongoTypes:
export async function find${currentType.name}(
    % if modelFuncs.hasPropertyWithTag("daoFilter", currentType):
    filter: filterExt.DaoFieldFilter[],
    % endif
    % if modelFuncs.hasPropertyWithTag("daoSort", currentType):
    sort: filter.FieldSort[],
    % endif
    skip: number,
    limit: number,
    dbName: string,
    collectionName?: string): Promise<types.${currentType.name}[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "${currentType.name}" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            const filterObj = mongoHelper.getMongoFilter(filter);
            const sortObj = mongoHelper.getMongoSort(sort);
            const cursor = collection.find(filterObj).sort(sortObj).skip(skip).limit(limit).project({_id: 0});
            const elemCount = await cursor.count();
            logger.info(() => `found $${}{elemCount} elements in db: $${}{dbName}, collection: $${}{collectionNameToUse}`, "find${currentType.name}");
            const array: types.${currentType.name}[] = [];
            await cursor.forEach(doc => {
        % if currentType.name in typesWithUuids:
                dao_uuid.dao2${currentType.name}(doc);
        % endif
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

export async function count${currentType.name}(
    % if modelFuncs.hasPropertyWithTag("daoFilter", currentType):
    filter: filterExt.DaoFieldFilter[],
    % endif
    dbName: string,
    collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "${currentType.name}" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);

            const filterObj = mongoHelper.getMongoFilter(filter);
            const elemCount = await collection.countDocuments(filterObj);
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
        % if currentType.name in typesWithUuids:
            dao_uuid.dao2${currentType.name}(result);
        % endif
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
        % if currentType.name in typesWithUuids:
            dao_uuid.dao2${currentType.name}(result);
        % endif
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