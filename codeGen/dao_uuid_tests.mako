## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper
    import yacg.util.stringUtils as stringUtils

    templateFile = 'dao_uuid_tests.mako'
    templateVersion = '0.1.0'

    typesWithUuids = []
    for t in modelTypes:
        if modelFuncs.doesTypeOrAttribContainsType(t, model.UuidType):
            typesWithUuids.append(t)

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides the tests for the functions to convert uuid fields into 
    mongo compatible BSON UUIDs.
*/
import * as dummy from "types_random";
import * as types from "types";
import * as dao_uuid from "../src_generated/dao_uuid";
import {errorPromise, indexGenerator} from "../__tests__/helper/helper";

describe('test uuid convert', async () => {
% for currentType in typesWithUuids:
    it('${currentType.name}', async () => {
        try {
            for await (const num of indexGenerator(10)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                if (!types.is${currentType.name}(x)) {
                    return errorPromise("random elem isn't of type ${currentType.name}");
                }
                // check uuid attribs - start
    % for prop in currentType.properties:
        % if isinstance(prop.type, model.UuidType):
            % if prop.isArray:
                if (x.${prop.name}) {
                    x.${prop.name}.forEach(elem => {
                        if (typeof elem !== "string") {
                            return errorPromise("x.${prop.name} elem should be 'string'");
                        }
                    });
                }
            % else:
                if (typeof x.${prop.name} !== "string") {
                    return errorPromise("x.${prop.name} should be 'string'");
                }
            % endif
        % else:
            % if isinstance(prop.type, model.ComplexType) and modelFuncs.doesTypeOrAttribContainsType(prop.type, model.UuidType):
                % if prop.isArray:
                // TODO check array complex attrib
                % else:
                // TODO check array complex attrib
                % endif
            % endif
        % endif
    % endfor
            }
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
        catch (e) {
            return errorPromise(e);
        }
    });

% endfor
});
