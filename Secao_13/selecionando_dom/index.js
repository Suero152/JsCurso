// Seleção por ID
function show() {
    // Aqui definimos o elemento gettado como name
    let element = document.getElementById("name")
    // Aqui fazemos uso do valor do elemento.
    console.log(element.value)
}

// Seleção por name
function show() {
    let elements = document.getElementsByName("phone")
    // Aqui fazemos uso do valor do elemento.
    console.log(elements[0].value, elements[1].value)
}

// Seleção por query
function show() {
    // Pegando todos campos input de nome phone dentro da class phones 
    let elements = document.querySelectorAll("div.phones  input[name='phone']")
    // Aqui fazemos uso do elemento.
    console.log(elements[0], elements[1])
}

// Seleção por tag name
function show() {
    let elements = document.getElementsByTagName("input")
    // Aqui fazemos uso do valor do elemento.
    console.log(elements)
}
