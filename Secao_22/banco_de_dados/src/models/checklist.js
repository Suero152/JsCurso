const mongoose = require('mongoose')
// Após a importação do Mongoose iremos importar algo bem portante, que será o Schema, ele será o modelo que 
// Vamos utiliza em nosso documento.
const checklistSchema = mongoose.Schema({
    // No nosso esquema nos fazemos uma estrutura padrão a ser seguida pelo Mongo.
    // No campo name nós podemos passar o tipo desse campo, se ele vai ser obrigatório ou não e entre vários outros.
    name: { type: String, required: true},
    // Fazendo a referência da task que queremos que ela esteja relacionada.
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
})

// Exportando nosso esquema!
module.exports = mongoose.model('Checklist', checklistSchema)