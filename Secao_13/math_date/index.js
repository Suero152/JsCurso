// Elevação
console.log(Math.pow(3, 5))
// PI
console.log(Math.PI)
// sqrt ou Raíz quadrada
console.log(Math.sqrt(64))

// Utilizando DATE

let myBirthday = new Date(2007, 03, 12)
// Mês 3 resulta em abril, por a Classe Date considerar o primeiro mês como 00

// Assim que seria mês de março
myBirthday = new Date(2007, 04, 12)

// Retornando a data de hoje

let today = Date.now()
console.log(today)
// 1623473138959
// Sempre que trabalhamos com Date, ele considera a base de cálculo como milissegundos desde a data base do JavaScript
// Essa data é 1 de janeiro de 1970