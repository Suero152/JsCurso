function step02(){
    console.log("Passo 02")
}

console.log("Passo 01")
step02()
console.log("Passo 03")
// Acabamos de fazer uma execução síncrona.

console.log("Passo 04")
// Utilizando o setTimeout vemos que o Passo06 é executado antes do Passo05, fazendo uma execução assíncrona.
setTimeout( ( ) =>{console.log("Passo 05")}, 1000)
console.log("Passo 06")