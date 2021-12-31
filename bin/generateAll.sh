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
    --singleFileTemplates /templates/ts_types.mako=/output/nibelheim_types.ts; then
    echo "error while generating from model"
    exit 1
fi
