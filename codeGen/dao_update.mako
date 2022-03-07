## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.generators.helper.typescriptFuncs as typescriptFuncs
    import yacg.util.stringUtils as stringUtils
    import yacg.templateHelper as templateHelper

    templateFile = 'dao_delete.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])
%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides functions to delete types objects from mongodb. All types that are
    tagged with 'mongodb' are included.
*/
import * as mongoDb from "mongodb";
import * as uuid from "uuid-mongodb";
import {logger} from "logger";
import * as types from "types";
import * as mongoConnection from "../src/mongo_connection"

% for currentType in mongoTypes:
export async function update${currentType.name}ByObjectId(objId: string, newValues: Partial<types.${currentType.name}>, dbName: string, collectionName?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionNameToUse = ! collectionName ? "${currentType.name}" : collectionName;
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionNameToUse);
            const filter = new mongoDb.ObjectId(objId);
            const result = await collection.deleteOne({_id: filter});
            if (result.deletedCount === 0) {
                logger.info(() => `found no element to delete in db: $${}{dbName}, collection: $${}{collectionNameToUse}, _id=$${}{objId}`, "delete${currentType.name}ByObjectId");
            }
            else {
                logger.info(() => `deleted  $${}{result.deletedCount} elements in db: $${}{dbName}, collection: $${}{collectionNameToUse}, _id=$${}{objId}`, "delete${currentType.name}ByObjectId");
            }
            resolve(result.deletedCount);
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
export async function update${currentType.name}ByKey(key: ${typescriptFuncs.printTypescriptType(keyProperty.type, False)} ,newValues: Partial<types.${currentType.name}>, dbName: string, collectionName?: string): Promise<number> {
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
            const result = await collection.deleteOne({${keyProperty.name}: filter});
            if (result.deletedCount === 0) {
                logger.info(() => `found no element to delete in db: $${}{dbName}, collection: $${}{collectionNameToUse}, ${keyProperty.name}=$${}{key}`, "delete${currentType.name}ByKey");
            }
            else {
                logger.info(() => `deleted  $${}{result.deletedCount} elements in db: $${}{dbName}, collection: $${}{collectionNameToUse}, ${keyProperty.name}=$${}{key}`, "delete${currentType.name}ByKey");
            }
            resolve(result.deletedCount);
        }
        catch(e) {
            logger.error(e);
            reject(e);
        }
    });
}

    % endif
% endfor
