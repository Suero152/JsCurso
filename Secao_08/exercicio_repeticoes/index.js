alert("Olá, seja bem-vindo. A seguir pedirei algumas informações")

const spaceshipName = prompt("Qual é o nome da nave?") // Capturando o nome da nave
const proibChar = prompt("Qual é o caractere banido?") // Capturando o caractere proibido

let inverseName = ''

/* Dois fors, um fazendo onome completo inverso e um que não alerta o caractere proibido.
for (let i = spaceshipName.length - 1; i > -1;  i--){ // Enquanto I ( Que é o tamanho da string spaceshipName) for maior que -1, diminua 1 do I
    inverseName += spaceshipName[i]  // Adicionando uma string de spaceshipName que é correspondente ao index
}

for (let i = spaceshipName.length - 1; i >= 0;  i--){
    if (spaceshipName[i] == proibChar){ //Se o caractere proibido for encontrado ele irá entrar no bloco
        alert("Caractere proibido encontrado. Não irei repeti-lo")
        break // Parando o loop
    }
    else{alert(spaceshipName[i])} // Alertando o caractere que não é proibido.
}
*/

/* Um que não repete o caractere proibido nem adiciona ao nome invertido
for (let i = spaceshipName.length - 1; i >= 0;  i--){
    if (spaceshipName[i] == proibChar){ //Se o caractere proibido for encontrado ele irá entrar no bloco
        alert("Caractere proibido encontrado. Não irei repeti-lo")
        break // Parando o loop
    }
    else{
        inverseName += spaceshipName[i]
        alert(spaceshipName[i])
    } // Alertando o caractere que não é proibido.
}
*/

/* Tentativa falha com While
do{
    for( let i = spaceshipName.length -1; i >= 0; i--){
        inverseName += spaceshipName[i]
    }
} while ()

*/

// Revisar alguma estrutura se necessário.

alert("Antigo nome da nave: " + spaceshipName + "\nNovo nome da nave: " + inverseName) //O Output Final.