#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

if ! docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`:/project \
    --rm -t ghcr.io/okieoth/yacg \
    --config /project/codeGen/config/generateAll.json; then
    echo "error while generating tests for dummy data creation"
    exit 1
fi


#$scriptPos/generateDummyDataFactories.sh
#$scriptPos/generateDummyDataFactoriesTests.sh
