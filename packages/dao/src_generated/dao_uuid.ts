/**
    This file is generated.
    Template: dao.mako v0.1.0)

    The file provides functions to access mongo db. For all types that are
    tagged with 'mongodb' the needed function for query, insert, update and
    delete are exported.
*/
import * as types from 'types';
import * as uuid from "uuid-mongodb";
import {logger} from "logger";

interface DaoMine extends Omit<types.Mine, 'id'> {
    id: uuid.MUUID
}

export function mine2Dao(mine: types.Mine): DaoMine {
    try {
        let daoMine: DaoMine = mine as unknown as DaoMine;
        if (mine.id) {
            daoMine.id = uuid.from(mine.id);
        }
        return daoMine;
    }
    catch(e) {
        logger.error(e, "mine2Dao");
        throw new Error(e);
    }
}

export function dao2Mine(dao: any): types.Mine {
    try {
        let mine: types.Mine = dao as types.Mine;
        if (dao.id) {
            mine.id = uuid.from(dao.id).toString();
        }
        return mine;
    }
    catch(e) {
        logger.error(e,"dao2Mine");
        throw new Error(e);
    }
}






