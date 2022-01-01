# TL/DR;

* Test project to play around with typescript and mono repos
* Challenge the power of yacg

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
```

# Usage
```bash
# build the projects
npx lerna run tsc

# run all tests
npx lerna run test

# run build for one package
cd packages/types
npm run tsc

# run tests for one package
cd packages/types
npm run test
```