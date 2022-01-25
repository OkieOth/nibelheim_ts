
const uuidRegExp = /^[A-Ga-g0-9]{8}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{12}$/;

const isoDateRegExp = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.?[0-9+Z]*$/
//2092-09-22T14:18:05.460Z

export function isUUID(str: string): boolean {
    if (typeof str !== "string") return false;
    return uuidRegExp.test(str);
}

export function isArray(arrayThing: any): boolean {
    const b1: boolean = typeof arrayThing === "object";
    const b2: boolean = Array.isArray(arrayThing);
    return b1 && b2;
}

export function allArrayElemsAreUUIDs(arrayThing: any): boolean{
    if (!isArray(arrayThing)) return false;
    for (let i=0; i < arrayThing.length; i++) {
        if (!isUUID(arrayThing[i])) return false;
    }
    return true;
}

export function isDate(str: string | Date): boolean {
    if (str instanceof Date) return true;
    return isoDateRegExp.test(str);
}

export function isDateStr(str: string): boolean {
    if (typeof str !== "string") return false;
    return isoDateRegExp.test(str);
}

export function reviver(key, value) {
    if (isDateStr(value)) {
        return new Date(value);
    }
    return value;
}


export function strToDate(str: string): Date {
    if (str == null) return null;
    const d: any = Date.parse(str);
    if (!(d instanceof Date)) {
        console.log("can't convert input to Date: " + str);
        return null;
    }
    return d as Date;
}

export function allArrayElemsAreNumbers(arrayThing: any): boolean {
    if ((typeof arrayThing !== "object") || (!Array.isArray(arrayThing))) return false;
    for (let i = 0; i < arrayThing.length; i++) {
        if (typeof arrayThing[i] != 'number') return false;
    }
    return true;
}