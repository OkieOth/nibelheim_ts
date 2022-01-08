## Template to create factory functions that create random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper

    templateFile = 'random_instances_tests.mako'
    templateVersion = '0.1.0'

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/
import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';


describe('Dummy data creation with random optional attributes', () => {
% for currentType in modelTypes:
    it('test ${currentType.name}', () => {
        const x: types.${currentType.name} = dummy.random${currentType.name}();
        assert.isNotNull(x, 'random${currentType.name} returns null');
    });

% endfor
});

describe('Dummy data for enums create different values', () => {
% for currentType in modelTypes:
    % if modelFuncs.isEnumType(currentType):
    it('random enum test ${currentType.name}', () => {
        const x: types.${currentType.name} = dummy.random${currentType.name}();
        assert.isNotNull(x, 'random${currentType.name} returns null');
        // test that the enum is generated with different values
        const x2: types.${currentType.name} = dummy.random${currentType.name}();
        assert.isNotNull(x2, 'random${currentType.name} returns null');
        const x3: types.${currentType.name} = dummy.random${currentType.name}();
        assert.isNotNull(x3, 'random${currentType.name} returns null');
        const x4: types.${currentType.name} = dummy.random${currentType.name}();
        assert.isNotNull(x4, 'random${currentType.name} returns null');
        const x5: types.${currentType.name} = dummy.random${currentType.name}();
        assert.isNotNull(x5, 'random${currentType.name} returns null');
        const valuesAreEqual = (x === x2) && (x2 === x3) && (x3 === x4) && (x4 === x5);
        assert.isNotTrue(valuesAreEqual, 'randomMineSpotMaterial creates constant values')
    });
    % endif
% endfor
});

describe('Dummy data creation with randomized optional attributes', () => {
% for currentType in modelTypes:
    % if not modelFuncs.isEnumType(currentType):
    it('test type (2) ${currentType.name}', () => {
        const x: types.${currentType.name} = dummy.random${currentType.name}(true);
        assert.isNotNull(x, 'random${currentType.name} (2) returns null');
    });
    % endif
% endfor
});
