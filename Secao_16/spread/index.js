let spaceships = ['Colossus', 'Artemis', 'Phoenix']
// O operador spread (...) Faz com que o alvo iteravel seja expandido.
// No caso de um array, o jeito com que é mostrado se torna diferente. 
// Como cada elemento sendo como uma string única e não uma lista com strings.
console.log(...spaceships)


let newSpaceships = [...spaceships, "Puller"]
// Seria a mesma coisa que isso:
// let newSpaceships = ['Colossus', 'Artemis', 'Phoenix', 'Puller']
console.log(newSpaceships)

// Então podemos fazer isso em uma função desta forma:
function speedUp(velocity, acelleration){
    return velocity + acelleration
}

let spaceshipAcelleration = [60, 10]
let newVelocity = speedUp(...spaceshipAcelleration)
console.log(newVelocity)