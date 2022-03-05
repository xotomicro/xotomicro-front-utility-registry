<div align="center">
	<h1> Monorepo and Micro-Frontend Boilerplate 👋  </h1>
	<img  src="/documentation/frontend/example-monorepo.jpg" width="50%">
</div>
<br>

### 🏗️ ARCHITECTURE

<img src="/documentation/frontend/example-architecture.png" width="800">

### 🤷🏼‍♂️ SERVICES REQUIREMENT
micro-front ends can work as standalone and is only dependent of the ***hooksystem*** and the ***shellsystem*** service

- hooksystem
	- the system that encapsulates components and renders them on a specific section app/page. 
	
- shellsystem
	- the system that hosts all data passed by the ***global event distributor*** and shells all services independently

### 🎭 MONOREPO STRUCTURE
```sh
# git submodules
 git clone --recurse-submodules -j8 https://github.com/xotomicro/xotomicro-frontend.git > /dev/null # to import all micro services into the monorepo
```
### 🐳 COMMAND

```sh
# starting monorepo - yarn
npm i lerna -g # make sure you first have lerna as a global dependencie

yarn # installs 'lerna' and root deps
yarn boot # bootstraps packages and cleans all node_modules with lerna

# example : 
yarn start:user # if you want to run independent services -> (or yarn start:{service})

yarn start # if you want to run all services
``` 

```sh
# starting monorepo - docker
export GITHUB_TOKEN={GITHUB_TOKEN} # first set accessibility rules for your team and add your github token like so 
docker-compose up --build -d # deploy all services to docker
```

```sh
# lints and more
yarn lint:es # lint checks and fixes for all files
yarn lint:style # lint for styles for all files
yarn format:prettify # fixes format issues across all micro-front ends and keeps your team in sync with formatting issues
``` 

```sh
# tests
yarn test:all # test for all unit tests
yarn test:e2e # test for end to end cypress
yarn test:coverage # test for code coverage
```

### REGISTRIES - MONOREPO

1. lerna.json contains the global registry url
``` json
{
  "command": {
    "publish": {
      "ignoreChanges": ["ignored-file", "*.md"],
      "message": "chore(release): publish",
      "registry": "https://npm.pkg.github.com"
    }
  },
}
```

2. complete checklist for registry - design : 
- [DESIGN-REGISTRY](./registries/design/documentation/registries.md)

3. complete checklist for registry - utility : 
- [UTILITY-REGISTRY](./registries/utility/documentation/registries.md)

4. publish
```shell
# publish in the way you wish
yarn run publish # will patch and publish packages that have changed since the last release

```

### 📜 DOCUMENTATION KUBERNETES
-   [KUBERNETES](./kubernetes/README.md) : main readme for frontend kubernetes (local kubectl & minikube)

### 🌸 WEB APP DOCUMENTATION

1. WEB APPS
- [WEB-APP WEBAUTH](./packages/web/authweb/README.md) documentation/backend - authweb service
- [WEB-APP WEBEVENT](./packages/web/eventweb/README.md) documentation/backend - eventweb service
- [WEB-APP WEBORDER](./packages/web/orderweb/README.md) documentation/backend - orderweb service
- [WEB-APP WEBPRODUCT](./packages/web/productweb/README.md) documentation/backend - productweb service
- [WEB-APP WEBUSER](./packages/web/userweb/README.md) documentation/backend - userweb service

2. SYSTEM APPS
- [SYSTEM-APP hooksystem](./packages/system/hooksystem/README.md) documentation/backend - hooksystem service
- [SYSTEM-APP shellsystem](./packages/system/shellsystem/README.md) documentation/backend - shellsystem service

### 👤 AUTHOR

 **xotosphere organization**
-   Github: [@xotosphere](https://github.com/xotosphere)

### 📝 LICENSE

Copyright © 2021 [XOTOSPHERE](https://github.com/xotosphere).<br/>
This project is [ISC](https://github.com/xotomicro/xotomicro-frontend/blob/main/LICENSE) licensed.

### 🛳 PORTS
| ROOTSHELL | WEBEVENT | WEBORDER | WEBPRODUCT | WEBUSER | WEBAUTH | hooksystem |
| --------- | -------- | -------- | ---------- | ------- | ------- | ---------- |
| 7070      | 7071     | 7072     | 7073       | 7074    | 7075    | 7076       |

