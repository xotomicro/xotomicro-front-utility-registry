### REGISTRIES - MICRO SERVICE

1. log in with the registry and add:

```shell
# username: github's username
# password: a token generated there : https://github.com/settings/tokens
npm login --registry=https://npm.pkg.github.com --scope=@xotomicro
```

2. add these on the package.json of the packages you wish to publish

```json
{
    // add repository
    "repository": "https://github.com/xotomicro/xotomicro",
    // add this to your package.json to isolate what files will be published
    "files": ["dist/**/*"],
    "publishConfig": {
        // registrys destination
        "registry": "https://npm.pkg.github.com/@xotomicro-design",
        // the state of the repository
        "access": "public"
    }
}
```

3. make sure that "private" is false

```json
{
    "private": false
}
```
