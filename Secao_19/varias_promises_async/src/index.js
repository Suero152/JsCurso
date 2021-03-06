import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

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

function loadAmmo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(console.log("Arma carregada."))
        }, 2000)
    })
}

async function moveAndFire(x, y, z) {
    try {
        // Suponhe que queremos utilizar o adjustPositon e o loadAmmo de forma atômica
        // Podemos utilizar o Promise.all para isso junto do await.
        const adjustPositionPromise = adjustPosition(x, y, z)
        const loadAmmoPromise = loadAmmo()
        let promiseResult = await Promise.all([adjustPositionPromise, loadAmmoPromise])
        // Agora iremos armazenar as novas coordenadas que vieram do resolve/return do adjustPositionPromise em uma variável.
        newCoordinates = promiseResult[0]
        console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
        let fireCoordinates = await fire(...newCoordinates)
        console.log(`Começando a atirar nas coordenadas (${fireCoordinates[0]}, ${fireCoordinates[1]}, ${fireCoordinates[2]})`)
    } catch (error) {
        console.log(error)
    }

}

moveAndFire(20, 40, 95)
