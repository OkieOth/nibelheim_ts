# TL/DR;

* Test project to play around with typescript and mono repos
* Challenge the power of yacg

```bash
# kick off after a fresh clone
git clone git@github.com:OkieOth/nibelheim_ts.git
npx lerna bootstrap --hoist
```

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
npm install --save-dev faker @types/faker
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