#!/bin/bash

# helper script to prepare a lerna package. It creates
# needed directories and modifies package json

scriptPos=${0%/*}

if [ "$#" -lt 1 ]; then
    echo "need path to the directory that should be prepared as parameter, cancel"
    exit 1
fi

dirToPrepare=$1

if ! [ -d "$dirToPrepare" ]; then
    echo "given directory '$dirToPrepare' does not exist, cancel"
    exit 1
fi

function createDirIfNeeded() {
    dirToHandle=$1
    if ! [ -d "$dirToHandle" ]; then
        if ! mkdir -p "$dirToHandle"; then
            echo "error while creating dir '$dirToHandle', cancel"
            exit 1
        else
            echo "dir created: '$dirToHandle'"
        fi
    fi
}

createDirIfNeeded "$dirToPrepare/src_generated"
if [ -z "$(ls -A $dirToPrepare/src_generated)" ]; then
    touch $dirToPrepare/src_generated/.gitkeep
    echo "created: '$dirToPrepare/src_generated/.gitkeep'"
fi
createDirIfNeeded "$dirToPrepare/src"
if ! [ -f $dirToPrepare/src/index.ts ]; then
    echo "export * from \"../src_generated/PLEASE_CHANGE\"" > $dirToPrepare/src/index.ts
    echo "created: '$dirToPrepare/src/index.ts'"
fi
createDirIfNeeded "$dirToPrepare/__tests_generated__"
if [ -z "$(ls -A $dirToPrepare/__tests_generated__)" ]; then
    touch $dirToPrepare/__tests_generated__/.gitkeep
    echo "created: '$dirToPrepare/__tests_generated__/.gitkeep'"
fi

if ! [ -f "$dirToPrepare/tsconfig.json" ]; then
    if ! [ -f $dirToPrepare/../dao/tsconfig.json ]; then
        echo "can't find tsconfig.json in the expected dir: '$dirToPrepare/../dao/tsconfig.json'"
        exit 1
    fi
    if ! cp $dirToPrepare/../dao/tsconfig.json $dirToPrepare; then
        echo "error while copy tsconfig, cancel: $dirToPrepare/../dao/tsconfig.json -> $dirToPrepare"
        exit 1
    else
        echo "copied tsconfig: $dirToPrepare/../dao/tsconfig.json -> $dirToPrepare/tsconfig.json"
    fi
fi

# prepare package.json
packageJson=$dirToPrepare/package.json
if ! [ -f $packageJson ]; then
    echo "can't find package.json: '$packageJson', cancel"
fi
if ! cat $packageJson | grep "__tests__ __tests_generated__"; then
    cat $packageJson | jq '.directories.test="__tests__ __tests_generated__"' > $packageJson.tmp
    mv $packageJson.tmp $packageJson
fi

if ! cat $packageJson | grep "lib/src/index.js"; then
    cat $packageJson | jq '.main="lib/src/index.js"' > $packageJson.tmp
    mv $packageJson.tmp $packageJson
fi

if ! cat $packageJson | grep '"tsc"'; then
    cat packages/filter/package.json | jq '.scripts.tsc="tsc"'
fi

if ! cat $packageJson | grep 'mocha -r ts-node/register'; then
    cat packages/filter/package.json | jq ".scripts.tsc=\"env TS_NODE_COMPILER_OPTIONS='{\\\"module\\\": \\\"commonjs\\\" }' mocha -r ts-node/register '__tests*__/**/*.ts'\""
fi

rm -rf "$dirToPrepare/lib/*"

