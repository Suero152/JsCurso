const spaceshipName = 'Supernova'

function changeSpaceshipName(){
  spaceShipName = 'Elemental'
}

console.log(spaceshipName)

changeSpaceshipName

console.log(spaceshipName)

function startSpaceshipVelocity(){
  let spaceshipVelocity = 0
}

startSpaceshipVelocity()

console.log(spaceshipVelocity) // Será gerado um erro de Uncaught Reference Error, falando que a 
                               // Variavel não está definida, pois foi definida apenas dentro da
                               // nossa função criada.

let spaceshipVelocity = 200 // Essa variavel não sera a mesma do que a da função.

function setSpaceshipDetails() {
  let velocity = 50
  
  if (velocity == 50){
    velocity = 60
    var spaceshipName = 'Elemental'
    let spaceshipType = 'Discovery'
  }
  console.log(velocity, spaceshipName, spaceshipType) // Velocity será imprimido, Spaceshipname será imprimido mas spaceshipType não será imprimido. Sendo gerado um erro de referência
                                                      // Por quê disso? quando você define com var a variavel terá um nivel de escopo maior, pertencendo a função, no caso do let, a variavel pertenceu
                                                      // somente ao bloco if, mas não para o bloco da função.
}


setSpaceshipDetails()

function setSpaceshipDetails() {
  console.log(spaceshipName)
  console.log(spaceshipType)
  var spaceshipName = 'Elemental' // Ira printar a variavel por estar sendo utilizado como var, então o javascript interpreta ele sendo declarado no inicio da função.
  let spaceshipType = 'Discovery'
  console.log(spaceshipName)
  console.log(spaceshipType)
}