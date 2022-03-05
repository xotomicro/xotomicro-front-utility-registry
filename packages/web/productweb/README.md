# WEBAUTH
The React Application

## PREREQUISITE
- run shellsystem
- run hooksystem

## INSTALL AND RUN THE APP - YARN
```shell
yarn # install dependencies
yarn start # start application
```

## INSTALL AND RUN THE APP - DOCKER
```sh
# starting with docker
export GITHUB_TOKEN={GITHUB_TOKEN} # first set accessibility rules for your team and add your github token like so 
docker-compose up --build -d # deploy service to docker
# build service without docker compose
docker build -t {SERVICE_NAME} . --progress plain --no-cache --build-arg GITHUB_TOKEN={GITHUB_TOKEN}


```


- ACCESS 
  * GO TO http://localhost:7073
