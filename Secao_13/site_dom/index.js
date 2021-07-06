// Projeto pessoal para treino.

// Aqui crio uma função para deixar o site no tema branco
function toWhite(){
    // Faço uso de DOM, nesta função utilizo uma chamada direta, em vez de criar variaveis.
    document.getElementById('header-container').classList.replace('dark-header-container', 'white-header-container')
    document.getElementById('body').classList.replace('dark-body', 'white-body')
    document.getElementById("content-container").classList.replace('dark-content-container', 'white-content-container')
}

function toDark(){
    // Faço o uso de DOM novamente mas para praticar faço uso de variaveis,  etc.
    const header = document.getElementById('header-container')
    const body = document.getElementById('body')
    const content = document.getElementById("content-container")
    header.classList.replace('white-header-container', 'dark-header-container')
    body.classList.replace('white-body', 'dark-body')
    content.classList.replace('white-content-container', 'dark-content-container')
}
