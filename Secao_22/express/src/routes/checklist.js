// Aqui iremos fazer um checklist para o To Do list.
const express = require('express')
const router = express.Router()
// Para isso iremoz utilizar uma ferramenta do express chamada Router.


// Criando uma rota GET
router.get('/', (req, res) =>{
    console.log("Olá, mundo.")
    res.send()
})

// Vamos criar uma nova rota POST
router.post('/', (req, res) =>{
    console.log(req.body)
    // Aqui podemos settar o status como 200 e concatenar com o .send que irá devolver o corpo da requisição.
    res.status(200).send(req.body)
    // Então dentro dessa requisição post nós podemos enviar algum JSON no body ou similar com o Postman.
})

//Iremos criar uma rota agora com parâmetros.
router.get('/:id', (req, res)=>{
    // Resgatando o ID
    console.log(req.params.id)
    // Enviando como resposta o ID
    res.send(`ID: ${req.params.id}`)
})

//Criando uma rota PUT
router.put('/:id', (req, res)=>{
    // Resgatando o ID
    console.log(req.params.id)
    // Enviando como resposta o ID
    res.send(`PUT ID: ${req.params.id}`)
})

//Criando uma rota DELETE
router.delete('/:id', (req, res)=>{
    // Resgatando o ID
    console.log(req.params.id)
    // Enviando como resposta o ID
    res.send(`DELETE ID: ${req.params.id}`)
})

// Depois de criarmos nossa rota vamos exportar ele.
module.exports = router