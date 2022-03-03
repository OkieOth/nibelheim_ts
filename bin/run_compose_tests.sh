#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

if docker-compose -p nibelheim_ts_test -f $scriptPos/../docker-compose/test.yaml up --no-deps --build --exit-code-from nibelheim
then
    echo 'everything fine :)'
else
    echo 'something went wrong :-('
    exit 1

fi
