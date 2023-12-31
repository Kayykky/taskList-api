# taskList API

📋🌐 Bem-vindo ao repositório da API do projeto TaskList! Este é o backend que suporta o projeto taskList, um sistema de criação e administração de listas de tarefas. Você pode encontrar o repositório do frontend correspondente [aqui](https://github.com/Kayykky/taskList/).

## Principais tecnologias utilizadas

- TypeScript: Linguagem de programação principal utilizada para o desenvolvimento da API.
- Prisma Schema: Utilizado para mapear o banco de dados e definir os modelos de dados.
- Banco de Dados: O banco de dados utilizado no projeto é chamado "tasklist".
- Yarn: Gerenciador de pacotes utilizado para instalar dependências e gerenciar o projeto.
- JWT: Para codificiar senhar e autenticar usuários.

## Bibliotecas e Dependências

As bibliotecas e dependências utilizadas neste projeto estão listadas no arquivo `package.json`. Certifique-se de executar o comando `yarn install` para instalar todas as dependências necessárias antes de iniciar a API.

## Funcionalidades

O projeto TaskList oferece as seguintes funcionalidades:

- Criação de listas de tarefas.
- Adição, atualização e exclusão de tarefas em listas.
- Exclusão de listas de tarefas.

## Configuração

Antes de executar a API, certifique-se de configurar o arquivo `.env` com as informações necessárias, como a string de conexão do banco de dados e outras variáveis de ambiente relevantes.

Após configurar o arquivo `.env`, você pode iniciar a API executando o seguinte comando:

```shell
yarn dev
```

Isso iniciará o servidor de desenvolvimento.

## Rotas da API

A API oferece as seguintes rotas:

- `POST /signup`: Cadastro de usuários.
- `POST /login`: Login de usuários.
- `GET /me`: Retorna os dados do usuário conectado.
  
- `POST /list`: Cria uma nova listas de tarefas.
- `GET /list`: Retorna uma lista de tarefas com base no ID.
- `GET /list/list`: Retorna todas as listas de tarefas dde um usuário.
- `DELETE /list/delete`: Deleta uma lista de tarefas com base no ID.
  
- `POST /note`: Adiciona uma nota a uma lista de tarefas.
- `GET /note/list`: Retorna as notas de uma lista de tarefas com base no ID.
- `PUT /note/edit`: Atualiza uma nota com base no ID.
- `DELETE /note/delete`: Exclui uma nota com base no ID.
