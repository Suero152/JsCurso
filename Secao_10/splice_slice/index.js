let spaceshipNames = ['Elemental', 'Darwin', 'Artemis', 'Supernova']
console.log(spaceshipNames)

let removedSpaceships = spaceshipNames.splice(1, 2, 'Deméter', 'Puller', 'Golias')

/* O que o splice está fazendo?
   Basicamente ele tira 2 elementos
   a partir do indice indicado ( contando com o elemento do indice indicado)
   e a partir do indice 1 ele colocará
   novos elementos propostos do usuário.
   Se o segundo parâmetro não for dado
   ele irá remover todos a partir do indice indicado! */

console.log(spaceshipNames)
console.log(removedSpaceships)

spaceshipNames = ['Elemental', 'Darwin', 'Artemis', 'Supernova']
console.log(spaceshipNames)

removedSpaceships = spaceshipNames.splice(1, 2)
console.log(spaceshipNames)
console.log(removedSpaceships)

spaceshipNames = ['Elemental', 'Darwin', 'Artemis', 'Supernova']

let extractedNames = spaceshipNames.slice(1, 3)
// Ele extrai os elementos do indice 1 ao 3. ( Ele não inclui o terceiro elemento.)
console.log(spaceshipNames)
console.log(extractedNames)