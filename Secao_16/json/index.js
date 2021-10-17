let planet = `{
    "name": "Terra",
    "physicalCharacteristics":{
        "surfaceArea": 3.14,
        "equatorialDiameter": 12756.2
    },
    "colors": ["Blue", "Green", "White"],
    "startingRotation": "00:00",
    "finishingRotation": "23:59"
}`
console.log(planet)

// Podemos converter essa string em um objeto JSON.

let planetJSON = JSON.parse(planet)
console.log(planetJSON)