# Check list backend

O que pretendemos rever nessa dinâmica:

- **Criação de uma API usando arquitetura.**

### CRIAR PASTAS
     [ x ]  src
         [ x ]  controller
         [ x ]  business
         [ x ]  database
         [ x ]  errors
         [ x ]  models
         [ x ]  router
         [ x ]  dtos
### src/index.ts
     [ x ]  express
     [ x ]  cors
     [ x ]  servidor
     [ x ]  caminho das entidades  que levará ao Router
    
### database
    [ x ]  Criar o documento. sql com as tabelas

 ```sql
    CREATE
[ x ]  Criar o documento.db
     [ x ]  Criar documento 'BaseDatabase'  que receberá uma classe abstrata e criará uma conexão com o banco de dados usando knex.
### router
     [ x ]  criar um router pra cada entidade
     [ ]  CRUD da entidade
### models
     [ ]  Criar uma classe para cada  entidade
     [ ]  constructor deve conter os atributos da entidade no privado
     [ ]  criar metodos públicos  para acessar ou alterar os atributos.
    
### dtos
     [ ]  Criar um documento para ações do crud
[ ]  Criar uma interface para dados de entrada
     [ ]  Criar uma interface para dados de saída
     [ ]  criar um schema com a biblioteca zod que valide as informaçãoe dos dados de entrada.

  

### controller
     [ ]  Criar classe da entidade
     [ ]  injeção de dependencia no constuctor recebendo como parâmetro a camada business
     [ ]  criar método que realizara uma das ações do CRUD
     [ ]  receber como parâmetro  deste método requisição e resposta
     [ ]  pegar dados da requisilça
### database (outra vez)
     [ ]  Criar classe da entidade extendendo o BaseDatabase para utilizar a connection
     [ ]  Criar métodos que realizara uma das ações do CRUD
        [ ]  receber por parâmetro do método os dados que serão enviados ou requeridos do banco de dados
        [ ]  Retornar o dado recebido do banco de dados ( se for uma requisição)