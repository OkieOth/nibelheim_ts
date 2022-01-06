## Template to create factory functions that create faker based random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
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
    % if modelFuncs.isEnumType(currentType):
        // test that the enum is generated with different values
        const x2 = dummy.fake${currentType.name}();
        assert.isNotNull(x2, 'fake${currentType.name} returns null');
        const x3 = dummy.fake${currentType.name}();
        assert.isNotNull(x3, 'fake${currentType.name} returns null');
        const x4 = dummy.fake${currentType.name}();
        assert.isNotNull(x4, 'fake${currentType.name} returns null');
        const x5 = dummy.fake${currentType.name}();
        assert.isNotNull(x5, 'fake${currentType.name} returns null');
        const valuesAreEqual = (x === x2) && (x2 === x3) && (x3 === x4) && (x4 === x5);
        assert.isNotTrue(valuesAreEqual, 'fakeMineSpotMaterial creates constant values')
    % endif
    });

% endfor
});
