let spacialStation = {
    name: 'Receptora',
    platformsQuantity: 15,
    shape: 'Esférica',
}

// Utilizando funções
console.log(spacialStation.name.toUpperCase())

let spaceshipNames = ["Phoenix", 'Puller', 'Golias']
console.log(spaceshipNames[0].toUpperCase())

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

console.log(spaceshipNames[0].name)
console.log(spaceshipNames[0]['name'].toUpperCase())