let spaceship = "Helmet"
let newSpaceship = ""

for(let i = 0; i < spaceship.length;  i ++){
  // 1°; - Definindo variavel 2°; Verificando se é menor que o length da string 3°; Adicionando 1 ao indice. 'i'
  if(spaceship[i] == 'e'){ // Verifica se o caractere atual é um "e"
    newSpaceship += 'i' // Caso seja ele irá substituir por "i"
  } else{ // Caso não, apenas adicione o caractere.
    newSpaceship += spaceship[i] 
  }
}
console.log(newSpaceship)