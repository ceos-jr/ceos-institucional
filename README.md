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

Se quiser um ambiente com docker use

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

## Pre-requesitos para fazer o Deploy

- Ter acesso a root no servidor
- O domínio tem que está apontando para o ip do servidor
- Ter baixado o sheets-key.json para se conectar com o Google Sheets e colocado na pasta desse projeto
- Configurar o .env com as variáveis que estão no .env.example e colocado na pasta desse projeto
- Ter feito o build da imagem, colocado o tag nela e enviado para o Dockerhub

## Deploy Automático

Para fazer o deploy automático desse site utilizaremos `Ansible`

### Pre-requesitos

- Computador com Ansible instalado e configurado com o `inventory` e `ansible.cfg` apontando para o servidor
- Instale a role de Docker do Geerling com o comando `ansible-galaxy install geerlingguy.docker` no seu computador com Ansible
- Você já deve ter logado com o usuário pelo menos uma vez no host e esse user deve ter permissao para Root

### Editando o Playbook

Antes de rodar o playbook é necessário explicar as variáveis dessa parada para fazer o deploy

- remote_user: eh o usuario que vai fazer ssh com root
- email: eh o email necessário para pedir o certificado com o acme.sh
- domains: sao os domínios que você vai requisitar o certificado, eles tem que está apontando pro servidor cabeça
- staging: eh pra requisitar um certificado de tests, use isso se vc nao souber se vai dar certo, pois se o requesito
  do certificado de producao falhar muitas vezes tu fica bloqueado de requisitar por uma semana
- pull: se você enviou a imagem para o docker hub ou se vai ser necessário fazer o build no servidor, recomendo enviar antes
  para ser mais rápido e não utilizar tanto HD no servidor
- tag: eh a tag que tu vai utilizar para fazer o deploy do container do site Institucional
- port: eh a porta que vai ser publicada no servidor
- remove_old: remover certificado antigo

Exemplo:

```yaml
remote_user: guri_du_bronx
vars:
  email: usguri@gmail.com
  domains:
    - usguri.junkyard
    - ehusguri.junkyard
  staging: true
  pull: true
  remove_old: true
environment:
  tag: v1
  port: "3000"
```

### Rodando o playbook

Para rodar o playbook é simples, SE TIVER FEITO os Pre-requesitos, só precisa disso

```bash
ansible-playbook deploy-playbook.yaml
```

Pronto, se vc n esqueceu de nenhuma parada vc fez o deploy, welcome to devops bitch
Se quiser trocar de staging pra production tem que deletar o certificado antigo

## Deploy Manual

Vamo la, vamos fazer o temido clickops, eh bom pra aprender ou caso vc n queira usar as configuracoes do Ansible

Vou fazer isso aqui tudo assumindo que voce ta no Ubuntu, se nao tiver você vai ter que ler mais fera

### Instalando o Docker

Primeiro vamos atualizar o apt list e baixar algumas paradas que o docker pede

```bash
sudo apt-get update && \
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

Depois vamos adicionar a GPG key la do docker, primeiro criado um repositorio para ela e dps baixando com o curl nessa pasta

```bash
sudo mkdir -m 0755 -p /etc/apt/keyrings && \
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

E adicione o repositorio do Docker no seu source
`echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
`

Faça o update do apt list novamente e instale toda a maquinária bloated do Docker

