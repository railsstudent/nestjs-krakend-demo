## Description

Demo krakend gateway to proxy and protect requests to NestJS backend

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

## Update the host ip and port in krakend.json 
```json

"backend": [
    {
      "url_pattern": "/",
      "encoding": "string",
      "sd": "static",
      "method": "GET",
      "disable_host_sanitize": false,
      "host": ["http://<ip>:<port>"]
    }
]
```

## Start Krakend gateway in docker

```bash
docker pull devopsfaith/krakend
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
