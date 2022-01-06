/**
    This file is generated.
    Template: ts_types.mako v0.1.0)
*/

/**
 the place where you find all the gems
*/
export interface Mine {

    /**
     defines a two dimensional array as area of the mine
    */
    rows?: MineSpotRow[];

    /**
     list of dwarfs that are working currently in the mine
    */
    dwarfs?: Dwarf[];

    /**
     storage for already digged gems and stuff
    */
    storage?: Storage;
}

/**
 One row of mine spots
*/
export interface MineSpotRow {
    columns?: MineSpot[];
}

/**
 A guy that runs around in the mine an dig for gems
*/
export interface Dwarf {
    name?: string;

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
    currentWay?: string[];
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
    id?: string;
    material?: MineSpotMaterial;

    /**
     how many material contained the spot in the beginning
    */
    initialAmountOfMaterial?: number;

    /**
     how many material contains the spot in the moment
    */
    currentAmountOfMaterial?: number;

    /**
     factor that describes how more complicated is the mining of the material
    is
    */
    miningDifficulty?: number;
}

