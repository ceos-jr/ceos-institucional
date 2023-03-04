FROM nginx:alpine AS webserver

LABEL "author.name"="Said Rodrigues" \
"author.email"="coderflemis@gmail.com" \
version="1.0.0" desc="NGINX Web Server for Reverse Proxy CEOS Institucional"

RUN rm /etc/nginx/conf.d/* && rm /etc/nginx/nginx.conf

COPY nginx/nginx.conf /etc/nginx
COPY nginx/default.conf /etc/nginx/conf.d

EXPOSE 80
VOLUME /var/log/nginx/

CMD ["nginx", "-g", "daemon off;"]
