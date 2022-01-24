# TL/DR;

* Test project to play around with typescript and mono repos
* Challenge the power of yacg
* Beside playing with codeGen has this project no purpose or deeper sense

```bash
# kick off after a fresh clone
git clone git@github.com:OkieOth/nibelheim_ts.git
npx lerna bootstrap --hoist
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

# run all tests with coverage
node_modules/.bin/nyc npx lerna run test

# run build for one package
cd packages/types
npm run tsc

# run tests for one package
cd packages/types
npm run test
```

# CodeGen
* The use codeGen template are in [`./codeGen/*.mako`](codeGen)
* The configuration for the whole codeGen project is in [`./codeGen/config/generateAll.json`](codeGen/config/generateAll.json)
* To run the codeGen execute `./bin/generateAll.sh`
* To run only specific tasks run specify the tasks switch of yacg (available from v3.3.0)

```bash
# run only the 'types' task from the codeGen config
./bin/generateAll.sh --tasks types

# run the 'types' and 'types_puml' tasks from the codeGen config
./bin/generateAll.sh --tasks types types_puml
```

## Available Tasks

| Name                | Description                                         |
| ------------------- | --------------------------------------------------- |
| types_puml          | generate PlantUml file from the used mode           |
| types               | generate interfaces from the model                  |
| types_factory       | generate functions to create instances of the types |
| types_factory_tests | generate tests for type factories                   |
| types_random        | generate functions to create random data            |
| types_random_tests  | generate tests for the random data functions        |
