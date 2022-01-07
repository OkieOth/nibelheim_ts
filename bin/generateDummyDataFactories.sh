#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

echo "generate factory functions to create dummy data ..."
if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/packages/types_random/src_generated:/output \
    -v `pwd`/codeGen:/templates \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates /templates/random_instances.mako=/output/dummy_data.ts; then
    echo "error while generating functions for dummy data creation"
    exit 1
fi
