// Função anonima é simplesmente uma função sem nome que geralmente é declarada em variaveis.

/*
let doubleSpeed = function(velocity){return velocity * 2}

let newVelocity = doubleSpeed(40)

console.log(newVelocity) */

console.log(speedUp(60, 10)) // Essa função irá ser chamada normalmente e irá funcionar
console.log(doubleSpeed(50)) // Mas essa aqui não vai, mostrando que funções anonimas não são criadas antes de tudo, diferente das funções normais. : Até mesmo se for declarada como var :


var doubleSpeed = function(velocity){return velocity * 2}

function speedUp(velocity, acelleration){
  return velocity + acelleration
}