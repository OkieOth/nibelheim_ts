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

% for currentType in modelTypes:
    % if isinstance(currentType, model.EnumType):
    ## enums only needs to validate the that the value is right
export function is${currentType.name}(value: any): value is types.${currentType.name} {
    if (value == null || value == undefined)
        return true;
    if (!(typeof value === 'string' || value instanceof String)) {
        console.log("[is${currentType.name}] input is no string ${currentType.name}: " + String(value));
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
    if (!(typeof value === 'object')) {
        console.log("[is${currentType.name}] input is not of type object: " + String(value));
        return false;
    }
    if (Array.isArray(value)) {
        console.log("[is${currentType.name}] input is an array: " + String(value));
        return false;
    }
    const obj = value as Object;
    % for prop in currentType.properties:
        ## check that all required attributes are there
        % if prop.required:
    if (!("${prop.name}" in obj)) { // check required attribute
        console.log("[is${currentType.name}] missing required attribute '${prop.name}'" + String(value));
        return false;
    }
        % endif
    if ("${prop.name}" in obj) {
        const attrib: any = obj["${prop.name}"];
        // check for the right multiplicity
        if ((attrib != null) && (Array.isArray(attrib) != ${ 'true' if prop.isArray else 'false'})) {
            console.log("[is${currentType.name}] '${prop.name}' has wrong multiplicity" + String(value));
            return false;
        }
        // check if the the attribs has the right type
        ## check properties with base types
        % if modelFuncs.isBaseType(prop.type):
        if ( ! (${printBaseTypeTest(prop)}) ) {
            console.log("[is${currentType.name}] '${prop.name}' has wrong type: " + String(value));
            return false;
        }
        % endif
        % if isinstance(prop.type, model.EnumType) or isinstance(prop.type, model.ComplexType):
        if ( ! (is${prop.type.name}${'Array' if prop.isArray else ''}(attrib)) ) {
            console.log("[is${currentType.name}] '${prop.name}' has wrong type: " + String(value));
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
    if (value == null || value == undefined)
        return true;
    if (!utils.isArray(value)) {
        console.log("[is${currentType.name}Array] input is no array: " + value);
        return false;
    }
    for (let i=0; i < value.length; i++) {
        if (!is${currentType.name}(value[i])) {
            console.log("[is${currentType.name}Array] input is not of ${currentType.name} type: " + value[i]);
            return false;
        }
    }
    return true;
}

% endfor
