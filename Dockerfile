FROM nginx
COPY ./dist/tek-system-web /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
