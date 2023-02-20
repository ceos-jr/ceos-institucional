# Ceos Institucional

Site Institucional da CEOS feito com NextJS

## Desenvolver Localmente

Para rodar localmente esse projeto utilize o comando `npm install` para installar as dependencias e `npm run dev` para rodar um servidor local
que pode ser acessado em `localhost:3000`

Se quiser um ambiente próximo da produção, como Cache e extrema velocidade, utilize docker para rodar um container localmente com

```bash
docker build -t ceos-local:latest . && docker run --rm -d --name ceos-local -p 80:80 ceos-local:latest
```

ou

```bash
docker-compose -p ceos up --build
```

Esse site estará disponível ao acessar `localhost` ou o `ip do seu computador` no browser

## Extensões do VS Code Recomendadas

- [TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Extensao para facilitar o desenvolvimento com Tailwind
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formatar o seu código automaticamente
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Mostra as melhores práticas de código
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport): Importa automaticamente componentes ao digitar
- [React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): Atalhos para criar coisas de React como componentes
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Excelente para criar código com os amigos
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker): Rode e explore containers mais rapidamente

## Arquitetura do Site
