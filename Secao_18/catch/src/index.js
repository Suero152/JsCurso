let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}

const velocityFunction = (velocity, acceleration) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(acceleration > 0){
            velocity += acceleration * 2
            console.log(`Nova velocidade: ${velocity}`)

            resolve(velocity)
        } else {
          reject("Aceleração inválida.")
        }}, 1000)
    })
}

console.log("Velocidade antes de acelerar:", komodoShip.velocity)
// Utilizamos o catch para receber o retorno da promise quando é recusada.
velocityFunction(komodoShip.velocity, komodoShip.acceleration).then((velocity) =>{
    komodoShip.velocity = velocity
    console.log(`Depois de acelerar:\n${komodoShip.velocity}`)
}).catch(message => {
    console.log(`Komodo: ${message}`)
    // Aqui 
})
