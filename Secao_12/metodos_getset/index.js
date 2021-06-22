// São método que simulam várias práticas boas em nossas classes.
// Get - imprime um valor dentro de uma variavel
// Set - Seta um valor dentro de uma variavel simulada pelo próprio set 
class TransportSpaceship{

    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    // Será interpretado como variável por ter set em sua composição
    set velocity(newVelocity){
        if (newVelocity > 120){
            console.log('A velocidade não pode ser mais do que 120, então estamos fazendo um reajuste automatico.')
            this.currentVelocity = 120
        } else {
            this.currentVelocity = this.currentVelocity
        }
    }

}

let spaceship = new TransportSpaceship("Transportador")

spaceship.velocity = 130
console.log(spaceship)


class ResourceProcessStation{

    constructor(name, monthlyProcessedLoad){
        this.anme = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    // Será interpretado como variável por ter get em sua composição
    get weeklyProcessedLoad(){
        return this.monthlyProcessedLoad / 4
    }

}

let resourceProcessor = new ResourceProcessStation('Gaia', 400)
// Note-se que você não chama como método usando parênteses e sim como variavél
console.log(resourceProcessor.weeklyProcessedLoad)
resourceProcessor.monthlyProcessedLoad = 500
console.log(resourceProcessor.weeklyProcessedLoad)