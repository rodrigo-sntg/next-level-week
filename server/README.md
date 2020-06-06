# Node Server

Este é o backend da aplicação.

Projeto feito com node js, utilizando [typescript](https://www.typescriptlang.org/).

O controle do banco de dados está sendo feito utilizando o [KnexJS](http://knexjs.org/), para alterar as configurações, veja o arquivo `knexfile.ts`

As validações do endpoint está utilizando o [Joi da HapiJS](https://github.com/hapijs/joi).

Estamos configurando o upload de arquivos com o [Multer](https://www.npmjs.com/package/multer) no arquivo `multer.ts`


## How To Run

Para rodar o projeto siga os comandos:

```
npm install
npm knex:migrate
npm knex:seed
npm run dev
```