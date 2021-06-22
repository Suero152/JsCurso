let spaceship = "Golias"
let velocity = 80

// Verificando se é igual
console.log(velocity == 80)
console.log(velocity == "80") // Também retorna True, pois ele não se interessa no tipo do dado e sim no que ele armazena.
console.log(velocity === "80") // Aqui ele considera o tipo de dado que tem na variavel, então retorna false.
console.log(spaceship == "Golias")

// Verificando se é diferente.

console.log(velocity != 80)
console.log(velocity != "80")
console.log(velocity !== "80")
console.log(spaceship != "Sailor")

// Verificando se é maior / menor / igual a/que algo.

console.log(velocity >= 80)
console.log(velocity < "70")
console.log(velocity < "90")
console.log(spaceship < "Amen") // Verifica de acordo com a ordem alfabetica da primeira letra adiante. Nesse caso ele leva em consideração se "G"olias vem antes de A