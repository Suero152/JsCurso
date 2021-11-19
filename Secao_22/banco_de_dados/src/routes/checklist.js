// Aqui iremos fazer um checklist para o To Do list.
const express = require('express')
const { findById } = require('../models/checklist')
const router = express.Router()
// Para isso iremoz utilizar uma ferramenta do express chamada Router.
// Importando um modelo.
const Checklist = require('../models/checklist')


router.get('/new', async (req, res) =>{
    let checklist = new Checklist()
    try{
        res.status(200).render('checklists/new', {checklist: checklist})
    }catch(error){res.status(500).render('pages/error', {error: "Erro ao carregar a página."})}
})


// Criando uma rota GET
router.get('/', async (req, res) =>{
    try{
        let checklistSearch = await Checklist.find({})
        // Utilizando o moongose para devolver todas as checklists.
        res.status(200).render('checklists/index.ejs', {checklists: checklistSearch})
    }catch(error){res.status(500).render('pages/error', {error: "Erro ao carregar a página."})}
})

//Iremos criar uma agora com parâmetros que irá retornar o objeto com o seguinte ID.
router.get('/:id', async (req, res)=>{
    try{
        let checklistSearch = await Checklist.findById(req.params.id).populate('tasks')
        res.status(200).render('checklists/show.ejs', {checklist: checklistSearch})
    }catch(error){res.status(500).render('pages/error', {error: "Erro ao carregar a página."})}
})

router.get('/:id/edit', async (req, res)=>{
    try{
        let checklistSearch = await Checklist.findById(req.params.id) 
        res.status(200).render('checklists/edit.ejs', {checklist: checklistSearch})
    }catch(error){res.status(500).render('pages/error', {error: "Erro ao carregar a página."})}
})

// Vamos criar uma nova rota POST
router.post('/', async (req, res) =>{
    let {name} = req.body.checklist
    let newChecklist = new Checklist({name})
    try{
        await newChecklist.save()
        res.redirect('/checklists')
    }catch(error){console.log(error);res.status(500).render('checklists/new', {checklist: {...newChecklist, errors: error}})}
})

//Criando uma rota PUT
router.put('/:id', async (req, res)=>{
    let {name} = req.body.checklist
    // Pegando o valor name do body de nossa requisição para atualizar.
    let checklist = await Checklist.findById(req.params.id)
    try{
        // Utilizando o findByIdAndUpdate para achar o objeto correspondente e atualizar.
        await checklist.update({name})
        res.redirect('/checklists')
    }catch(error){
        let errors = error.errors
        res.status(500).render('checklists/edit', {checklist: {...checklist, errors}})
        console.log(error)
    }
})

//Criando uma rota DELETE
router.delete('/:id', async (req, res)=>{
    try{
        // Utilizando o findByIdAndDelete para achar o objeto correspondente e apagar.
        await Checklist.findByIdAndDelete(req.params.id)
        res.status(200).redirect('/checklists')
    }catch(error){res.status(500).render('pages/error', {error: "Erro ao excluir lista de tarefa."})}
})

// Depois de criarmos nossa rota vamos exportar ele.
module.exports = router