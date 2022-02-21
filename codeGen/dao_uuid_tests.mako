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

import { assert } from 'chai';
import * as dummy from "types_random";
import * as types from "types";
import * as dao_uuid from "../src_generated/dao_uuid";
import {indexGenerator} from "../__tests__/helper/helper";

const randomObjectCount = 3;

% for currentType in typesWithUuids:
const check${currentType.name}Attribs = (x, isType) => {
    if (types.is${currentType.name}(x) != isType) {
        assert.fail("random elem isn't of type ${currentType.name}");
    }
    % for prop in currentType.properties:
        % if isinstance(prop.type, model.UuidType):
            % if prop.isArray:
    if (x.${prop.name}) {
        x.${prop.name}.forEach(elem => {
            if ((typeof elem !== "string") == isType) {
                assert.fail(`x.${prop.name} === 'string': $${}{isType}`);
            }
        });
    }
            % else:
    if ((typeof x.${prop.name} !== "string") == isType) {
        assert.fail(`x.id === 'string': $${}{isType}`);
    }
            % endif
        % else:
            % if isinstance(prop.type, model.ComplexType) and modelFuncs.doesTypeOrAttribContainsType(prop.type, model.UuidType):
                % if prop.isArray:
    // TODO check complex attrib array
                % else:
    // TODO check complex attrib
                % endif
            % endif
        % endif
    % endfor
};

% endfor

describe('test uuid convert', () => {
% for currentType in typesWithUuids:
    it('${currentType.name}', () => {
        try {
            for (const num of indexGenerator(randomObjectCount)) {
                const x: types.${currentType.name} = dummy.random${currentType.name}();
                check${currentType.name}Attribs(x, true);
                dao_uuid.${stringUtils.toLowerCamelCase(currentType.name)}2Dao(x);
                check${currentType.name}Attribs(x, false);
                dao_uuid.dao2${currentType.name}(x);
                check${currentType.name}Attribs(x, true);
            }
        }
        catch (e) {
            assert.fail(e);
        }
    });

% endfor
});
