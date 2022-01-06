## Template to create factory functions that create faker based random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper

    templateFile = 'faker_instances.mako'
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
import * as types from 'types';

function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum);
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return anEnum[randomEnumValue];
}

% for currentType in modelTypes:
    % if modelFuncs.isEnumType(currentType):
export function fake${currentType.name}(): types.${currentType.name} {
    return randomEnum(types.${currentType.name});
}
    % else:
export function fake${currentType.name}(randomizeOptionalAttribs = false): types.${currentType.name} {
    const ret: types.${currentType.name} = {
        // TODO
    }
    return ret;
}
    % endif

% endfor
