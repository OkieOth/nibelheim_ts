
const uuidRegExp = /^[A-Ga-g0-9]{8}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{4}-[A-Ga-g0-9]{12}$/;

export function isUUID(str: string): boolean {
    if (typeof str !== "string") return false;
    return uuidRegExp.test(str);
}

export function allArrayElemsAreUUIDs(arrayThing: any): boolean{
    if ((typeof arrayThing !== "object") || (!Array.isArray(arrayThing))) return false;
    for (let i=0; i < arrayThing.length; i++) {
        if (!isUUID(arrayThing[i])) return false;
    }
    return true;
}

export function isDate(str: string | Date): boolean {
    // TODO
    /*
    if (typeof str !== "string") return false;
    return uuidRegExp.test(str);
    */
    return true;
}

export function allArrayElemsAreNumbers(arrayThing: any): boolean {
    if ((typeof arrayThing !== "object") || (!Array.isArray(arrayThing))) return false;
    for (let i = 0; i < arrayThing.length; i++) {
        if (typeof arrayThing[i] != 'number') return false;
    }
    return true;
}