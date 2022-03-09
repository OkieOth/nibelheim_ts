# TL/DR;

* Test project to play around with typescript and mono repos
* Challenge the power of yacg
* Beside playing with codeGen has this project no purpose or deeper sense

```bash
# kick off after a fresh clone
git clone git@github.com:OkieOth/nibelheim_ts.git

# this doesn't work because dependency issues of uuid-mongodb
# npx lerna bootstrap --hoist

# use instead this ...
npx lerna bootstrap
npm install --legacy-peer-deps
```

## Requirements
* npm 7.5.2
* docker
* bash

(The project is developed and tested under Ubuntu 20.04)


# Setup Lerna
```bash
npx lerna init
npm install typescript @types/node --save-dev

# create types package
./node_modules/.bin/lerna create types

# create a global tsconfig.json in the root folder

# create a inherited tsconfig in packages/types

# install testing dev dependencies on root level
npm install --save-dev ts-node mocha @testdeck/mocha @types/mocha nyc chai ts-mockito

# examples to add dependencies to other packages
./node_modules/.bin/lerna add types --scope=types_random
```

# Usage
```bash
# build the projects
npx lerna run tsc

# run all tests
npx lerna run test

# bump versions for all packages
npx lerna version "1.0.0-rc.1"

# run all tests with coverage
node_modules/.bin/nyc npx lerna run test

# run build for one package
cd packages/types
npm run tsc

# run tests for one package
cd packages/types
npm run test

# run docker-compose based tests
./bin/run_compose_tests.sh
```

# CodeGen
**Attention**, the codegen is using the latest version of `ghcr.io/okieoth/yacg`.
If you run into complile issues the you have maybe to old latest version on your
machine. There are small but breaking changes from v3.* to v4.*.
Pull the new latest version (currently 4.0.0) and the problems should be gone.

* The use codeGen template are in [`./codeGen/*.mako`](codeGen)
* The configuration for the whole codeGen project is in [`./codeGen/config/generateAll.json`](codeGen/config/generateAll.json)
* To run the codeGen execute `./bin/generateAll.sh`
* To run only specific tasks run specify the tasks switch of yacg (available from v3.3.0)

```bash
# run only the 'types' task from the codeGen config
./bin/generateAll.sh --tasks types

# run the 'types' and 'types_puml' tasks from the codeGen config
./bin/generateAll.sh --tasks types types_puml

# delete all generated files from the repo
npm run clean

# generate all code
npm run codeGen

# count the lines of contained template code
npm run countTemplateLines

# count the lines of generated code
npm run countGeneratedLines
```

[More information are here ...](docs/codegen.md)

## Available Tasks

| Name                 | Description                                            |
| -------------------- | ------------------------------------------------------ |
| types_puml           | generate PlantUml file from the used mode              |
| types                | generate interfaces from the model                     |
| type_equal           | functions to test equality of objects                  |
| type_factories       | generate functions to create instances of the types    |
| type_factories_tests | generate tests for type factories                      |
| type_quards          | generate functions to validate types                   |
| type_guards_tests    | generate tests for type validation                     |
| types_random         | generate functions to create random data               |
| types_random_tests   | generate tests for the random data functions           |
| dao_uuid             | generates the functions to convert uuids               |
| dao_uuid_tests       | generates the tests for the functions to convert uuids |
| dao_insert           | generates the functions to insert data into mongodb    |
| dao_delete           | generates the functions to delete data from mongodb    |
| dao_delete_tests     | generates the tests for the mongo delete functions     |
| dao_update           | generates the functions to update data in mongodb      |
| dao_update_tests     | generates the tests for the mongo update functions     |
| dao_find             | generates the functions to query data from  mongodb    |
| dao_find_tests       | generates the tests for the mongo find functions       |
