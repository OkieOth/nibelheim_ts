/**
    This file is generated.
    It contains functions to test if two objects are equal. The functions are
    needed because _.isEqual and the stringify approach fail with additional
    attributes.

    Template: type_equal.mako v0.1.0)
*/
import * as types from "./types";
import * as type_guards from "./type_guards";
import * as utils from "../src/factory_utils";
import {logger} from "logger";

export function isEqualMine(obj1: types.Mine, obj2: types.Mine): boolean {
    const caller = "isEqualMine";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.isMine(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.isMine(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
    if (obj1.id) {
        if (obj1.id !== obj2.id) return false;
    }
    else {
        if (!obj2.id) return true;
        return false;
    }
    if (obj1.name) {
        if (obj1.name !== obj2.name) return false;
    }
    else {
        if (!obj2.name) return true;
        return false;
    }
    if (obj1.storage) {
        if (!isEqualStorage(obj1.storage, obj2.storage)) return false;
    }
    else {
        if (!obj2.storage) return true;
        return false;
    }
    if (obj1.time) {
        if (obj1.time.getTime() !== obj2.time.getTime()) return false;
    }
    else {
        if (!obj2.time) return true;
        return false;
    }
    if (obj1.dwarfs) {
        if (!obj2.dwarfs) return false;
        if (obj1.dwarfs.length != obj2.dwarfs.length) return false;
        for (let i=0; i < obj1.dwarfs.length; i++) {
            if (obj1.dwarfs[i] !== obj2.dwarfs[i]) return false;
        }
    }
    else {
        if (!obj2.dwarfs) return true;
        return false;
    }
    return true;
}

export function isEqualStorage(obj1: types.Storage, obj2: types.Storage): boolean {
    const caller = "isEqualStorage";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.isStorage(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.isStorage(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
    if (obj1.mithril) {
        if (obj1.mithril !== obj2.mithril) return false;
    }
    else {
        if (!obj2.mithril) return true;
        return false;
    }
    if (obj1.gold) {
        if (obj1.gold !== obj2.gold) return false;
    }
    else {
        if (!obj2.gold) return true;
        return false;
    }
    if (obj1.silver) {
        if (obj1.silver !== obj2.silver) return false;
    }
    else {
        if (!obj2.silver) return true;
        return false;
    }
    if (obj1.diamond) {
        if (obj1.diamond !== obj2.diamond) return false;
    }
    else {
        if (!obj2.diamond) return true;
        return false;
    }
    if (obj1.iron) {
        if (obj1.iron !== obj2.iron) return false;
    }
    else {
        if (!obj2.iron) return true;
        return false;
    }
    if (obj1.cupper) {
        if (obj1.cupper !== obj2.cupper) return false;
    }
    else {
        if (!obj2.cupper) return true;
        return false;
    }
    return true;
}


export function isEqualMineSpot(obj1: types.MineSpot, obj2: types.MineSpot): boolean {
    const caller = "isEqualMineSpot";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.isMineSpot(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.isMineSpot(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
    if (obj1.material) {
        if (obj1.material !== obj2.material) return false;
    }
    else {
        if (!obj2.material) return true;
        return false;
    }
    if (obj1.initialAmountOfMaterial) {
        if (obj1.initialAmountOfMaterial !== obj2.initialAmountOfMaterial) return false;
    }
    else {
        if (!obj2.initialAmountOfMaterial) return true;
        return false;
    }
    if (obj1.currentAmountOfMaterial) {
        if (obj1.currentAmountOfMaterial !== obj2.currentAmountOfMaterial) return false;
    }
    else {
        if (!obj2.currentAmountOfMaterial) return true;
        return false;
    }
    if (obj1.miningDifficulty) {
        if (obj1.miningDifficulty !== obj2.miningDifficulty) return false;
    }
    else {
        if (!obj2.miningDifficulty) return true;
        return false;
    }
    return true;
}

export function isEqualMineSpotRow(obj1: types.MineSpotRow, obj2: types.MineSpotRow): boolean {
    const caller = "isEqualMineSpotRow";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.isMineSpotRow(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.isMineSpotRow(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
    if (obj1.mine_id) {
        if (obj1.mine_id !== obj2.mine_id) return false;
    }
    else {
        if (!obj2.mine_id) return true;
        return false;
    }
    if (obj1.row_number) {
        if (obj1.row_number !== obj2.row_number) return false;
    }
    else {
        if (!obj2.row_number) return true;
        return false;
    }
    if (obj1.level) {
        if (obj1.level !== obj2.level) return false;
    }
    else {
        if (!obj2.level) return true;
        return false;
    }
    if (obj1.columns) {
        if (!obj2.columns) return false;
        if (obj1.columns.length != obj2.columns.length) return false;
        for (let i=0; i < obj1.columns.length; i++) {
            if (!isEqualMineSpot(obj1.columns[i], obj2.columns[i])) return false;
        }
    }
    else {
        if (!obj2.columns) return true;
        return false;
    }
    return true;
}

export function isEqualDwarf(obj1: types.Dwarf, obj2: types.Dwarf): boolean {
    const caller = "isEqualDwarf";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.isDwarf(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.isDwarf(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
    if (obj1.id) {
        if (obj1.id !== obj2.id) return false;
    }
    else {
        if (!obj2.id) return true;
        return false;
    }
    if (obj1.name) {
        if (obj1.name !== obj2.name) return false;
    }
    else {
        if (!obj2.name) return true;
        return false;
    }
    if (obj1.mine_id) {
        if (obj1.mine_id !== obj2.mine_id) return false;
    }
    else {
        if (!obj2.mine_id) return true;
        return false;
    }
    if (obj1.pocket) {
        if (!isEqualStorage(obj1.pocket, obj2.pocket)) return false;
    }
    else {
        if (!obj2.pocket) return true;
        return false;
    }
    if (obj1.strongness) {
        if (obj1.strongness !== obj2.strongness) return false;
    }
    else {
        if (!obj2.strongness) return true;
        return false;
    }
    if (obj1.currentStrongness) {
        if (obj1.currentStrongness !== obj2.currentStrongness) return false;
    }
    else {
        if (!obj2.currentStrongness) return true;
        return false;
    }
    if (obj1.hunger) {
        if (obj1.hunger !== obj2.hunger) return false;
    }
    else {
        if (!obj2.hunger) return true;
        return false;
    }
    if (obj1.healthiness) {
        if (obj1.healthiness !== obj2.healthiness) return false;
    }
    else {
        if (!obj2.healthiness) return true;
        return false;
    }
    if (obj1.motivation) {
        if (obj1.motivation !== obj2.motivation) return false;
    }
    else {
        if (!obj2.motivation) return true;
        return false;
    }
    if (obj1.way) {
        if (!obj2.way) return false;
        if (obj1.way.length != obj2.way.length) return false;
        for (let i=0; i < obj1.way.length; i++) {
            if (!isEqualDwarfWay(obj1.way[i], obj2.way[i])) return false;
        }
    }
    else {
        if (!obj2.way) return true;
        return false;
    }
    return true;
}

export function isEqualDwarfWay(obj1: types.DwarfWay, obj2: types.DwarfWay): boolean {
    const caller = "isEqualDwarfWay";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.isDwarfWay(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.isDwarfWay(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
    if (obj1.row_number) {
        if (obj1.row_number !== obj2.row_number) return false;
    }
    else {
        if (!obj2.row_number) return true;
        return false;
    }
    if (obj1.spot) {
        if (obj1.spot !== obj2.spot) return false;
    }
    else {
        if (!obj2.spot) return true;
        return false;
    }
    if (obj1.level) {
        if (obj1.level !== obj2.level) return false;
    }
    else {
        if (!obj2.level) return true;
        return false;
    }
    return true;
}

export function isEqualHistory(obj1: types.History, obj2: types.History): boolean {
    const caller = "isEqualHistory";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.isHistory(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.isHistory(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
    if (obj1.timestamp) {
        if (obj1.timestamp.getTime() !== obj2.timestamp.getTime()) return false;
    }
    else {
        if (!obj2.timestamp) return true;
        return false;
    }
    if (obj1.change) {
        if (obj1.change !== obj2.change) return false;
    }
    else {
        if (!obj2.change) return true;
        return false;
    }
    if (obj1.dwarf) {
        if (!isEqualDwarf(obj1.dwarf, obj2.dwarf)) return false;
    }
    else {
        if (!obj2.dwarf) return true;
        return false;
    }
    if (obj1.mineSpotRow) {
        if (!isEqualMineSpotRow(obj1.mineSpotRow, obj2.mineSpotRow)) return false;
    }
    else {
        if (!obj2.mineSpotRow) return true;
        return false;
    }
    if (obj1.mine) {
        if (!isEqualMine(obj1.mine, obj2.mine)) return false;
    }
    else {
        if (!obj2.mine) return true;
        return false;
    }
    return true;
}


