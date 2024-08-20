# Projeto Nature Quest
Consiste em uma aplicação front end, que será o cartão postal para usuários entrarem no sistema e cadastrarem um novo lugar natural em florianópolis, afim de conecer novos locais o usuário estará compartilhando as informações dos lugares para novos usuários, incluindo visitantes da ilha.


## 💻 Tecnologias usadas
Front-end: HTML, CSS, JavaScript,
Ferramentas: Visual Studio Code, GitHub, Trello, Bootstrap.
## ☁️ Banco de dados
Para essa aplicação, foi usado o json server, para simular um banco de dados.

## Rodar o repositório:
### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js. Além disto é bom ter um editor para trabalhar com o código como VSCode

### Clone o repositório
git clone <https://github.com/josuesantos7/ProjetoFrontEnd.git>

### Acesse a pasta do projeto no terminal/cmd
cd ProjetoFrontEnd

### Instale as dependências
npm install

### Rode o json server
Abra um novo terminal e execute o comando:
json-server --watch database.json

### Execute a aplicação em modo de desenvolvimento
npm run dev

O servidor inciará na porta:5173 - acesse http://localhost:5173/


## Features
 [x] feature/pagina-login
 [x] feature/pagina-locais
 [x] feature/dashboard
 [x] feature/readme
 [ ]feature/contexto-auth


## Melhorias futuras
Adicionar criptografia na senha, adicionar mais detalhes no cadastro de lugares, incluindo fotos e adicionar mapas na página locais.
