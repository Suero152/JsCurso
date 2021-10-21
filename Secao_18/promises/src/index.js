let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}

// Vamos criar um promise para ver a aceleração da nave depois de 2 segundos.
// Passando como primeiro argumento uma função que vai ser executada assíncronamente
// Essa função tem que ter 2 argumentos, sendo eles resolve e reject.

const velocityFunction = (velocity, acceleration) =>{
    new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(velocity > 0){
            velocity += acceleration * 2
            console.log(`Nova velocidade: ${velocity}`)
            // Agora iremos utilizar o resolve para que a função seja bem sucedida.
            resolve(velocity)
        } else {
          console.log("Aceleração inválida.")
          reject("Não possui aceleração")
        }}, 1000)
    })
}
velocityFunction(komodoShip.velocity, komodoShip.acceleration)

console.log("Execução de promise.")
// Na execução desse código vemos que primeiro foi executado o console.log() sem o término da Promise.
// Dando a entender mais uma execução assíncrona.