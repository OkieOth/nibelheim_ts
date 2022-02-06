#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

if ! docker-compose -p nibelheim_ts_mongo -f $scriptPos/../docker-compose/simple_mongo_stack.yaml up; then
    echo "error while start docker-compose stack"
    exit 1
fi
