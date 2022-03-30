## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.generators.helper.typescriptFuncs as typescriptFuncs
    import yacg.util.stringUtils as stringUtils
    import yacg.templateHelper as templateHelper

    templateFile = 'dao_find_types.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])


    def getPropTypeStr(prop):
        typeStr = typescriptFuncs.printTypescriptType(prop.type, False)
        if typeStr == 'string | any':
            typeStr = 'string' # handling of UUID types
        return typeStr

    def getOperatorForTypeStr(typeStr):
        if (typeStr == 'string'):
            return 'StringFilterOperator'
        elif (typeStr == 'number') or (typeStr == 'Date'):
            return 'NumericFilterOperator'
        elif typeStr == 'boolean':
            return 'BooleanFilterOperator'
        else:
            return '!!!UNSUPPORTED_FILTER_TYPE!!!'

    def getPropFilterOp(prop):
        typeStr = getPropTypeStr(prop)
        return getOperatorForTypeStr(typeStr)

    def printArrayIfNotBool(prop):
        return '' if isinstance(prop.type, model.BooleanType) else '[]'

    def getFilterAttribName(prop):
        typeStr = getPropTypeStr(prop)
        if (typeStr == 'string'):
            return 'strFilter'
        elif (typeStr == 'number'):
            return 'numFilter'
        elif (typeStr == 'Date'):
            return 'dateFilter'
        elif typeStr == 'boolean':
            return 'boolFilter'
        else:
            return '!!!UNSUPPORTED_FILTER_TYPE!!!'

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides helper types to filter database collections. All types that are
    tagged with 'mongodb' are included. For filter are properties with a 'x-tag' 'daoFilter'
    included.
*/
import * as filter from "filter";


% for currentType in mongoTypes:
    % if modelFuncs.hasPropertyWithTag("daoFilter", currentType):
        % for prop in modelFuncs.getPropertiesThatHasTag("daoFilter", currentType):
export function create${currentType.name}Filter${stringUtils.toUpperCamelCase(prop.name)}(op: filter.${getPropFilterOp(prop)}, v: ${getPropTypeStr(prop)}${printArrayIfNotBool(prop)}): filter.FieldFilter {
    return {
        field: "${prop.name}",
        ${getFilterAttribName(prop)}: {
            operator: op,
            value${'' if isinstance(prop.type, model.BooleanType) else 's'}: v
        }
    };
}

        % endfor
   % endif
% endfor