## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper

    templateFile = 'random_instances.mako'
    templateVersion = '0.1.0'

    def getRandomFactoryFunc(prop):
        type = prop.type
        if type is None:
            return '<<prop.type is None>>'
        elif isinstance(type, model.IntegerType):
            return 'chance.integer()'
        elif isinstance(type, model.ObjectType):
            return 'null'
        elif isinstance(type, model.NumberType):
            return 'chance.floating()'
        elif isinstance(type, model.BooleanType):
            return 'chance.bool()'
        elif isinstance(type, model.StringType):
            return 'chance.string()'
        elif isinstance(type, model.UuidType):
            return 'chance.guid()'
        elif isinstance(type, model.EnumType):
            return "randomEnum({type})".format(type=type.name)
        elif isinstance(type, model.DateTimeType):
            return 'chance.date()'
        elif isinstance(type, model.DateType):
            return 'randomDate()'
        elif isinstance(type, model.BytesType):
             return 'null'
        elif isinstance(type, model.DictionaryType):
            return "{}"
        elif isinstance(type, model.ComplexType):
            return "random{type}()".format(type=type.name)
        else:
            return "<<unknown prop.type: {type}>>".format(type=type.name)
%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/
import * as types from 'types';
import { Chance } from 'chance'
import { randomEnum } from '../src/randomFuncs';

% for currentType in modelTypes:
    % if modelFuncs.isEnumType(currentType):
export function random${currentType.name}(): types.${currentType.name} {
    return randomEnum(types.${currentType.name});
}
    % else:
export function random${currentType.name}(randomizeOptionalAttribs = false): types.${currentType.name} {
    const chance = new Chance();
    const ret: types.${currentType.name} = {
        % for prop in currentType.properties:
            % if prop.required:
        ${prop.name}: ${getRandomFactoryFunc(prop)},
            % endif
        % endfor
    }
    return ret;
}
    % endif

% endfor
