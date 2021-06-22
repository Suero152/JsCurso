/* Arrays são como listas em Python, que podem armazenar qualquer tipo de dado.
Seja ele boolean, inteiro, etc... */

const hitchedSpaceships = ["Supernova", "Elemental", "Helmet"]

console.log(hitchedSpaceships[0])

const spaceshipInfo = ['Colossus', 7, true]

console.log(spaceshipInfo[1])

console.log(spaceshipInfo[3]) // Por este valor não existir ele não gera erro e sim undefined.

const hitched2Spaceships = new Array("Supernova", "Elemental", "Helmet")

console.log(hitched2Spaceships)

let getNumber = new Array(1, 2, 3, 4, 5)
console.log(getNumber) 

getNumber = new Array(5) // Quando ele só tem um numero, será gerado posições undefined que nesse caso são 5
console.log(getNumber) 