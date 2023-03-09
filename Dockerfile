FROM node:lts-alpine AS base

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

# Copiar o arquivo .env para rodar o build com os parametros certos
COPY .env .env

ENV NEXT_TELEMETRY_DISABLED 1

# Yarn aqui pq essa imagem do node usa Yarn ao inves de NPM
RUN yarn build

FROM base AS runtime

LABEL "author.name"="Said Rodrigues" \
"author.email"="coderflemis@gmail.com" \
version="1.0.0" desc="Site Institucional da CEOS em NextJS"

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copiar tudo que tiver na pasta public para a pasta public no runtime
COPY --from=build /app/public ./public
# Essa pasta standalone possui todas as dependencias mínimas para rodar o NextJS
# Assim não precisa copiar todo o NodeModules apenas esse standalone
# Assim a gente diminui uma porrada de coisa que não precisa
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
# Copiar o conteúdo estático gerado pelo NextJS como JS Chunks, CSS e HTML
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
