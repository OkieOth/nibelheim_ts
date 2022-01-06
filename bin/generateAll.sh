#!/bin/bash

scriptPos=${0%/*}

$scriptPos/generateDummyDataFactories.sh
$scriptPos/generateDummyDataFactoriesTests.sh
$scriptPos/generatePuml.sh
$scriptPos/generateTypes.sh

