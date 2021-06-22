let spaceship = {
    name: 'Supernova',
    type: 'Batalha',
    crew: ['Capitão Suero', 'Oreus', 'Salocin'],
}

// Adicionando elementos a uma lista dentro de um Objeto.
spaceship.crew.push('Tenente Nicolas')
console.log(spaceship)

spaceshipNames = [
    {
        name: 'Phoenix',
        maxVelocity: 250,
    },

    {
        name: 'Cheetah',
        maxVelocity: 300,
    },

    {
        name: 'Golias',
        maxVelocity: 100,
    }
]

// Criando valores em objetos dentro de listas
spaceshipNames[0].newValue = 'Novo Valor'
console.log(spaceshipNames)

// Iterando

spaceshipNames.forEach(spaceship => {
    console.log(spaceship.name + ' tem ' + spaceship.maxVelocity + 'km/s na sua velocidade máxima.')
});

spaceship = {
    name: 'Golias',
    maxCrew: 20,
    captain: {
        name: 'Hugo Trent',
        age: 37
    }
}

console.log(spaceship.captain.age)
console.log(spaceship.captain['name'])