## Template to create TS interfaces from the model types
<%
    import yacg.model.model as model
    import yacg.templateHelper as templateHelper
    import yacg.model.modelFuncs as modelFuncs

    templateFile = 'type_factories.mako'
    templateVersion = '0.1.0'

    def printBaseTypeTest(prop):
        type = prop.type
        if prop.isArray:
            if isinstance(type, model.IntegerType):
                return 'utils.allArrayElemsAreNumbers(attrib)'
            elif isinstance(type, model.ObjectType):
                return 'typeof attrib === "object"'
            elif isinstance(type, model.NumberType):
                return 'utils.allArrayElemsAreNumbers(attrib)'
            elif isinstance(type, model.BooleanType):
                return 'typeof attrib === "boolean"'
            elif isinstance(type, model.StringType):
                return 'typeof attrib === "string"'
            elif isinstance(type, model.UuidType):
                return 'utils.allArrayElemsAreUUIDs(attrib)'
            elif isinstance(type, model.EnumType):
                return "{type}".format(type=type.name)
            elif isinstance(type, model.DateTimeType):
                return 'utils.isDate(attrib)'
            elif isinstance(type, model.DateType):
                return 'utils.isDate(attrib)'
            elif isinstance(type, model.BytesType):
                return 'utils.allArrayElemsAreNumbers(attrib)'
            elif isinstance(type, model.Dictobject):
                return 'typeof attrib === "object"'
            else:
                return "<< ERROR UNKOWN TYPE: {type}".format(type=type.name)
        else:
            if isinstance(type, model.IntegerType):
                return 'typeof attrib === "number"'
            elif isinstance(type, model.ObjectType):
                return 'typeof attrib === "object"'
            elif isinstance(type, model.NumberType):
                return 'typeof attrib === "number"'
            elif isinstance(type, model.BooleanType):
                return 'typeof attrib === "boolean"'
            elif isinstance(type, model.StringType):
                return 'typeof attrib === "string"'
            elif isinstance(type, model.UuidType):
                return 'utils.isUUID(attrib)'
            elif isinstance(type, model.EnumType):
                return "{type}".format(type=type.name)
            elif isinstance(type, model.DateTimeType):
                return 'utils.isDate(attrib)'
            elif isinstance(type, model.DateType):
                return 'utils.isDate(attrib)'
            elif isinstance(type, model.BytesType):
                return 'utils.allArrayElemsAreNumbers(attrib)'
            elif isinstance(type, model.Dictobject):
                return 'typeof attrib === "object"'
            else:
                return "<< ERROR UNKOWN TYPE: {type}".format(type=type.name)
%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/
import * as types from "./types";
import * as utils from "../src/factory_utils";
import * as guards from "./type_guards";

% for currentType in modelTypes:
    % if not isinstance(currentType, model.EnumType):
export function parse${currentType.name}(json: string): types.${currentType.name} {
    const parsedData = JSON.parse(json, utils.reviver);
    if (guards.is${currentType.name}(parsedData)) {
        return parsedData as types.${currentType.name};
    }
    else {
        console.log("[parse${currentType.name}] input doesn't match expected type: " + json);
        return null;
    }
}

export function parse${currentType.name}Array(json: string): types.${currentType.name}[] {
    const parsedData = JSON.parse(json, utils.reviver);
    if (!utils.isArray(parsedData)) {
        console.log("[parse${currentType.name}Array] input is no array: " + json);
        return null;
    }
    for (let i=0; i < parsedData.length; i++) {
        if (!guards.is${currentType.name}(parsedData[i])) {
            console.log("[parse${currentType.name}Array] input is not of ${currentType.name} type");
            return null;
        }
    }
    return parsedData;
}
    % endif
% endfor