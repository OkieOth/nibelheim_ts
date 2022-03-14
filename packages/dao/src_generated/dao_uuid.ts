/**
    This file is generated.
    Template: dao_uuid.mako v0.1.0)

    The file provides functions to convert uuid fields into mongo compatible
    BSON UUIDs.
*/
import * as types from 'types';
import * as uuid from "uuid-mongodb";
import {logger} from "logger";

export function mine2Dao(x: types.Mine) {
    try {
        if (x.id && (typeof x.id === "string")) {
            x.id = uuid.from(x.id);
        };
        if (x.dwarfs) {
            x.dwarfs = x.dwarfs.map((elem: string) => {
                return uuid.from(elem);
            });
        };
    }
    catch(e) {
        logger.error(e, "mine2Dao");
        throw new Error(e);
    }
}

export function dao2Mine (x: any) {
    try {
        if (x.id && (typeof x.id !== "string")) {
            x.id = uuid.from(x.id).toString();
        };
        if (x.dwarfs) {
            x.dwarfs = x.dwarfs.map((elem: any) => {
                return uuid.from(elem).toString();
            });
        };
    }
    catch(e) {
        logger.error(e,"dao2Mine");
        throw new Error(e);
    }
}

export function mineSpotRow2Dao(x: types.MineSpotRow) {
    try {
        if (x.mine_id && (typeof x.mine_id === "string")) {
            x.mine_id = uuid.from(x.mine_id);
        };
    }
    catch(e) {
        logger.error(e, "mineSpotRow2Dao");
        throw new Error(e);
    }
}

export function dao2MineSpotRow (x: any) {
    try {
        if (x.mine_id && (typeof x.mine_id !== "string")) {
            x.mine_id = uuid.from(x.mine_id).toString();
        };
    }
    catch(e) {
        logger.error(e,"dao2MineSpotRow");
        throw new Error(e);
    }
}

export function dwarf2Dao(x: types.Dwarf) {
    try {
        if (x.id && (typeof x.id === "string")) {
            x.id = uuid.from(x.id);
        };
        if (x.mine_id && (typeof x.mine_id === "string")) {
            x.mine_id = uuid.from(x.mine_id);
        };
    }
    catch(e) {
        logger.error(e, "dwarf2Dao");
        throw new Error(e);
    }
}

export function dao2Dwarf (x: any) {
    try {
        if (x.id && (typeof x.id !== "string")) {
            x.id = uuid.from(x.id).toString();
        };
        if (x.mine_id && (typeof x.mine_id !== "string")) {
            x.mine_id = uuid.from(x.mine_id).toString();
        };
    }
    catch(e) {
        logger.error(e,"dao2Dwarf");
        throw new Error(e);
    }
}

export function history2Dao(x: types.History) {
    try {
        if (x.dwarf) {
            dwarf2Dao(x.dwarf);
        };
        if (x.mineSpotRow) {
            mineSpotRow2Dao(x.mineSpotRow);
        };
        if (x.mine) {
            mine2Dao(x.mine);
        };
    }
    catch(e) {
        logger.error(e, "history2Dao");
        throw new Error(e);
    }
}

export function dao2History (x: any) {
    try {
            if (x.dwarf) {
                dao2Dwarf(x.dwarf);
            };
            if (x.mineSpotRow) {
                dao2MineSpotRow(x.mineSpotRow);
            };
            if (x.mine) {
                dao2Mine(x.mine);
            };
    }
    catch(e) {
        logger.error(e,"dao2History");
        throw new Error(e);
    }
}

