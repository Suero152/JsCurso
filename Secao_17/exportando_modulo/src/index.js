// Ao utilizarmos require, ele irá no arquivo requisitado e ver o que está sendo exportado dentro dele.
// Que foi no caso a classe Planet.
const Planet = require('./planet')
const solarSystem = require('./solar_system')

const earth = new Planet('Terra', 50100000)
earth.rotate()

solarSystem.planets.push(earth, new Planet('Marte', 3140000), new Planet('Júpiter', 1430000), new Planet('Saturno', 538000))
console.log(solarSystem)


// Nos também podemos utilizar o require para importar bibliotecas como o moment.js !