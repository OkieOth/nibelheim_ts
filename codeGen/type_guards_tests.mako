## Template to create factory functions that create random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper

    templateFile = 'type_factories_tests.mako'
    templateVersion = '0.1.0'

    packagePrefix = templateParameters.get('packagePrefix','')

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/
import * as guards from '../src_generated/${packagePrefix}type_guards';
import { assert } from 'chai';

describe('Test of type factories and their helper funcs', () => {
% for currentType in modelTypes:
    it('test guards.is${currentType.name}', () => {
        assert.isFalse(guards.is${currentType.name}("x"));
        assert.isTrue(guards.is${currentType.name}(null));
    });

    it('test guards.is${currentType.name}Array', () => {
        assert.isFalse(guards.is${currentType.name}Array("x"));
        assert.isFalse(guards.is${currentType.name}Array(["x"]));
        assert.isTrue(guards.is${currentType.name}Array(null));
        assert.isTrue(guards.is${currentType.name}Array([]));
    });

% endfor
});

