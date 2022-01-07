import { Chance } from 'chance';

export function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum);
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return anEnum[randomEnumValue];
}


export function randomDate(): Date {
    const chance = new Chance();
    const date: Date = chance.date();
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    date.setMilliseconds(0);
    return date;
}

export function randomTimestamp(): Date {
    const chance = new Chance();
    const date: Date = chance.date();
    return date;
}
