FROM nginx:alpine AS webserver

LABEL "author.name"="Said Rodrigues" \
"author.email"="coderflemis@gmail.com" \
version="1.0.0" desc="NGINX Web Server for Reverse Proxy CEOS Institucional"

RUN rm /etc/nginx/conf.d/* && rm /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx
COPY default.conf /etc/nginx/conf.d
COPY localhost.crt /etc/ssl/cert.crt
COPY localhost.key /etc/ssl/key.key

EXPOSE 80
EXPOSE 443
# VOLUME /var/log/nginx/

CMD ["nginx", "-g", "daemon off;"]
