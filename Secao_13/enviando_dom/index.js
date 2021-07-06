// Note que é possível fazer isso com os métodos aprendidos anteriores
// Mas fazendo desta forma fica mais rápido e pratico.
function sayMyFirstName(name){
    console.log(name.value)
}

function sayMyLastName(){
    console.log(event) // Essa variavel "event" armazena o ultimo elemento que foi chamado no DOM a partir desta função
    console.log(event.type)
    console.log(event.target) 
    console.log(event.target.value) 
    alert(event.target.value + ' é meu ultimo nome.')
}