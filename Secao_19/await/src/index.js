import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

// Agora iremos ver como fazemos um erro.
// Iremos fazer uma pequena verificação para que utilizemos o reject.
async function adjustPosition(x, y, z) {
    if (z > 90) {
        return Promise.reject("Ângulo Z inválido.")
    }
    laserGun.currentPosition = [x, y, z]
    return [x, y, z]
}

async function fire(x, y, z) {
    laserGun.firing = true
    return [x, y, z]
}

// Utilizando o await.
async function moveAndFire(x, y, z) {
    // Isso faz com que concluemos a nossa função async e recebemos o retorno dela.
    // Também podemos utilizar o try catch do JavaScript para tratar um erro dessas funções asíncronas.
    try{
    let newCoordinates = await adjustPosition(x, y, z)
    console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
    let fireCoordinates = await fire(...newCoordinates)
    console.log(`Começando a atirar nas coordenadas (${fireCoordinates[0]}, ${fireCoordinates[1]}, ${fireCoordinates[2]})`)
    }catch(error){
        console.log(error)
    }
    
}

moveAndFire(20, 40, 95)