```bash
sudo apt-get update && \
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Adicione seu usuário para o grupo do docker se quiser executar o docker sem sudo

> Docker eh complexo por causa da segurança que ele da com containers com permissao para root, existe o modo rootless que elimina isso,
> mas eh mais complexo de fazer. Leia isso para mais https://rootlesscontaine.rs/getting-started/common/sysctl/

`sudo usermod -aG docker "seu_user"`

Pronto, você instalou o Docker fion

### Rodando o container da CEOS Institucional

Faça um clone desse repositorio no servidor e entre nessa pasta nova

```bash
git clone https://github.com/ceos-jr/ceos-institucional.git
```

Escolha uma porta disponível no teu servidor para fazer o publish da porta

```bash
sudo ss -tulpn | grep LISTEN
```

As que estiverem nesse comando estão sendo usadas pelo sistema, normalmente a 3000 nao esta entao vamos usar ela

```bash
export PORT=tua_porta
```

Aproveite e escolha a tag que você quer usar com

```bash
export TAG=tua_tag
```

Agora faça o build do container se a imagem não estiver no dockerhub

```bash
docker build -t ceosjr/institucional:${TAG} .
```

Depois rode o docker compose com que vai criar um projeto chamado ceos e rodar em detach

> Nao se esqueça de configurar o .env e o sheets-key.json na pasta do projeto

```bash
docker compose -p ceos up -d
```

Pronto, teu container deve ta rodando verifique isso com o `docker ps`

### Setup do NGINX

Cara, se você chegou até aqui das duas uma, ou tu quer aprender ou tu achava que esse era o caminho mais fácil
Se for a última use o `Nginx Proxy Manager` para fazer o setup do reverse proxy eh bem simples para falar na verdade,
porém ele não deixa tu fazer tanta configuração fina no caso de um NGINX no pelo

Só vou dizer os prováveis problemas que você deve passar e como resolver

- Verifique se teu proxy_host a conexão ta http, sim http, pq a conexao do NPM para o container eh feita em HTTP e nao em HTTPS
- Verifique se não tem nenhum firewall fechado no teu servidor, tanto na tua provedora quanto com algum service como `ufw` ou `firewalld`, sempre é o firewall
- Verifique se teu domínio ta apontando pro IP do servidor, não custa nada rodar um `ping` pra ver se ta caindo no IP certo
- A rede do NPM pode ta diferente do teu container, tente colocar o IP do servidor como host e nao localhost ou algo do tipo, a não ser que tu coloque o NPM e o
  container da ceos na msm rede, assim tu pode usar o nome do container no host

Agora do jeito difícil.

Instale o NGINX e o socat

```bash
sudo apt install nginx socat -y
```

Baixe o acme.sh, mas entre primeiro como root para facilitar nossa vida `sudo -i`

```bash
curl https://get.acme.sh | sh -s email=teu_email@usguri.com | source ~/.bashrc
```

Disabilite o Nginx porque a gente vai usar o standalone mode no ACME que precisa da porta 80

> Porque o standalone e não webroot?
> Porque você vai entrar num problema da galinha ou ovo pois o NGINX precisa de um certificado para inicializar
> E o acme precisa de uma forma de confirmar que tu tem ownership do domínio com seja lá o challenge que tu escolher, provavelmente HTTP-01 com teu webserver
> Mas como a gente ta em reverse proxy a gente não consegue servir nada para o ACME quando ele chama o webserver, por isso a gente vai utilizar o standalone

```bash
systemctl stop nginx
```

Rode esse comando do acme

```bash
acme.sh --issue --standalone -d teu_dominio1 -d teu_dominio2
```

Ele vai gerar um monte de certificados na pasta do root em `~/.acme.sh` que a gente vai copiar agora

```bash
mkdir -p /etc/letsencrypt/live/teu_dominio1/ && \
  acme.sh --install-cert -d teu_dominio1 \
  --key-file /etc/letsencrypt/live/teu_dominio1/privkey.pem \
  --fullchain-file /etc/letsencrypt/live/teu_dominio1/fullchain.pem \
```

Serao esses certificados que a gente vai utilizar para fazer SSL no site

Dps disso vamo copiar os arquivos do NGINX do projeto para fazer ele rodar

```bash
cp ./nginx/nginx.conf /etc/nginx/nginx.conf && cp ./nginx/default.conf.j2 /etc/nginx/conf.d/ceos.conf
```

Edite o arquivo do ceos.conf e edite onde tiver o `{{ domain | join(' ') }}`, isso eh um jinja template, que vamos alterar
para colocar onde tiver server_name colocar teus domínios

E onde tiver o {{ domain[0] }} tu pega somente teu primeiro domínio

Inicialize o NGINX novamente com

```bash
systemctl start nginx
```

E acesse seu site

Se eu não tiver moscado e vc tbm n eh pra ta funcionando fera, se tiver algum erro vc vai ter que pesquisar ou se eu ainda tiver ai me chamar
