const express = require('express')
const app = express();
const checklistRouter = require('./src/routes/checklist')

// Utilizando o middleware
app.use(express.json())
// Desta forma colocamos o middleware para ele verificar se algo que está sendo passado pra ele é um json ou não.
// Isso auxilia na hora de se fazer uma requisição com body Json.

/*
// vamos criar outro middleware para fazer logs.
// sendo o terceiro parâmetro para que o middleware passe a execução para o próximo.
const log = (req, res, next) =>{
    console.log(req.body)
    console.log(`Data: ${Date.now()}`)
    next()
}
// Agora utilizando o middleware.
app.use(log)

// Vamos criar uma rota.
app.get('/', (req, res) =>{
    console.log(req.body)
    req.status = 200
    // Criando um site baseado em uma lista de afazeres.
    res.send('<h1>Minha lista de tarefas</h1>')
})

// Criando a rota do nosso JSON
app.get('/json', (req, res) =>{
    console.log(req.body)
    req.statusCode = 200
    res.json(
        {title: "Tarefa X", done: true}
    )
})
*/

// Agora vamos utilizar a rota exportada.
app.use('/checklists',checklistRouter)
// Nós criamos uma rota e utilizamos ele como se fosse um middleware.
// Falando que o primeiro argumento é a URL derivada daquele Middleware.

// Agora vamos fazer um listener.
app.listen(3000, ()=>{console.log("Server is up!")})