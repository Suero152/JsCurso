// Manipulando estilos com DOM.

// Função para settar um background azul.
function setBlueBackground(){
    // Pegando o elemento por Id utilizando DOM
    const element = document.getElementById("style-text")
    // Mudando o estilo background-color do elemento utilizando DOM.
    element.style.backgroundColor = '#11b7d4'
    console.log("Agora a cor de fundo do texto é azul.")
}

// Função para settar um background transparente.
function setTransparentBackground(){
    // Dessa vez iremos fazer de uma forma mais prática.
    document.getElementById("style-text").style.backgroundColor = 'transparent'
    // Utilizando a captura do elemento para em seguida utilizarmos o .style e mudar o background
    console.log("Agora a cor de fundo do texto é invisível.")
}

// Utilizando classes CSS.

function setRedTextColor(){
    const element = document.getElementById("style-text")
    element.classList.add('red-color') 
}

function removeRedTextColor(){
    // Dessa vez utilizando a aplicação direta.
    document.getElementById("style-text").classList.remove('red-color')
}