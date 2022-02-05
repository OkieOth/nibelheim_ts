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
import * as types from 'types';
import * as dummy from '../src_generated/dummy_data';
import { assert } from 'chai';

% for currentType in modelTypes:
    % if not isinstance(currentType, model.EnumType):
it('serialize/deserialize ${currentType.name}', () => {
    const randomValue: types.${currentType.name} = dummy.random${currentType.name}();
    assert.isNotNull(randomValue, 'randomValue returns null');
    const serialized = JSON.stringify(randomValue);

    const deserialized: types.${currentType.name} = types.parse${currentType.name}(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomValue, deserialized);
});

it('serialize/deserialize arrays of ${currentType.name}', () => {
    const randomValue1: types.${currentType.name} = dummy.random${currentType.name}();
    assert.isNotNull(randomValue1, 'randomValue1 returns null');

    const randomValue2: types.${currentType.name} = dummy.random${currentType.name}();
    assert.isNotNull(randomValue2, 'randomValue2 returns null');

    const randomValue3: types.${currentType.name} = dummy.random${currentType.name}();    
    assert.isNotNull(randomValue3, 'randomValue3 returns null');

    const randomArray: types.${currentType.name}[] = [randomValue1, randomValue2, randomValue3];
    const serialized = JSON.stringify(randomArray);

    const deserialized: types.${currentType.name}[] = types.parse${currentType.name}Array(serialized);
    assert.isNotNull(deserialized);
    assert.deepEqual(randomArray, deserialized);

    const serialized2 = JSON.stringify(randomValue1);
    try {
        types.parse${currentType.name}Array(serialized2);
        assert.fail();
    }
    catch(e) {}

    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    try {
        types.parse${currentType.name}Array(serialized3);
        assert.fail();
    }
    catch(e) {}
});

    % endif
% endfor

