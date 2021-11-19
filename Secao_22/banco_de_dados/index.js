const express = require('express')
const app = express();
const checklistRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
const path = require('path')
const methodOverride = require('method-override')
// Importando Mongoose.
require('./config/database.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method', {methods: ["POST", "GET"]}))
// Settando o caminho de nossas views.
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', rootRouter)
app.use('/checklists',checklistRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)
app.listen(3000, ()=>{console.log("Server is up!")})