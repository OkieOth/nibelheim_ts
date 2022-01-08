#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

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

echo "generate type factories from model ..."
if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/packages/types/src_generated:/output \
    -v `pwd`/codeGen:/templates \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates /templates/types_factories.mako=/output/types_factories.ts; then
    echo "error while generating from model"
    exit 1
fi
