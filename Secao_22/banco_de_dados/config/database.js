// Solicitando o Mongoose atráves do NodeJS
const mongoose = require('mongoose')
// Configurando para que o Mongoose utilize a promise global do Node.
mongoose.Promise = global.Promise

// Agora iremos conectar o nosso Banco de dados Mongo na nossa máquina com o nosso projeto.
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) =>console.log(err))
// Agora iremos importar isso no '../index.js'
