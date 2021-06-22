function speedUp (velocity, acelleration, unity = 'km/s'){
    const newVelocity = velocity + acelleration
    return newVelocity // Retornando esse valor.
}

speedUp(10, 20) // Se formos fazer dessa forma iremos apenas receber o retorno e não imprimindo no console.

// Forma 1.
console.log(speedUp(10, 20)) 


// Forma 2.

let velocity = 80
let acelleration = 5

console.log(velocity)

velocity = speedUp(velocity, acelleration)

console.log(velocity)