let velocity = 50
const acelleration = 5

while(velocity <= 100){ // Enquanto for menor que 100
  console.log("Acelerando... estamos a " + velocity + " Kms por segundo.")
  velocity += acelleration // Incrementa o valor no acelleration
}

const constellation = "Andromeda"
let pos = 0

while (pos < constellation.length){
  if(constellation[pos] == "a" || constellation[pos] == "A"){ // Verifica se o caractere atual é um "a" ou "A" e guarda o index atual.
    console.log(pos)
  }
  pos += 1 // incrementa + 1 na posição
}