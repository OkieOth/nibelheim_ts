# TL/DR;

* Test project to play around with typescript and mono repos
* Challenge the power of yacg

# Setup Lerna
```bash
npx lerna init
install typescript @types/node -save-dev

# create types package
./node_modules/.bin/lerna create types

# create a global tsconfig.json in the root folder

# create a inherited tsconfig in packages/types


```