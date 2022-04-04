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

    def getPropFilterOp(prop):
        if isinstance(prop, model.UuidType):
            return 'UuidFilterOperator'
        elif isinstance(prop, model.StringType):
            return 'StringFilterOperator'
        elif isinstance(prop, model.EnumType):
            return 'EnumFilterOperator'
        elif isinstance(prop, model.IntegerType) or isinstance(prop, model.NumberType) or isinstance(prop, model.DateType) or isinstance(prop, model.DateTimeType):
            return 'NumericFilterOperator'
        elif isinstance(prop, model.BooleanType):
            return 'BooleanFilterOperator'
        else:
            return '!!!UNSUPPORTED_FILTER_TYPE!!!'

    def printArrayIfNotBool(prop):
        return '' if isinstance(prop.type, model.BooleanType) else '[]'

    def getFilterAttribName(prop):
        if isinstance(prop, model.UuidType):
            return 'uuidFilter'
        elif isinstance(prop, model.StringType):
            return 'strFilter'
        elif isinstance(prop, model.EnumType):
            return 'enumFilter'
        elif isinstance(prop, model.IntegerType) or isinstance(prop, model.NumberType):
            return 'numFilter'
        elif isinstance(prop, model.DateType) or isinstance(prop, model.DateTimeType):
            return 'dateFilter'
        elif isinstance(prop, model.BooleanType):
            return 'boolFilter'
        else:
            return '!!!UNSUPPORTED_FILTER_TYPE!!!'

    def convertFunctionByType(type):
        if type is None:
            return '!!!UNSUPPORTED_FILTER_TYPE!!!'
        elif isinstance(type, model.IntegerType):
            return 'convertNumValue'
        elif isinstance(type, model.NumberType):
            return 'convertNumValue'
        elif isinstance(type, model.BooleanType):
            return 'convertBooleanValue'
        elif isinstance(type, model.StringType):
            return 'convertStrValue'
        elif isinstance(type, model.UuidType):
            # instead of the original type definition, here is only string used
            return 'convertUUIDValue'
        elif isinstance(type, model.EnumType):
            return 'convertEnumValue'
        elif isinstance(type, model.DateTimeType):
            return 'convertDateValue'
        elif isinstance(type, model.DateType):
            return 'convertDateValue'
        else:
            return "!!!UNSUPPORTED_FILTER_TYPE '{}'!!!".format(type)


%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides helper types to filter database collections. All types that are
    tagged with 'mongodb' are included. For filter are properties with a 'x-tag' 'daoFilter'
    included.
*/
import * as filter from "filter";
import * as filterExt from "../src/filter_types_ext"


% for currentType in mongoTypes:
    % if modelFuncs.hasPropertyWithTag("daoFilter", currentType):
        % for prop in modelFuncs.getPropertiesThatHasTag("daoFilter", currentType):
export function create${currentType.name}Filter${stringUtils.toUpperCamelCase(prop.name)}(op: filter.${getPropFilterOp(prop)}, v: ${getPropTypeStr(prop)}${printArrayIfNotBool(prop)}): filterExt.DaoFieldFilter {
    return {
        field: "${prop.name}",
        ${getFilterAttribName(prop)}: {
            operator: op,
            value${'' if isinstance(prop.type, model.BooleanType) else 's'}: v
        },
        convertValue: filterExt.${convertFunctionByType(prop.type)}
    };
}

        % endfor
   % endif
% endfor