import Spaceship from './spaceship.js'
import SpaceshipEngine from './spaceshipEngine'
// Impotando e criando as classes.
let spaceships = [
new Spaceship("Sophia", 10, 5), 
new Spaceship("Amsterdã", 14, 10), 
new Spaceship("Estrela-Anã", 20, 4)
]

let engines = [
    new SpaceshipEngine(spaceships[0]), 
    new SpaceshipEngine(spaceships[1]), 
    new SpaceshipEngine(spaceships[2]), 
]

// Criando um contador para auxiliar no .forEach
let i = 0
spaceships.forEach(spaceship =>{
    // Utilizando o then para mandar a mensagem de validação do resolve do nosso promise feito em spaceshipEngine.js
    engines[i].ignite().then((message) =>{
        console.log(`${spaceship.name}: ${message}`)
    // Utilizando o catch para mandar a mensagem de validação do resolve do nosso promise feito em spaceshipEngine.js
    }).catch((message) =>{
        console.log(`${spaceship.name}: ${message}`)
    })
    i += 1
})
console.log("PROMISES.")