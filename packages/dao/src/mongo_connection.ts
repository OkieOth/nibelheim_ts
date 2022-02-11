import * as mongoDB from "mongodb";


let defaultClient: mongoDB.MongoClient;


export async function getMongoClient(conStr: string): Promise<mongoDB.MongoClient> {
    const client = new mongoDB.MongoClient(conStr);
    return client.connect();
}

export async function getDefaultMongoClient(): Promise<mongoDB.MongoClient> {
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

async function getDbFromDefaultClient(dbName: string): Promise<mongoDB.Db> {
    const client = await getDefaultMongoClient()
    return new Promise((resolve, reject) => {
        resolve(client.db(dbName));
    });
}

async function getDbFromGivenClient(dbName: string, client: mongoDB.MongoClient): Promise<mongoDB.Db> {
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
    // TODO Logging
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
        // TODO Logging
        // TODO check for missing username/password
        return `mongodb://${userName}:${userPassword}@${host}:${port}`;
    }
}