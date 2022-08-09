## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Start KrakenD gateway in docker

```bash
docker run -p 8080:8080 -v $PWD:/etc/krakend/ devopsfaith/krakend run --config /etc/krakend/krakend.json
```

## Edit krakend.json in designer

```bash
Online: https://designer.krakend.io/#!/endpoints?target=6
```

## Editor kraken.json in docker (Need to test)

Pull image in https://hub.docker.com/r/devopsfaith/krakendesigner
Repo: https://github.com/krakendio/krakendesigner

```bash
docker pull devopsfaith/krakendesigner
docker run --rm -p 8080:80 devopsfaith/krakendesigner
```
