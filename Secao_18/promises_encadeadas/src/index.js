const spaceship = {
    name: "Rontaro",
    currentBateryCharge: 50,
    consumptionPerKms: 0.00008
}

const updateBateryCharge = function (chargeConsumed) {
    return new Promise((resolve, reject) => {
        spaceship.currentBateryCharge -= chargeConsumed
        if (spaceship.currentBateryCharge > 0) {
            resolve(spaceship.currentBateryCharge)
        } else {
            reject("Bateria esgotada! Nave será desativada em alguns segundos.")
        }
    })
}

const calculateBateryConsumption = function (velocity, seconds) {
    return new Promise((resolve, reject) => {
        if (spaceship.consumptionPerKms <= 0 || velocity <= 0) {
            reject("Nave está parada!")
        } else {
            let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds
            resolve(chargeConsumed)
        }
    })
}



calculateBateryConsumption(90, 300).then(chargeConsumed => {
    updateBateryCharge(chargeConsumed).then(newCharge => {
        console.log("Carga atual:", newCharge)
    }).catch(error => {
        console.log(error)
    })
}).catch(error => {
    console.log(error)
})
// Para evitarmos ficar utilizando muitos then e catch e evitar um código macarrônico podemos fazer o seguinte:

calculateBateryConsumption(90, 300).then(chargeConsumed => {
return updateBateryCharge(chargeConsumed)
}).then(newCharge => {
    console.log("Carga atual:", newCharge.toFixed(2))
}).catch(error => {
    console.log(error)
})

// Como ele vai executar a promise do calculateBatery e cair no then dela, 
// como ele está retornando uma promise, podemos alinhar o outro then com esse novo promise.
// Isso também significa que qualquer erro que ocorrer em ambas promises ele vai cair direto no catch.