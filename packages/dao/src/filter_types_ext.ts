import * as filter from "filter";
import * as uuid from "uuid-mongodb";

export type ConvertStrValue = (v: string) => string;
export type ConvertUUIDValue = (v: string) => string;
export type ConvertEnumValue = (v: string) => string;
export type ConvertNumValue = (v: number) => number;
export type ConvertDateValue = (v: Date) => Date;
export type ConvertBooleanValue = (v: boolean) => boolean;

export const convertStrValue: ConvertStrValue = (v: string): string => {
    return v;
}

export const convertUUIDValue: ConvertUUIDValue = (v: string | any): string | any => {
    return uuid.from(v); // TODO
}

export const convertEnumValue: ConvertEnumValue = (v: string): string => {
    return v; // TODO
}

export const convertNumValue: ConvertNumValue = (v: number): number => {
    return v;
}
export const convertDateValue: ConvertDateValue = (v: Date): Date => {
    return v;
};

export const convertBooleanValue: ConvertBooleanValue = (v: boolean): boolean => {
    return v;
};

export interface DaoFieldFilter extends filter.FieldFilter {
    convertValue:   ConvertStrValue |
                    ConvertUUIDValue |
                    ConvertNumValue |
                    ConvertDateValue |
                    ConvertBooleanValue |
                    ConvertEnumValue;
}

