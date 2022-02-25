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

    The file provides functions to query types objects from mongodb. All types that are
    tagged with 'mongodb' are included.
*/
import * as types from 'types';
import * as mongoDb from "mongodb";
import * as dao_uuid from "./dao_uuid"
import {logger} from "logger";
import * as mongoConnection from "../src/mongo_connection"

% for currentType in mongoTypes:
export async function find${currentType.name}(dbName: string): Promise<types.${currentType.name}[]> {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionName = "${currentType.name}";
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collection: mongoDb.Collection = db.collection(collectionName);
            const cursor = collection.find({});
            const elemCount = await cursor.count();
            logger.info(() => `found $${}{elemCount} elements in db: $${}{dbName}, collection: $${}{collectionName}`, "find${currentType.name}");
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

% endfor
