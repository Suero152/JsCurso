// Utilizando o Spread.
let spaceships = ['Colossus', 'Artemis', 'Phoenix']

console.log(spaceships)
console.log(...spaceships) // Aqui ele irá imprimir cada elemento do array como se fossem uma entidade única.

let newSpaceships = [...spaceships, "Puller"]
console.log(newSpaceships)

// Podemos utilizar isso em funções
function speedUp(velocity, acceleration){
    return velocity + acceleration
}

let spaceshipAcceleration = [10, 40]
let newVelocity = speedUp(...spaceshipAcceleration)
console.log(newVelocity)