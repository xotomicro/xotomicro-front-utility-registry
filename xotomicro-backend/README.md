<h1 align="center">Microservices Backend Package 👋</h1>

### 🤷🏼‍♂️ PREREQUISITE
- Java version 11 (at least)
- Maven
- Docker environment
- Docker compose

### 🐳 DOCKER 

```shell
mvn clean install # Install all deps from backend 
docker-compose up --build -d # Deploy all to docker
docker-compose stop && docker system prune <<< y # Stop and Prune all services 
```

### 📜 DOCUMENTATION
-   [KUBERNETES](./kubernetes/README.md) : main readme for backend

### 🚚 SERVICES
-   [AUTHSERVICE](./packages/service/authservice/README.md) 8082
-   [EUREKASERVER](./packages/service/eurekaserver/README.md) 9090
-   [EVENTSERVICE](./packages/service/eventservice/README.md) 8085
-   [GATEWAYSERVICE](./packages/service/gatewayservice/README.md) 8080
-   [ORDERSERVICE](./packages/service/orderservice/README.md) 8084
-   [PRODUCTSERVICE](./packages/service/productservice/README.md) 8083
-   [USERSERVICE](./packages/service/userservice/README.md) 8081


