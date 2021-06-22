/* let hitchedSpaceships = [
    ['Phoenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

const upToNine = hitchedSpaceships.filter(spaceship => spaceship[1] > 9)
 // Utilizando filter para filtrar todas naves com mais de 9 tripulantes


const pendentSpaceshipsNames = hitchedSpaceships.findIndex(spaceship => spaceship[2] == false)
 // Utilizando findIndex para saber o index da primeira nave com false no terceiro elemento

const upToNineDisplay = upToNine.map(function(spaceship){
    counter = 0
    return spaceship[counter]
})

alert('Espaçonaves com mais de 9 tripulantes: \n' + upToNineDisplay)

console.log(upToNineDisplay) */

// tentativa falha de fazer esse exericio acima ^ ^
let hitchedSpaceships = [
    ['Phoenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

const upToNine = hitchedSpaceships.filter(spaceship => spaceship[1] > 9).map(spaceship => spaceship[0])
 // Utilizando filter para filtrar todas naves com mais de 9 tripulantes
 // Então logo apósisto utilizamos o .map nos sub-arrays do filter para retornar apenas os nomes das naves!
console.log(upToNine)

const pendentSpaceshipsNames = hitchedSpaceships.findIndex(spaceship => spaceship[2] == false)
 // Utilizando findIndex para saber o index da primeira nave com false no terceiro elemento

let highlightedSpaceships = hitchedSpaceships.map(spaceship => spaceship[0].toUpperCase())

let message = ("Espaçonaves com mais de 9 tripulantes: " + upToNine.join(", ") + 
'\nPlatafoma com pocesso de engate: ' + (pendentSpaceshipsNames + 1) + '\nEspaçonaves destacadas: ' + highlightedSpaceships.join(", "))

alert(message)