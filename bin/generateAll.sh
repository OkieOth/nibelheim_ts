#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

echo "generate PUML of models ..."
if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/docs:/docs \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates plantUml=/docs/generated/nibelheim.puml; then
    echo "error while generating from model"
    exit 1
fi

echo "generate type interfaces from model ..."
if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/packages/types/src_generated:/output \
    -v `pwd`/codeGen:/templates \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates /templates/ts_types.mako=/output/types.ts; then
    echo "error while generating from model"
    exit 1
fi

echo "generate factory functions to create dummy data ..."
if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/packages/types_faker/src_generated:/output \
    -v `pwd`/codeGen:/templates \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates /templates/faker_instances.mako=/output/dummy_data.ts; then
    echo "error while generating functions for dummy data creation"
    exit 1
fi

echo "generate tests for factory functions to create dummy data ..."
if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/packages/types_faker/__tests_generated__:/output \
    -v `pwd`/codeGen:/templates \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates /templates/faker_instances_tests.mako=/output/dummy_data_test.ts; then
    echo "error while generating tests for dummy data creation"
    exit 1
fi
