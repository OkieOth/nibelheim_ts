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


    def getPropTypeStr(propType):
        typeStr = typescriptFuncs.printTypescriptType(propType, False)
        if typeStr == 'string | any':
            typeStr = 'string' # handling of UUID types
        return typeStr

    def getPropFilterOp(propType):
        if isinstance(propType, model.UuidType):
            return 'UuidFilterOperator'
        elif isinstance(propType, model.StringType):
            return 'StringFilterOperator'
        elif isinstance(propType, model.EnumType):
            return 'EnumFilterOperator'
        elif isinstance(propType, model.IntegerType) or isinstance(prop.type, model.NumberType) or isinstance(prop.type, model.DateType) or isinstance(prop.type, model.DateTimeType):
            return 'NumericFilterOperator'
        elif isinstance(propType, model.BooleanType):
            return 'BooleanFilterOperator'
        else:
            return '!!!UNSUPPORTED_FILTER_TYPE!!!'

    def printArrayIfNotBool(propType):
        return '' if isinstance(propType, model.BooleanType) else '[]'

    def getFilterAttribName(propType):
        if isinstance(propType, model.UuidType):
            return 'uuidFilter'
        elif isinstance(propType, model.StringType):
            return 'strFilter'
        elif isinstance(propType, model.EnumType):
            return 'enumFilter'
        elif isinstance(propType, model.IntegerType) or isinstance(propType, model.NumberType):
            return 'numFilter'
        elif isinstance(propType, model.DateType) or isinstance(propType, model.DateTimeType):
            return 'dateFilter'
        elif isinstance(propType, model.BooleanType):
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


    def getDeepPropertiesThatHasTag(tagName, type, alreadyFound = [], currentPropChain = None):
        for property in type.properties:
            if isinstance(property.type, model.ComplexType):
                name = "{}.{}".format(currentPropChain,property.name) if currentPropChain is not None else property.name
                __traversDeepForTag(tagName, property.type, alreadyFound, name)
            elif hasTag(tagName, property):
                name = "{}.{}".format(currentPropChain,property.name) if currentPropChain is not None else property.name
                alreadyFound.append((name, property.type))
        return alreadyFound

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
        % for prop in getDeepPropertiesThatHasTag("daoFilter", currentType):
export function create${currentType.name}Filter${stringUtils.toUpperCamelCase(nameTypeTupel[0])}(op: filter.${getPropFilterOp(nameTypeTupel[1])}, v: ${getPropTypeStr(nameTypeTupel[1])}${printArrayIfNotBool(nameTypeTupel[1])}): filterExt.DaoFieldFilter {
    return {
        field: "${nameTypeTupel[0]}",
        ${getFilterAttribName(nameTypeTupel[1])}: {
            operator: op,
            value${'' if isinstance(nameTypeTupel[1], model.BooleanType) else 's'}: v
        },
        convertValue: filterExt.${convertFunctionByType(nameTypeTupel[1])}
    };
}

        % endfor
   % endif
% endfor