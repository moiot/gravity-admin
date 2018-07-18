FROM docker.mobike.io/database/nginx:1.15.1-alpine
COPY dist/drc-admin /usr/share/nginx/html
COPY drc.conf /etc/nginx/conf.d/default.conf
