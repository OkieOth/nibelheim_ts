import * as filter from "filter";

export type ConvertStrValue = (v: string) => string;
export type ConvertUUIDValue = (v: string) => string;
export type ConvertNumValue = (v: number) => string;
export type ConvertDateValue = (v: Date) => string;
export type ConvertBooleanValue = (v: boolean) => string;

export const convertStrValue: ConvertStrValue = (v: string): string => {
    return v;
}

export const convertUUIDValue: ConvertUUIDValue = (v: string | any): string => {
    return v;
}

export const convertNumValue: ConvertNumValue = (v: number): string => {
    return String(v);
}
export const convertDateValue: ConvertDateValue = (v: Date): string => {
    return String(v);
};
export const convertBooleanValue: ConvertBooleanValue = (v: boolean): string => {
    return String(v);
};

export interface DaoFieldFilter extends filter.FieldFilter {
    convertValue: ConvertStrValue | ConvertUUIDValue | ConvertNumValue | ConvertDateValue | ConvertBooleanValue;
}

