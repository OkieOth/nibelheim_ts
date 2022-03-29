/**
    This file is generated.
    Template: ts_types.mako v0.1.0)
*/

/**
 the place where you find all the gems
*/
export interface Mine {
    id: string | any;
    name: string;

    /**
     storage for already digged gems and stuff
    */
    storage?: Storage;

    /**
     current time in the Mine simulation
    */
    time: Date;
    dwarfs?: string[] | any[];
    active?: boolean;
}

/**
 A storage stores produced gems
*/
export interface Storage {
    mithril?: number;
    gold?: number;
    silver?: number;
    diamond?: number;
    iron?: number;
    cupper?: number;
}

export enum MineSpotMaterial {
        MITHRIL = "MITHRIL",
        GOLD = "GOLD",
        SILVER = "SILVER",
        DIAMOND = "DIAMOND",
        IRON = "IRON",
        CUPPER = "CUPPER",
        ROCK = "ROCK",
}

/**
 Brick, from which the mine is built
*/
export interface MineSpot {
    material: MineSpotMaterial;

    /**
     how many material contained the spot in the beginning
    */
    initialAmountOfMaterial: number;

    /**
     how many material contains the spot in the moment
    */
    currentAmountOfMaterial: number;

    /**
     factor that describes how more complicated is the mining of the material
    is
    */
    miningDifficulty: number;
}

/**
 One row of mine spots
*/
export interface MineSpotRow {
    mine_id: string | any;

    /**
     order of the rows in one level
    */
    row_number?: number;

    /**
     level of the row to make the mine 3 dimensional
    */
    level: number;
    columns?: MineSpot[];
}

/**
 A guy that runs around in the mine an dig for gems
*/
export interface Dwarf {
    id?: string | any;
    name: string;
    mine_id: string | any;

    /**
     small storage of mined material
    */
    pocket?: Storage;
    strongness?: number;
    currentStrongness?: number;
    hunger?: number;
    healthiness?: number;
    motivation?: number;

    /**
     ids of the minespots, from the entry/storage to the current spot
    */
    way?: DwarfWay[];
}

export interface DwarfWay {
    row_number?: number;
    spot?: number;
    level?: number;
}

export interface History {
    timestamp?: Date;
    change?: HistoryChangeEnum;

    /**
     stores the old value if a Dwarf entry was changed
    */
    dwarf?: Dwarf;

    /**
     stores the old value if a MineSpotRow entry was changed
    */
    mineSpotRow?: MineSpotRow;

    /**
     stores the old value if a Mine entry was changed
    */
    mine?: Mine;
}

export enum HistoryChangeEnum {
        insert = "insert",
        edit = "edit",
        delete = "delete",
}

