
const uuidRegExp = /^[A-Ga-g0-9]{8}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{12}$/;

const isoDateRegExp = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.?[0-9+Z]*$/
//2092-09-22T14:18:05.460Z

export function isUUID(str: string): boolean {
    if (typeof str !== "string") return false;
    return uuidRegExp.test(str);
}

export function isArray(arrayThing: any): boolean {
    return (typeof arrayThing === "object") || (Array.isArray(arrayThing));
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

export function allArrayElemsAreNumbers(arrayThing: any): boolean {
    if ((typeof arrayThing !== "object") || (!Array.isArray(arrayThing))) return false;
    for (let i = 0; i < arrayThing.length; i++) {
        if (typeof arrayThing[i] != 'number') return false;
    }
    return true;
}