let hitchedSpaceships = ['Colossus', 'Elemental', 'Helmet']
console.log(hitchedSpaceships)

hitchedSpaceships.push('SuperNova')
console.log(hitchedSpaceships)

let removedSpaceship = hitchedSpaceships.pop()
console.log(hitchedSpaceships, removedSpaceship)

removedSpaceship = hitchedSpaceships.shift()
console.log(hitchedSpaceships, removedSpaceship)

hitchedSpaceships.unshift('Fenix')
console.log(hitchedSpaceships)

let ElementalPos = hitchedSpaceships.indexOf('Elemental')
console.log(ElementalPos) //Caso o elemento não existe será gerado a indice -1