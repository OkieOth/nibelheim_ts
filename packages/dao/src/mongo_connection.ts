import * as mongoDB from "mongodb";
import {logger} from "logger";


let defaultClient: mongoDB.MongoClient;


export async function getMongoConnection(conStr: string): Promise<mongoDB.MongoClient> {
    logger.debug(conStr,"getMongoClient")
    const client = new mongoDB.MongoClient(conStr);
    return client.connect();
}

export async function getDefaultMongoConnection(): Promise<mongoDB.MongoClient> {
    if (!defaultClient) {
        const conStr = initDefaultConStr();
        defaultClient = new mongoDB.MongoClient(conStr);
    }
    return defaultClient.connect();
}

export async function getDb(dbName: string, client?: mongoDB.MongoClient): Promise<mongoDB.Db> {
    try {
        if (client){
            return getDbFromGivenClient(dbName, client);
        }
        else {
            return getDbFromDefaultClient(dbName);
        }
    }
    catch(e) {
        return new Promise((resolve, reject) => {
            reject(e);
        })
    }
}

export async function closeDefaultConnection(): Promise<void> {
    logger.info("called","closeDefaultConnection");
    if (defaultClient) {
        try {
            const client = defaultClient;
            defaultClient = null;
            return client.close();
        }
        catch(e) {
            const errorMsg = `error while close connection: ${e}`;
            logger.error(errorMsg,"closeDefaultConnection");
            return new Promise((resolve, reject) => {
                reject(errorMsg);
            });
        }
    }
    else {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}


async function getDbFromDefaultClient(dbName: string): Promise<mongoDB.Db> {
    logger.debug(dbName,"getDbFromDefaultClient");
    if (defaultClient) {
        try {
            return new Promise((resolve, reject) => {
                resolve(defaultClient.db(dbName));
            });
        }
        catch(e) {
            logger.error("defaultClient wasn't connected, try reconnect","getDbFromDefaultClient");
        }
    }
    const client = await getDefaultMongoConnection()
    return new Promise((resolve, reject) => {
        resolve(client.db(dbName));
    });
}

async function getDbFromGivenClient(dbName: string, client: mongoDB.MongoClient): Promise<mongoDB.Db> {
    logger.debug(dbName,"getDbFromGivenClient");
    return new Promise((resolve) => {
        resolve(client.db(dbName))
    })
}

function initFromConStr(userName: string, userPassword: string, host: string, port: string): string {
    let conStr = process.env.MONGODB_CONSTR;
    if (host) {
        conStr = conStr.replace("{MONGODB_HOST}", host);
    }
    if (port) {
        conStr = conStr.replace("{MONGODB_PORT}", port);
    }
    if (userName) {
        conStr = conStr.replace("{MONGODB_USER}", userName);
    }
    logger.info(conStr,"initFromConStr");
    if (userPassword) {
        conStr = conStr.replace("{MONGODB_PASSWORD}", userPassword);
    }
    return conStr;
}

function initDefaultConStr(): string {
    const userName = process.env.MONGODB_USER;
    const userPassword = process.env.MONGODB_PASSWORD;
    const host = process.env.MONGODB_HOST ? process.env.MONGODB_HOST : "127.0.0.1";
    const port = process.env.MONGODB_PORT ? process.env.MONGODB_PORT : "27017";
    if (process.env.MONGODB_CONSTR) {
        return initFromConStr(userName, userPassword, host, port);
    }
    else {
        const conStr = `mongodb://${userName}:${userPassword}@${host}:${port}`;
        logger.info(conStr,"initDefaultConStr");
        return conStr;
    }
}