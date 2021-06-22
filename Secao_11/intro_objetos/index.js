// Criando um Objeto
let spaceship = {
    name: 'Fenix',
    crewQuantity: 7,
    type: 'Batalha',

}

// Imprimindo um objeto ou uma propriedade dele.
console.log(spaceship)
console.log(spaceship['name'])
console.log(spaceship.name)

// Criando uma propriedade 1
spaceship.isHitched = false
console.log(spaceship)

// Criando uma propriedade 2
spaceship["shieldLevel"] = 100
console.log(spaceship)


// Criando objetos vazios
spaceship = new Object()
spaceship = {}