/*
&& - "E", se um dos itens retornar False, a operação lógica retorna False. Se todos retornarem True, a expressão retorna True.
|| - "Ou", Se um dos itens retornar True, a operação lógica retorna True. Se os retornarem False, a expressão retorna False.
! - "Não" Apenas inverte a operação lógica normal, se retornar verdadeiro utilizando ! ele irá trazer falso, se trazer falso utilizando ! ele retornará verdadeiro
*/

let spaceship = "Elemental"
let velocity = 20

console.log(spaceship.length == 9 && velocity > 20)
// Se as duas comparações forem verdadeiras retornará True, se uma ao menos não for retornará False.
// False

console.log(velocity > 10 && velocity > 19)
// True

console.log(velocity < 17 && spaceship == "Elemental")
// False.

console.log(velocity < 21 && spaceship == "Golias")
// False.

console.log(spaceship.length == 9 || velocity > 30)
// True 

console.log(velocity > 10 || velocity > 19)
// True

console.log(spaceship == "Elemental" || velocity < 19)
// True

console.log(spaceship == "Golias" || velocity < 19)
// False

console.log(!(spaceship == "Elemental"))
// False

console.log(!(spaceship == "Golias"))
// True

console.log(!(velocity > 10))
// False

console.log(!(velocity < 10))
// True

console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length +1 > 15))
// !F || F
// True