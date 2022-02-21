#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

docker-compose -p nibelheim_ts_test -f $scriptPos/../docker-compose/test.yaml down
