## Template to create TS type guards from the model types
<%
    import yacg.model.model as model
    import yacg.templateHelper as templateHelper
    import yacg.model.modelFuncs as modelFuncs

    templateFile = 'type_equal.mako'
    templateVersion = '0.1.0'

    def getCompareFunc(prop):
        if isinstance(prop.type, model.DateType) or isinstance(prop.type, model.DateTimeType):
            return '.getTime()'
        else:
            return ''
%>/**
    This file is generated.
    It contains functions to test if two objects are equal. The functions are
    needed because _.isEqual and the stringify approach fail with additional
    attributes.

    Template: ${templateFile} v${templateVersion})
*/
import * as types from "./types";
import * as type_guards from "./type_guards";
import * as utils from "../src/factory_utils";
import {logger} from "logger";

% for currentType in modelTypes:
    % if not isinstance(currentType, model.EnumType):
export function isEqual${currentType.name}(obj1: types.${currentType.name}, obj2: types.${currentType.name}): boolean {
    const caller = "isEqual${currentType.name}";

    if (obj1 == null && obj2 != null) return false;
    if (obj1 != null && obj2 == null) return false;
    if (obj1 == null && obj2 == null) return true;
    if (!type_guards.is${currentType.name}(obj1)) {
        logger.error("obj1 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj1), caller)
        return false;
    }
    if (!type_guards.is${currentType.name}(obj2)) {
        logger.error("obj2 has wrong type", caller)
        logger.debug(() => JSON.stringify(obj2), caller)
        return false;
    }
        % for prop in currentType.properties:
            ## check that all required attributes are there
    if (obj1.${prop.name}) {
            % if prop.isArray:
        if (!obj2.${prop.name}) return false;
        if (obj1.${prop.name}.length != obj2.${prop.name}.length) return false;
        for (let i=0; i < obj1.${prop.name}.length; i++) {
                % if modelFuncs.isBaseType(prop.type) or isinstance(prop.type, model.EnumType):
            if (obj1.${prop.name}[i]${getCompareFunc(prop)} !== obj2.${prop.name}[i]${getCompareFunc(prop)}) return false;
                % elif isinstance(prop.type, model.DictionaryType):
            if (_.isEqual(obj1.${prop.name}, obj2.${prop.name})) return false;
                % elif isinstance(prop.type, model.ComplexType):
            if (!isEqual${prop.type.name}(obj1.${prop.name}[i], obj2.${prop.name}[i])) return false;
                % else:
            // TODO can't generate code to compare '${prop.name}' -> unknown type '${type(prop.type)}'
                % endif
        }
            % else:
                % if modelFuncs.isBaseType(prop.type) or isinstance(prop.type, model.EnumType):
        if (obj1.${prop.name}${getCompareFunc(prop)} !== obj2.${prop.name}${getCompareFunc(prop)}) return false;
                % elif isinstance(prop.type, model.DictionaryType):
        if (_.isEqual(obj1.${prop.name}, obj2.${prop.name})) return false;
                % elif isinstance(prop.type, model.ComplexType):
        if (!isEqual${prop.type.name}(obj1.${prop.name}, obj2.${prop.name})) return false;
                % else:
        // TODO can't generate code to compare attrib '${prop.name}' -> unknown type '${type(prop.type)}'
                % endif
            % endif
    }
    else {
        if (!obj2.${prop.name}) return true;
        return false;
    }
    % endfor
    return true;
}
    % endif

% endfor
