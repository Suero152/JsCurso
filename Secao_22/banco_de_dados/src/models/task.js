const mongoose = require('mongoose')
// Após a importação do Mongoose iremos importar algo bem portante, que será o Schema, ele será o modelo que 
// Vamos utiliza em nosso documento.
const taskSchema = mongoose.Schema({
    // No nosso esquema nos fazemos uma estrutura padrão a ser seguida pelo Mongo.
    // No campo name nós podemos passar o tipo desse campo, se ele vai ser obrigatório ou não e entre vários outros.
    name: { type: String, required: true},
    // Criando mais um campo de valor booleano e com um valor padrão de false.
    done: {type: Boolean, default: false},
    // Fazendo a referência da checklist que queremos que ela esteja relacionada.
    checklist: {
        // Tipo de ObjectID
        type: mongoose.Schema.Types.ObjectId,
        // Referência
        ref: "Checklist",
        required: true,
    }
})

// Exportando nosso esquema!
module.exports = mongoose.model('Task', taskSchema)