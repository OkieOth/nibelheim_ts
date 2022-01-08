## Template to create TS interfaces from the model types
<%
    import yacg.model.model as model
    import yacg.templateHelper as templateHelper

    templateFile = 'types_factories.mako'
    templateVersion = '0.1.0'

    def printTypescriptType(type):
        if type is None:
            return 'unknown'
        elif isinstance(type, model.IntegerType):
            return 'number'
        elif isinstance(type, model.ObjectType):
            return 'Object'
        elif isinstance(type, model.NumberType):
            return 'number'
        elif isinstance(type, model.BooleanType):
            return 'boolean'
        elif isinstance(type, model.StringType):
            return 'string'
        elif isinstance(type, model.UuidType):
            return 'string'
        elif isinstance(type, model.EnumType):
            return "{type}".format(type=type.name)
        elif isinstance(type, model.DateTimeType):
            return 'Date'
        elif isinstance(type, model.DateType):
            return 'Date'
        elif isinstance(type, model.BytesType):
             return 'number[]'
        elif isinstance(type, model.DictionaryType):
            return "Map<String, {}>".format(printTypescriptType(type.valueType))
        elif isinstance(type, model.ComplexType):
            return "{type}".format(type=type.name)
        else:
            return type
%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/
import * as types from "./types";

% for currentType in modelTypes:
    % if isinstance(currentType, model.EnumType):
export function is${currentType.name}(value: any): value is types.${currentType.name} {
    if (value == null)
        return true;
    if (!(typeof value === 'string' || value instanceof String))
        return false;
        % for value in currentType.values:
    if (value  == "${value}")
        return true;
        % endfor
    return false;
}
    % else:
export function parse${currentType.name}(json: string): types.${currentType.name} {
    const parsedData = JSON.parse(json);
    if (is${currentType.name}(parsedData)) {
        return parsedData as types.${currentType.name};
    }
    else {
        console.log("input doesn't match expected ${currentType.name}: json");
        return null;
    }
}

export function is${currentType.name}(value: any): value is types.${currentType.name} {
    return true; // TODO
}
% endif

% endfor
