// Desestrutração de Objetos.
let spaceship = {
    name: 'Colossus',
    crewQuantity: 10,
    isHitched: false,
}

let spaceshipName = spaceship.name
let crewQuantity = spaceship.crewQuantity
console.log(spaceshipName, crewQuantity)

// Podemos  mapear as propriedades de uma forma mais prática desta forma:
let { name: spaceshipName, crewQuantity } = spaceship // Se o nome da variável desejada for o mesmo da propriedade podemos
                                                    //colocar desta forma.
console.log(spaceshipName, crewQuantity)

// Também podemos desestruturar arrays.
let spaceships = ["Colossus", "Artemis", "Phoenix"]
let colossus = spaceships[0]
let artemis = spaceships[1]
console.log(colossus, artemis)

let [colossus, artemis] = spaceships
console.log(colossus, artemis)

// Podemos usar a desestruturação em funções também ( útil ).
function printSpacehips([colossus, artemis, fenix, puller]){
    print(colossus, artemis, fenix, puller)
}
printSpaceships(spaceships)