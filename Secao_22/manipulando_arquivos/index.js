// Agora vamos ver como manipular arquivos utilizando o node

const fs = require('fs')

// Criação de arquivo

// 1° Argumento: Nome do arquivo, 2° Argumento: Conteúdo do arquivo, 3° Argumento: O que fazer caso um erro ocorra na criação do arquivo. 
fs.writeFile('teste.txt', "Eu sou um arquivo .txt!\n", error =>{
    console.log(error)
})

// Também temos o appendFile que é a mesma coisa, porém, em vez de ser criado um novo arquivo, ele irá apenas adicionar mais conteúdo ao arquivo.
fs.appendFile('teste.txt', "Eu sou um arquivo .txt!", error =>{
    console.log(error)
})

// Renomeando arquivos
// 1° Argumento: Nome do arquivo a ser renomeado, 2° Argumento: Novo nome, 3° Argumento: Tratamento de erros. 
fs.rename('teste.txt', "teste2.txt", error =>{
    console.log(error)
})

// Removendo arquivos
// 1° Argumento: Nome do arquivo a ser  excluído, 2° Argumento: Tratamento de erros.
fs.unlink("teste2.txt", error =>{
    console.log(error)
})
