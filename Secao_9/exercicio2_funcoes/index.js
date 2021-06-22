let spaceshipVelocity = 250

function slowDown(velocity, printer){
    const deceleration = 20
    while (velocity > 0){
        printer(velocity)
        velocity -= deceleration
    }

    alert('A nave foi parada, as comportas já podem ser abertas.')
}

slowDown(spaceshipVelocity, actualVelocity => console.log('Velocidade atual: ' + actualVelocity))


// Outra forma de fazer ( Dessa vez com o while fora da função )

/*
let spaceshipVelocity = 250

function slowDown(velocity, printer){
    const deceleration = 20
    printer(velocity)
    velocity -= deceleration
    return velocity

}

while (spaceshipVelocity > 0){
    spaceshipVelocity = slowDown(spaceshipVelocity, actualVelocity => console.log('Velocidade atual: ' + actualVelocity))
}

alert('A nave foi parada, as comportas já podem ser abertas.') */
