<div align="center">
	<h1> Monorepo and Micro-Frontends 👋  </h1>
	<img  src="./fontend/documentation/example-monorepo.jpg" width="50%">
</div>
<br>

### 🎭 INFORMATION
- micro-front ends can work as standalone and only be dependent of hooksystem and shellsystem services
- micro-front ends can be composed with the help of docker and lerna via the commands below

- root packages : packages needed to run the any other webapps from packages/web
### 🏗️ ARCHITECTURE

<img src="./fontend/documentation/example-architecture.png" width="800">

### 🐳 COMMAND

```sh
# YARN
yarn # install 'lerna' and root deps
yarn boot # bootstrap packages and clean all node_modules with lerna

yarn start:user # if you want to run independent services -> (or yarn start:{service})
yarn start # if you want to run all services
``` 

```sh
# DOCKER ALL IN ONE
docker-compose up --build -d && open http://${process.env.SERVICE_URL}:7070/ # deploy all to docker
``` 

```sh
# STYLE COMMANDS
yarn lint:es # lint checks all files
yarn lint:style # lint for styles
yarn format:prettify # fixes format issues across all micro-front ends 
``` 

```sh
# TEST COMMANDS
yarn test:all # test for all unit tests
yarn test:e2e # test for end to end cypress
yarn test:coverage # test for code coverage
```

### 📜 DOCUMENTATION
-   [KUBERNETES](./kubernetes/README.md) : main readme for frontend kubernetes (local kubectl & minikube)

### 🌸 WEB APP
1. WEB APPS
- [WEB-APP WEBAUTH](./packages/web/authweb/README.md) documentation - authweb service
- [WEB-APP WEBEVENT](./packages/web/eventweb/README.md) documentation - eventweb service
- [WEB-APP WEBORDER](./packages/web/orderweb/README.md) documentation - orderweb service
- [WEB-APP WEBPRODUCT](./packages/web/productweb/README.md) documentation - productweb service
- [WEB-APP WEBUSER](./packages/web/userweb/README.md) documentation - userweb service
2. CONTAINER APPS
- [CONTAINER-APP hooksystem](./packages/system/hooksystem/README.md) documentation - hooksystem service
- [CONTAINER-APP shellsystem](./packages/system/shellsystem/README.md) documentation - shellsystem service

### 🛳 PORTS
| ROOTSHELL | WEBEVENT | WEBORDER | WEBPRODUCT | WEBUSER | WEBAUTH | hooksystem |
| --------- | -------- | -------- | ---------- | ------- | ------- | ---------- |
| 7070      | 7071     | 7072     | 7073       | 7074    | 7075    | 7076       |


