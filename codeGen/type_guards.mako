## Template to create TS type guards from the model types
<%
    import yacg.model.model as model
    import yacg.templateHelper as templateHelper
    import yacg.model.modelFuncs as modelFuncs

    templateFile = 'type_guards.mako'
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
import {logger} from "logger";

% for currentType in modelTypes:
    % if isinstance(currentType, model.EnumType):
    ## enums only needs to validate the that the value is right
export function is${currentType.name}(value: any): value is types.${currentType.name} {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        logger.error(() => `input is no string ${currentType.name}: $${}{value}`, "is${currentType.name}");
        return false;
    }
        % for value in currentType.values:
    if (value  == "${value}")
        return true;
        % endfor
    return false;
}
    % else:
export function is${currentType.name}(value: any): value is types.${currentType.name} {
    if (value == null || value == undefined)
        return true;
    const caller = "is${currentType.name}";
    if (!(typeof value === 'object')) {
        logger.error(() => `input is not of type object: $${}{value}`, caller);
        return false;
    }
    if (Array.isArray(value)) {
        logger.error(() => `input is an array: $${}{value}`, caller);
        return false;
    }
    const obj = value as Object;
    % for prop in currentType.properties:
        ## check that all required attributes are there
        % if prop.required:
    if (!("${prop.name}" in obj)) { // check required attribute
        logger.error(() => `missing required attribute '${prop.name}': $${}{value}`, caller);
        return false;
    }
        % endif
    if ("${prop.name}" in obj) {
        const attrib: any = obj["${prop.name}"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != ${ 'true' if prop.isArray else 'false'})) {
            logger.error(() => `'${prop.name}' has wrong multiplicity: $${}{value}`, caller);
            return false;
        }
        // check if the the attribs has the right type
        ## check properties with base types
        % if modelFuncs.isBaseType(prop.type):
        if ( ! (${printBaseTypeTest(prop)}) ) {
            logger.error(() => `'${prop.name}' has wrong type: $${}{value}`, caller);
            return false;
        }
        % endif
        % if isinstance(prop.type, model.EnumType) or isinstance(prop.type, model.ComplexType):
        if ( ! (is${prop.type.name}${'Array' if prop.isArray else ''}(attrib)) ) {
            logger.error(() => `'${prop.name}' has wrong type: $${}{value}`, caller);
            return false;
        }
        % endif
    }
    % endfor
    return true;
}
    % endif

% endfor

% for currentType in modelTypes:
export function is${currentType.name}Array(value: any): value is types.${currentType.name}[] {
    const caller = "is${currentType.name}Array";
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        logger.error(() => `input is no array: $${}{value}`, caller);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!is${currentType.name}(value[i])) {
            logger.error(() => `input is not of ${currentType.name} type: $${}{value[i]}`, caller);
            return false;
        }
    }
    return true;
}

% endfor
