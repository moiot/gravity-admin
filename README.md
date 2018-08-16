# DRC Admin

## Build from source
```bash
$ npm install
$ npm run build -- --prod
$ docker build -t docker.mobike.io/drc-admin:$(git rev-parse --short HEAD) .
```
