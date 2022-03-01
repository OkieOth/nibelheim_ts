## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.util.stringUtils as stringUtils
    import yacg.templateHelper as templateHelper

    templateFile = 'dao.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])

    def printTypescriptType(type, isArray):
        if type is None:
            return 'unknown' if not isArray else 'unknown[]'
        elif isinstance(type, model.IntegerType):
            return 'number' if not isArray else 'number[]'
        elif isinstance(type, model.ObjectType):
            return 'Object' if not isArray else 'Object[]'
        elif isinstance(type, model.NumberType):
            return 'number' if not isArray else 'number[]'
        elif isinstance(type, model.BooleanType):
            return 'boolean' if not isArray else 'boolean[]'
        elif isinstance(type, model.StringType):
            return 'string' if not isArray else 'string[]'
        elif isinstance(type, model.UuidType):
            # instead of the original type definition, here is only string used
            return 'string' if not isArray else 'string[] | any[]'
        elif isinstance(type, model.EnumType):
            return "{type}".format(type=type.name) if not isArray else "{type}[]".format(type=type.name)
        elif isinstance(type, model.DateTimeType):
            return 'Date' if not isArray else 'Date[]'
        elif isinstance(type, model.DateType):
            return 'Date' if not isArray else 'Date[]'
        elif isinstance(type, model.BytesType):
             return 'number[]' if not isArray else 'number[][]'
        elif isinstance(type, model.DictionaryType):
            return "Map<String, {}>".format(printTypescriptType(type.valueType))  if not isArray else "Map<String, {}>[]".format(printTypescriptType(type.valueType))
        elif isinstance(type, model.ComplexType):
            return "{type}".format(type=type.name) if not isArray else "{type}[]".format(type=type.name)
        else:
            return type
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

    % if modelFuncs.hasKey(currentType):
<%
    keyProperty = modelFuncs.getKeyProperty(currentType)
%>
export async function find${currentType.name}ByKey(key: ${printTypescriptType(keyProperty.type, False)}, dbName: string, collectionName?: string): Promise<types.${currentType.name}> {
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
            const result = await collection.findOne({id: filter});
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
