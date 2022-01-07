#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

echo "generate tests for factory functions to create dummy data ..."
if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/packages/types_random/__tests_generated__:/output \
    -v `pwd`/codeGen:/templates \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates /templates/random_instances_tests.mako=/output/dummy_data_test.ts; then
    echo "error while generating tests for dummy data creation"
    exit 1
fi
