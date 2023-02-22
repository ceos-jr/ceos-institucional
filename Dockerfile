FROM node:18-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Yarn aqui pq essa imagem do node usa Yarn ao inves de NPM
RUN yarn export

FROM nginx:alpine AS release

LABEL "author.name"="Said Rodrigues" \
"author.email"="coderflemis@gmail.com" \
version="1.0.0" desc="Site Institucional da CEOS Estatico"

RUN rm /etc/nginx/conf.d/* && rm /etc/nginx/nginx.conf

COPY --from=build /app/out /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
