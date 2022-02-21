# dao
Generation of functions to serialize type objects in mongodb

Types are tagged (`x-tags`) in the model with 'mongodb' are serialized
in their own collections. The codegen provides the functions to store
and read them.

# Generation of the model documentation
```bash
docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/docs:/docs \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates plantUml=/docs/generated/nibelheim.puml
```

# Generation of the typescript interfaces
```bash
docker run -u $(id -u ${USER}):$(id -g ${USER}) \
    -v `pwd`/model:/model \
    -v `pwd`/codeGen:/templates \
    -v `pwd`/packages/types/generated:/out \
    --rm -t ghcr.io/okieoth/yacg \
    --models /model/nibelheim.json \
    --singleFileTemplates /templates/ts_types.mako=/out/nibelheim_types.ts
```
