## Template to create factory functions that create random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper

    templateFile = 'type_factories_tests.mako'
    templateVersion = '0.1.0'

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/
import * as types from '../src_generated/types';
import * as factory from '../src_generated/types_factories';
import { assert } from 'chai';

describe('Test of type factories and their helper funcs', () => {
% for currentType in modelTypes:
    it('test is${currentType.name}', () => {
        assert.isFalse(factory.is${currentType.name}("x"));
    });

    it('test is${currentType.name}Array', () => {
        assert.isFalse(factory.is${currentType.name}Array("x"));
        assert.isFalse(factory.is${currentType.name}Array(["x"]));
    });

% endfor
});

