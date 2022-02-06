import * as mongoDB from "mongodb";

export interface MongoConnectionConfig {
    conStr: string,
    dbName: string
}


let defaultClient: mongoDB.MongoClient;
let defaultConStr: string;
let defaultDbName: string;
let defaultDb: mongoDB.Db;

/*
function initDefaultDbConnection(): Promise<mongoDB.MongoClient> {
    defaultConStr = "TODO";
    defaultClient = new mongoDB.MongoClient(defaultConStr);
    return defaultClient.connect();
}
*/

export async function getDb (databaseConf?: MongoConnectionConfig | string): Promise<mongoDB.Db> {
/*
    if (databaseConf) {
        // return a new DB connection
        // TODO
    }
    else {
        if (!defaultClient) {
            initDefaultDbConnection()
            .then( mongoClient => {

            })
            .catch(e => {
                // TODO handle error
            }
        }
    }
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(defaultConStr);
    client.connect();
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
*/
    return null;
 }
 