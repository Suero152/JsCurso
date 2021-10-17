let spaceship = {
    name: 'Colossus',
    crewQuantity: 10,
    isHitched: false
}
/*
let spaceshipName = spaceship.name
let spaceshipCrewQuantity = spaceship.crewQuantity
console.log(spaceshipName, spaceshipCrewQuantity)
*/

// Fazendo a desestruturação

// Aqui estamos colocando o objeto spaceship para receber a desestruturação a seguir.
let {name: spaceshipName, crewQuantity: crewQuantity1} = spaceship
// Então ele ira mapear a variavel spaceshipName para a propriedade name de spaceship e a mesma coisa com crewQuantity.
console.log(spaceshipName, crewQuantity1)

// Simplificando mais ainda
let {name: spaceshipName2, crewQuantity} = spaceship
console.log(spaceshipName2, crewQuantity)

// Agora desestruturação com arrays.

let spaceships = ['Colossus', 'Artemis', 'Phoenix']

let colossus1 = spaceships[0]
let artemis1 = spaceships[1]
console.log(colossus1, artemis1)

// Agora com desestruturação
let [colossus, artemis, fenix, puller] = spaceships
console.log(colossus, artemis, fenix, puller)

// Podemos passar essa desestruturação como parâmetros para funções.
function  printSpaceships([colossus, artemis, fenix, puller]){
    console.log(colossus, artemis, fenix, puller)
}
printSpaceships(spaceships)