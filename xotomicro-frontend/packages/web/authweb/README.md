## WEBUSER
The React Application

## PREREQUISITE
- run shellsystem
- run hooksystem

## INSTALLING AND RUNNING THE APPLICATION
1. RUN
```shell
yarn # install dependencies
yarn start # start application
```

2. ACCESS 
  - GO TO http://${process.env.SERVICE_URL}:7075

<hr>

## INFO
TESTING FOR USERS

```shell
# USER 1 - ADMIN
Username: user1
Password: password1
```

```shell
# USER 2 - USER
Username: user2
Password: password2
```

```shell
# USER 3 - USER
Username: user3
Password: password3
 ```

*REQUEST*
```shell
curl --location --request POST 'http://${process.env.SERVICE_URL}:8080/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "user1",
    "password": "password1"
}'
```
*RESPONSE*
```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjI5MDI5MjQ3LCJpc3MiOiJBdXRoU2VydmljZSIsImV4cCI6MTYyOTAzMDE0N30.elcks-Vmt9LDQ7f7jActiYiAfnA36MFfGCHE3-lMc98",
    "expire": 1629030147840,
    "scope": "admin"
}
```

### GET USERS
*REQUEST*
```shell
curl --location --request GET 'http://${process.env.SERVICE_URL}:8080/users' \
--header 'Authorization: eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjI5MDI5MjQ3LCJpc3MiOiJBdXRoU2VydmljZSIsImV4cCI6MTYyOTAzMDE0N30.elcks-Vmt9LDQ7f7jActiYiAfnA36MFfGCHE3-lMc98'
```
*RESPONSE*
```json
[
    { "id": 1, "username": "user1", "scope": "admin", "fullName": "Name 1" },
    { "id": 2, "username": "user2", "scope": "user", "fullName": "Name 2" }, 
	{ "id": 3, "username": "user3", "scope": "user", "fullName": "Name 3" }
]
```

 