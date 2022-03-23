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

    def getFilterTupels(typeObj):
        propTypes = {}
        for prop in typeObj.properties:
            if modelFuncs.hasTag("daoFilter", prop):
                typeStr = typescriptFuncs.printTypescriptType(prop.type, False)
                if typeStr == 'string | any':
                    typeStr = 'string' # handling of UUID types
                if prop.type not in propTypes.keys():
                    if (typeStr == 'string'):
                        propTypes[typeStr] = 'StringFilterOperator'
                    elif (typeStr == 'number') or (typeStr == 'Date'):
                        propTypes[typeStr] = 'NumericFilterOperator'
                    else:
                        propTypes[typeStr] = '!!!UNSUPPORTED_FILTER_TYPE!!!'
        return propTypes

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides helper types to filter database collections. All types that are
    tagged with 'mongodb' are included. For filter are properties with a 'x-tag' 'daoFilter'
    included.
*/
import {
    StringFilterOperator,
    NumericFilterOperator,
    FieldFilter,
    SortDirection,
    FieldSort} from "../src/mongo_helper";

% for currentType in mongoTypes:
    % if modelFuncs.hasPropertyWithTag("daoFilter", currentType):
    export type ${currentType.name}Filter =<%
        filterTupelDict = getFilterTupels(currentType)
        keyList = list(filterTupelDict.keys())
        lastKey = keyList[len(keyList)-1]
        %>
        % for fieldType in filterTupelDict.keys():
                    FieldFilter<${fieldType}, ${filterTupelDict[fieldType]}>${' |' if fieldType != lastKey else ';'}
        % endfor
   % endif

% endfor