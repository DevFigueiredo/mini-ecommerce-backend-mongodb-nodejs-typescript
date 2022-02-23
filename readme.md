# Objetivo Geral

Criar um mini sistema de ecommerce utilizando bancos não relacionais e também aplicar conhecimentos de conceitos do S.O.L.I.D e aplicação do Clean Code.

### Metas do Projeto

[X] Crud de Estabelecimentos
[X] Crud de Produtos
[X] Crud de Clientes
[X] Gerenciamento de Autenticação
[X] Gerenciamento de Pedidos
[ ] Incluir Sistema de Filas usando AMAZON SQS
[ ] Integrar API de Pagamento (Strapi)

### Explicação Estrutural do Projeto

> src: Local onde encontra-se todo o código fonte da aplicação
> src/keys: Local onde encontra-se arquivos JSON's para salvar credenciais de acesso do projeto
> src/main/: Local onde encontra-se a pastas referente a inicialização do projeto
> src/main/app: Local onde encontra-se os aplicativos que inicializam o projeto
> src/main/docs: Local onde encontra-se documentações em gerais para utilizar o projeto
> src/modules/: Local onde encontra-se todos os modulos da aplicação separamente. (Produtos, Autenticação, Clientes, Pedidos)
> src/modules/{entidade}/useCases: Local onde encontra-se os Casos de Uso de uma entidade
> src/modules/{entidade}/infra: Local onde encontra-se tudo que refere-se a infraestrutura deste modulo. Exemplo: Repositórios do banco de dados
> src/shared: Local onde encontra-se todos os arquivos que são compartilhados entre os modulos da aplicação
> src/shared/domain: Local onde encontra-se os dominios/interfaces da aplicação, Exemplo: Produtos, Autenticação, Clientes, Pedidos
> src/shared/errors: Local onde encontra-se os dominios de erros da aplicação
> src/shared/helpers: Local onde encontra-se os arquivos que serão utéis para ajudar em manipulações realizadas pelo dominio. Exemplo: Gerar um UUID, Upload de Imagem, Comparação de Campos...
> src/shared/utils: Local onde encontra-se os arquivos que serão utéis para reutilização no código.
> src/shared/protocols: Local onde encontra-se as implementações(interfaces) que deverão ser utilizadas pelos modulos
> src/shared/infra: Local onde encontra-se toda parte que refere-se a infraestrutura compartilhada do projeto. Exemplo: Banco de dados.
> src/shared/validators:Local onde encontra-se os arquivos que serão utéis para incluir validações de entidades do projeto

## 💻 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Expo](https://expo.dev/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Verifique se você atendeu aos seguintes requisitos:

- Você precisa instalar a versão mais recente de `<Node JS>`
- Sistemas `<Windows / Linux / Mac>`.

## 🚀 Instalando Backend

Para instalá-lo em sua máquina faça os comandos a seguir:

```bash
  git clone https://github.com/DevFigueiredo/mini-ecommerce-backend-mongodb-nodejs-typescript
  cd mobile
  npm install
  npm start
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/?hl=pt)

Desenvolvido por Daniel Miranda de Figueiredo

## 📝 Licença

Esse projeto está sob licença MIT.
