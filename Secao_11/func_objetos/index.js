// Objetos também podem receber funções, e quando essas funções são recebidas passam a ser chamadas de método.

let spaceship = {
    name: 'Demeter',
    type: 'Extração',
    maxCrew: 20,
    // Criando uma função como se fosse um método em Python
    turnOn: function () {
        console.log('Preparando propulsão.')
        console.log('Ligando computador de bordo.')
        console.log('A nave ' + this.name + ' está pronta para ir, tripulante :)')
    },
}

console.log(spaceship.type)

spaceship.turnOn()
// Utilizando método

// Criando um método externamente
spaceship.velocity = 0

// Nesse exemplo abaixo, seria necessário passar o próprio objeto como primeiro parâmetro, então para evitar isso utilizamos this.
/*
spaceship.speedUp = function(spaceshipToUp, acelleration){
    console.log('Acelerando a velocidade da Nave.')
    spaceshipToUp.velocity += acelleration
}
*/

spaceship.speedUp = function (acelleration) {
    console.log('Acelerando a velocidade da Nave.')
    this.velocity += acelleration
}

console.log(spaceship)
spaceship.speedUp(30)
console.log(spaceship)

spaceship.turnOff = function () {
    console.log('Desativando preparo de propulsão.')
    console.log('Desligando computador de bordo.')
    console.log('Nave inativada com sucesso.')
}
spaceship.turnOff()
