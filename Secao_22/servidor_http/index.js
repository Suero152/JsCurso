const http = require('http')

/*
// Criando um servidor
const server = http.createServer((req, res) => {})
// Aqui passamos um listener que vigia qualquer coisa que for chamada na porta 3000 vai cair neste servidor.

server.listen(3000, ()=>{
    // Caso o servidor esteja ativo e sendo vigiado ele irá loggar isto no console :
    console.log("O Servidor está ativo.")
})
*/


// Agora vamos devolver algo para o nosso browser.

const server = http.createServer((req, res) => {
    console.log(req.method) // Vendo o método que a requisição usa.
    console.log(req.url) // Vendo a URL que está sendo chamada.
    req.statusCode = 200
    // Agora vamos dar uma resposta.
    res.end('<h1>Hello, World!</h1>')
})

server.listen(3000, ()=>{
    // Caso o servidor esteja ativo e sendo vigiado ele irá loggar isto no console :
    console.log("O Servidor está ativo.")
})