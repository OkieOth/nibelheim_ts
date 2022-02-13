#!/bin/bash

scriptPos=${0%/*}

cd $scriptPos/..

docker build -t nibelheim_ts_tests -f Dockerfile_tests .