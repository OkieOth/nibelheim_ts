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

    types.parse${currentType.name}(serialized)
        .then((deserialized: types.${currentType.name}) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomValue, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });
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

    types.parse${currentType.name}Array(serialized)
        .then((deserialized: types.${currentType.name}[]) => {
            assert.isNotNull(deserialized);
            assert.deepEqual(randomArray, deserialized);
        })
        .catch((error) => {
            assert.fail(error)
        });


    const serialized2 = JSON.stringify(randomValue1);
    types.parse${currentType.name}Array(serialized2)
        .then((deserialized: types.${currentType.name}[]) => {
            assert.fail("parse${currentType.name}Array (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parse${currentType.name}Array detect none array")
        });


    const serialized3 = JSON.stringify([randomValue1, randomValue2, "xxx", randomValue3]);
    types.parse${currentType.name}Array(serialized3)
        .then((deserialized: types.${currentType.name}[]) => {
            assert.fail("parse${currentType.name}Array (1) didn't raise an error")
        })
        .catch((error) => {
            console.log("parse${currentType.name}Array detect array with wrong elements")
        });
});

    % endif
% endfor

