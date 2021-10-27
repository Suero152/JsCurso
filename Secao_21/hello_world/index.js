// Podemos utilizar o JSX para construir toda nossa UI ou apenas parte de um projeto.
// Agora iremos ver como utilizamos em um projeto todo ( O mais comum. )

// Agora vamos injetar nossos elementos react dentro da tela.
ReactDOM.render(
    React.createElement( // Agora iremos criar um elemento.
        'h1', // Tag do elemento
        null,
        'Hello, World.' // Conteúdo do Elemento.
    ),
    document.getElementById('root')// Agora vamos identificar aonde queremos injetar esse elemento.
)