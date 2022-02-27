# design

### Initialize repo
```
yarn install
```

### Serve this package indipendently (useful to test single ui components)
```
yarn serve
```

### Build library (so that it can be used in other packages)
```
yarn build
```

### Build library and watch for changes (so that it can be used in other packages)
```
yarn start
```

### This will let you install this library in your other packages as an alias folder in node_modules (it only works when you have access both to this library and to the microfrontend at the same time)
```
yarn sync:link
```

### Other infos
Right now I'm deploying "dist" folder too in order to be able to install this library from the other packages in remote without using gitlab registries