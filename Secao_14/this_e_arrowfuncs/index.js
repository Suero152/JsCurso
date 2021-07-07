testingArrow = {
    name: 'Suero',
    normalFunction: function(){
        console.log('Uma função anônima normal. ' + this.name)
    },
    arrowFunction: ()=>{
        console.log('Uma função anônima de flecha. ' + this.name)
    },

}

// Normal functions respeitam ao escopo do objeto em que foram criadas
// Então ela chamaria a string 'Suero' de name.
testingArrow.normalFunction()
// Já a arrowfunction respeita o escopo do contexto em que ela foi criada.
// Então se o contexto onde você executa tem alguma variável chamada name, ela será chamada.
testingArrow.arrowFunction()