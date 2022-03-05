<h1 align="center">Microservices Backend Package 👋</h1>

### 🏗️ ARCHITECTURE

<img src="/documentation/backend/architecture.png" width="800">

###  🎭 AUTHENTICATION

<img src="/documentation/backend/authentication.png" width="800">

### 📦 CREATE PRODUCT

<img src="/documentation/backend/create-product.png" width="800">

### 🤷🏼‍♂️ PREREQUISITE
- Java version 11 (at least)
- Maven
- Docker environment
- Docker compose

### 🐳 DOCKER 

```shell
mvn clean install # install all deps for backend from parent pom file
docker-compose up --build -d # build and deploy all to docker
docker-compose stop && docker system prune <<< y # stop and Prune all services 
```

### 🧪 GLOBAL UTILITY CONTAINERS
- elasticsearch : http://localhost:9200
- backend api swagger : http://localhost:8080/swagger-ui.html

### 📜 DOCUMENTATION
-   [KUBERNETES](./kubernetes/README.md) : main readme for backend

### 🚚 SERVICES
- SYSTEM : SERVICE THAT INCLUDE ***elasticsearch port 9200 , zookeeper port 2181, kafka port 9092***
	- [SHELLSERVICES](./packages/system/shellsystem/README.md)
- SERVICES
	- [AUTHSERVICE](./packages/service/authservice/README.md) port : 8082
	- [EUREKASERVER](./packages/service/eurekaserver/README.md) port : 9090
	- [EVENTSERVICE](./packages/service/eventservice/README.md) port : 8085
	- [GATEWAYSERVICE](./packages/service/gatewayservice/README.md) port : 8080
	- [ORDERSERVICE](./packages/service/orderservice/README.md) port : 8084
	- [PRODUCTSERVICE](./packages/service/productservice/README.md) port : 8083
	- [USERSERVICE](./packages/service/userservice/README.md) port : 8081

### 👤 AUTHOR

 **xotosphere organization**
-   Github: [@xotosphere](https://github.com/xotosphere)

### 📝 LICENSE

Copyright © 2021 [XOTOSPHERE](https://github.com/xotosphere).<br/>
This project is [ISC](https://github.com/xotomicro/xotomicro-backend/blob/main/LICENSE) licensed.

