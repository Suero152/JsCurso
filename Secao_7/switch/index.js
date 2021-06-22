let velocity = 800

switch(velocity * 2) { //Vai procurar uma cláusula que seja coerente com velocity * 2 , se algum desses for, ele ira iniciar o bloco dessa clausula
  case 100:
    console.log("Sua velocidade é 100km por segundo")
    break;
  case 160:
    console.log("Sua velocidade é 160km por segundo.")
    break;
  default:
    console.log("Velocidade não identificada")
}
// Break - para a execução do case, se não tivesse isso comprometeria o código.

let spaceship = "Elemental"

switch(spaceship) {
  case "Golias":
    console.log("A nave mais resistente")
    break;
  case "Raptor":
    console.log("A nave mais rápida")
    break;
  case "Enterprise":
    console.log("A nave da frota estelar") 
    break;
  default:
    console.log("Nave Comum")
}