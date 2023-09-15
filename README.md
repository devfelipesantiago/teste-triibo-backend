# Processo Seletivo - Desenvolvedor(a) Backend Node.js

Olá candidato(a),

Seja bem-vindo(a) ao processo seletivo para a posição de Desenvolvedor(a) Backend Node.js na nossa empresa. Estamos entusiasmados para avaliar suas habilidades no desenvolvimento de APIs utilizando JavaScript, Node.js, Express, bancos de dados SQL ou não-relacionais, práticas de arquitetura MSC, autenticação JWT e documentação de código.

## Desafio: Desenvolvimento de API CRUD

Neste desafio, seu objetivo é criar uma API RESTful completa, demonstrando sua capacidade de desenvolvimento em um ambiente realista. A API será um sistema de gerenciamento de tarefas. Siga as diretrizes abaixo para cumprir o desafio:

### Tema: Sistema de Gerenciamento de Tarefas

#### Funcionalidades Esperadas:

##### Cadastro de Tarefas:

- Cada tarefa deve conter um título, descrição e status (pendente, em andamento, concluída).
- Utilize um banco de dados de sua escolha: SQL (por exemplo, MySQL) ou não-relacional (por exemplo, MongoDB).

##### Listagem de Tarefas:

- Os usuários devem poder listar todas as tarefas cadastradas.

##### Atualização de Tarefas:

- Os usuários devem poder atualizar detalhes e status de uma tarefa existente.

##### Exclusão de Tarefas:

- Os usuários devem poder excluir uma tarefa.

#### Requisitos Técnicos:

- Utilize Node.js e Express para criar a API.
- Organize o código utilizando o padrão MSC (Model-Service-Controller).
- Integre autenticação JWT para proteger as rotas de atualização e exclusão de tarefas.
- Utilize um banco de dados de sua escolha: SQL (por exemplo, SQLite, PostgreSQL) ou não-relacional (por exemplo, Firebase Realtime Database).
- Implemente endpoints de busca e filtro para as tarefas (por título, por status, etc.).
- Forneça documentação clara para a API, incluindo detalhes sobre as rotas, parâmetros e respostas. (Opcional)

### Critérios de Avaliação:

O critério predominante neste desafio é a qualidade do código e a organização do projeto. Será avaliado como você segue as melhores práticas, mantém um código limpo e estruturado, e organiza a lógica de acordo com o padrão MSC.

### Entrega:

Compartilhe o código-fonte do projeto através de um repositório no GitHub. Certifique-se de incluir um arquivo README que explique como configurar e executar o projeto localmente, instruções para instalação de dependências e detalhes sobre as rotas da API.

Estamos ansiosos para ver suas habilidades em ação! Boa sorte!

Atenciosamente,

Caio Ribeiro
Triibo

## Instruções:

Este é um guia passo a passo para clonar e inicializar o projeto, inicializar o banco de dados usando o Docker e entender as rotas disponíveis.

## Clonando o projeto do GitHub

1. Abra o terminal.
2. Navegue até o diretório onde deseja clonar o projeto.
3. Execute o seguinte comando para clonar o projeto:
   ```
   git clone https://github.com/devfelipesantiago/teste-triibo-backend
   ```
4. Navegue até o diretório do projeto clonado:
   ```
   cd teste-triibo-backend
   ```

## Inicializando o Projeto

1. Instale as dependências do projeto com o seguinte comando:
   ```
   npm install
   ```
2. Inicie o servidor com o seguinte comando:
   ```
   npm start ou npm run dev para rodar o servidor com o nodemon 
   ```

## Inicializando o Banco de Dados com Docker

1. Certifique-se de que o Docker está instalado em sua máquina.
2. No terminal na raiz do projeto, execute o seguinte comando para iniciar uma nova instância do banco de dados:
   ```
   docker-compose up
   ```

## Rotas Disponíveis

- `POST /login`: Esta rota é usada para fazer login no aplicativo. Ela espera receber um objeto JSON com `username` e `password`.

- `POST /users`: Esta rota é usada para adicionar um novo usuário. Ela espera receber um objeto JSON com detalhes do usuário.

- `POST /tasks`: Esta rota é usada para adicionar uma nova tarefa. Ela espera receber um objeto JSON com detalhes da tarefa:
```
{
  "title": "Terminar projeto teste",
  "description": "Projeto de teste para vaga de desenvolvedor backend",
  "status": "Em andamento"
}
```
- `GET /tasks`: Esta rota é usada para obter todas as tarefas.

- `GET /tasks/:id`: Esta rota é usada para obter uma tarefa específica pelo ID.

- `PUT /tasks/:id`: Esta rota é usada para atualizar uma tarefa específica pelo ID. Ela espera receber um objeto JSON com os novos detalhes da tarefa.

- `DELETE /tasks/:id`: Esta rota é usada para excluir uma tarefa específica pelo ID.

Por favor, note que todas as rotas, exceto `POST /login` e `POST /users`, requerem autenticação.