// O Apóstrofo pode ser colocado para trabalhar com multi-lines
const planet_json = `{
    "name": "Terra",
    "physicalCharacteristics": {
        "surfaceArea": 510072000,
        "equatorialDiameter": 1756.2
    },
    "colors": ["Azul", "Branco", "Marrom"],
    "startsRotation": "00:00",
    "finishrotation": "23:57"
}` 

let planet = JSON.parse(planet_json)
// Transformou em um objeto!
console.log(planet)
console.log(planet.colors[0])