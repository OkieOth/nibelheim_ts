## Template to create factory functions that create faker based random data
<%
    import yacg.model.model as model
    import yacg.templateHelper as templateHelper

    templateFile = 'faker_instances_tests.mako'
    templateVersion = '0.1.0'

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/
import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';


describe('Dummy data creation test suite', () => {
% for currentType in modelTypes:
    it('test ${currentType.name}', () => {
        const x = dummy.fake${currentType.name}();
        assert.isNotNull(x, 'fake${currentType.name} returns null');
    });

% endfor
});
