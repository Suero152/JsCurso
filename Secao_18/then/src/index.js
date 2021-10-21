let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}

const velocityFunction = (velocity, acceleration) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(velocity > 0){
            velocity += acceleration * 2
            console.log(`Nova velocidade: ${velocity}`)

            resolve(velocity)
        } else {
          console.log("Aceleração inválida.")
          reject("Não possui aceleração")
        }}, 1000)
    })
}

console.log("Velocidade antes de acelerar:", komodoShip.velocity)
// Utilizamos o then para receber o retorno da promise quando é validada.
velocityFunction(komodoShip.velocity, komodoShip.acceleration).then((velocity) =>{
    komodoShip.velocity = velocity
    console.log(`Depois de acelerar:\n${komodoShip.velocity}`)
})
