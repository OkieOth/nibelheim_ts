## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper
    import yacg.util.stringUtils as stringUtils

    templateFile = 'dao_uuid.mako'
    templateVersion = '0.1.0'

    typesWithUuids = []
    for t in modelTypes:
        if modelFuncs.doesTypeOrAttribContainsType(t, model.UuidType):
            typesWithUuids.append(t)

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides functions to convert uuid fields into mongo compatible
    BSON UUIDs.
*/
import * as types from 'types';
import * as uuid from "uuid-mongodb";
import {logger} from "logger";

% for currentType in typesWithUuids:
export function ${stringUtils.toLowerCamelCase(currentType.name)}2Dao(x: types.${currentType.name}) {
    try {
    % for prop in currentType.properties:
        % if isinstance(prop.type, model.UuidType):
            % if prop.isArray:
        // TODO - handle array
            % else:
        if (x.${prop.name} && (typeof x.${prop.name} === "string")) {
            x.${prop.name} = uuid.from(x.${prop.name});
        }
            % endif
        % endif
    % endfor
    }
    catch(e) {
        logger.error(e, "${stringUtils.toLowerCamelCase(currentType.name)}2Dao");
        throw new Error(e);
    }
}

export function dao2${currentType.name} (dao: any) {
    try {
        if (dao.id) {
            dao.id = uuid.from(dao.id).toString();
        }
    }
    catch(e) {
        logger.error(e,"dao2${currentType.name}");
        throw new Error(e);
    }
}

% endfor
