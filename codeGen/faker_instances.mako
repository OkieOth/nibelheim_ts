## Template to create factory functions that create faker based random data
<%
    import yacg.model.model as model
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


% for currentType in modelTypes:
export function fake${currentType.name}(): types.${currentType.name} {
    return null;
}

% endfor
