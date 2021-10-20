// Dando require nos arquivos.
const math = require('./math')
const Planet = require('./planet')

const planets = [
    new Planet('Mercúrio', 0.39), new Planet('Vênus', 0.72),
    new Planet('Terra', 1), new Planet('Marte', 1.52), new Planet('Júpiter', 5.2),
    new Planet('Saturno', 9.53), new Planet('Urânio', 19.1), new Planet('Netuno', 30)
]

// Utilizando do .forEach junto de uma arrow function.
planets.forEach(planet => {
    console.log(planet.name, 'está', planet.distanceToTheSun, 'UAs distante do sol e', math.conversionFunction(planet.distanceToTheSun), 'KMs distante do sol.')
})