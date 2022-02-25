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

    The file provides functions to insert types objects into mongodb. All types that are
    tagged with 'mongodb' are included.
*/
import * as types from 'types';
import * as mongoDb from "mongodb";
import * as dao_uuid from "./dao_uuid"
import {logger} from "logger";
import * as mongoConnection from "../src/mongo_connection"

% for currentType in mongoTypes:
export async function insert${currentType.name}(x: types.${currentType.name}, dbName: string): Promise<mongoDb.ObjectId> {
    return new Promise(async (resolve, reject) => {
        try {
            const db: mongoDb.Db = await mongoConnection.getDb(dbName);
            const collectionName = "${currentType.name}";
            const collection: mongoDb.Collection = db.collection(collectionName);

            logger.info(() => `insert into db: $${}{dbName}, collection: $${}{collectionName}`, "insert${currentType.name}");
            logger.debug(() => JSON.stringify(x), "insert${currentType.name}");

            // TODO check if type or child contains UuuiType
            dao_uuid.${stringUtils.toLowerCamelCase(currentType.name)}2Dao(x);
            const result = await collection.insertOne(x);
            resolve(result.insertedId);
        }
        catch(e) {
            logger.error(e, "insert${currentType.name}");
            reject(e);
        }
    });
}

% endfor
