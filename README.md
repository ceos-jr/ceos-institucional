# Ceos Institucional

Site Institucional da CEOS feito com NextJS

## Environment Variables e arquivos para rodar

Algumas variáveis de ambiente serão necessárias para desenvolver por completo a aplicação como:

- SHEET_ID: Ela o ID da planilha do Google Sheets
  - Vc consegue ele com o link da planilha que possui acesso por uma Service Account, leia a documentacao na `/api/contact`
- DISCORD_WEBHOOK_URL: O URL de Webhook do discord para mandar as notificacoes
  - Para usar esse é necessário entrar no servidor do discord e criar um

E outros arquivos que são necessário no projeto

- sheets-key.json: Arquivo com as credenciais da Service Account da planilha, ele deve estar na raiz do projeto

## Desenvolver Localmente

Para rodar localmente esse projeto utilize o comando `npm install` para installar as dependencias e `npm run dev` para rodar um servidor local
que pode ser acessado em `localhost:3000`

Se quiser um ambiente próximo da produção, como Cache e extrema velocidade, utilize docker para rodar um container localmente com

```bash
docker build -t ceos-local:latest . && docker run --rm -d --name ceos-local -p 3000:3000 ceos-local:latest
```

ou

```bash
docker-compose -p ceos up --build
```

Esse site estará disponível ao acessar `localhost:3000` ou o `ip_do_se__computador:3000` no browser

## Extensões do VS Code Recomendadas

- [TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Extensao para facilitar o desenvolvimento com Tailwind
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formatar o seu código automaticamente
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Mostra as melhores práticas de código
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport): Importa automaticamente componentes ao digitar
- [React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): Atalhos para criar coisas de React como componentes
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Excelente para criar código com os amigos
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker): Rode e explore containers mais rapidamente

## Arquitetura do Site

## Deploy Automático

Para fazer o deploy automático desse site utilizaremos `containers` para facilitar o processo e `Ansible` para fazer o setup em qualquer maquina

### Pre-requesitos

- Computador com Ansible instalado. Use linux ou wsl pra facilitar a sua vida
- Instale a role de Docker do Geerling com o comando `ansible-galaxy install geerlingguy.docker` no seu computador com Ansible
- O usuário que for fazer ssh deve ter acesso ao root no container, pois será ele que instalará o docker e rodará o container
- Você já deve ter feito ssh no servidor pelo menos uma vez com esse usuário

### Editando o Playbook

Para ter o container rodando no servidor basta trocar o `container_image` com o nome do repositório sem a tag, esse `container_image` tem
que está no Dockerhub. Outros registrys ainda não estão suportados

> Se esse container_image não estiver definido o playbook irá fazer o build da imagem localmente e rodará o docker-compose.
> De uma olhada no `Deploy manual com compose way` para mais ideias

Escolha a tag que será utilizada para fazer baixar o container. Ex `tag: latest`

Defina a porta que foi exposta no container na variável `container_port` e a porta para ser publicada no host com `host_port`

Mude o `remote_user` para o usuário que irá fazer ssh com permissões de root no servidor

Exemplo:

```yaml
remote_user: ansible
vars:
  container_image: flemis/ceos-institucional
  tag: v1
  host_port: 3000
  container_port: 3000
```

### Rodando o playbook

Para rodar o playbook é simples, basta rodar o comando trocando o `servidorbolado.ceos.xyz` com o ip ou hostname do teu servidor

```bash
ansible-playbook -i servidorbolado.ceos.xyz, deploy-playbook.yaml
```

## Deploy Manual

Para fazer o deploy automático desse site utilizaremos `containers`, a desvantagem do manual é o tempo de fazer o build da imagem
e a quantidade de espaço que ela irá ocupar no servidor, além de que você vai ter que instalar o docker manualmente, que muita gente não consegue
fazer

Instale o [docker](https://docs.docker.com/engine/install/) para a plataforma do servidor

Após instalar você tem dois caminhos para seguir

- docker-compose
- docker image

### Docker compose way

Com o arquivo docker-compose.yaml, mude as portas no arquivo.

- A primeira é a porta no host para ser publicada
- A segunda é a porta no container exposta

Use o comando `docker compose up -d --build` e você deve está pronto para rodar

### Docker image way

Baixe o container com o comando `docker pull container_name:tag`, onde container_name é o nome do container com o repositório
e a tag é a tag

Ou faça o build da imagem localmente com

Rode o commando `docker run --rm -d --name ceos-institucional -p host_port:container_port --restart unless-stopped container_name:tag` que

- Remove o container depois que ele é terminado
- Seta ela para rodar no detach mode sem travar o terminal
- Coloca o nome do container para `ceos-institucional`
- Publica a porta `host_port` que aponta para `container_port` no container
- Faz o container resetar sempre, a não ser que você pare ele manualmente
