/* Uma HOF é uma função de alta classe, são funções que recebem ou retornam outras funções, essas funções são geralmente funções ANÔNIMAS
A função que é enviada como parâmetro de uma HOF é chamada de CallBack. Podendo ser asemelhadas a funções decoradoras em Python! */

function doubleVelocity(velocity, printer) {
    console.log("Entrei em double velocity")
    let newVelocity = velocity * 2 // Declarando new velocity
    printer(newVelocity) // Utilizando a função esperada na variavel newVelocity
    return newVelocity //Retornando newVelocity
}

/*const printVelocity = velocity => console.log('Nova Velocidade: ' + velocity + 'km/s')
 
 
const newVelocity = doubleVelocity(60, printVelocity) //Aqui botamos 60 como velocity e em printer uma função anonima. Assim a função anonima sera utilizada em newVelocity como especificado na HOF
console.log(newVelocity) */

// Usando de outra forma

let anotherVelocity = doubleVelocity(50, velocity => {//Não necessariamente precisa ser uma arrow function, podemos fazer isso tranquilamente : function(velocity){}
    console.log("outra velocidade: " + velocity)
})

console.log(anotherVelocity)