
## Description

It is a starting project to learn NestJS and explore its advantages.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Example endpoints

### URL to checkout

`http://localhost:3000`


### Create User
```bash
curl --location 'http://localhost:3000/app-user' \
--header 'Content-Type: application/json' \
--data '{
    "username": "Janelle7",
    "firstName": "Valentine",
    "lastName": "Rippin"
}'
```

### List Users
```bash
curl --location 'http://localhost:3000/app-user'
```

### Get User
```bash
curl --location 'http://localhost:3000/app-user/2'
```

### Delete User
```bash
curl --location --request DELETE 'http://localhost:3000/app-user/2'
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Daniel Futrille](https://www.linkedin.com/in/danielfutrille/)