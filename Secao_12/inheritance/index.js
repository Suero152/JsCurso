// Uma herança é uma classe que herda características de uma classe-pai
// Essa classe deve ser da relação "é um" para a classe-pai
// Por exemplo, a classe capitão é um da classe humano, ou seja um capitão é um humano.
class Spaceship {

    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acelleration){
        console.log('Nave ' + this.name + ' acelerada em '  + acelleration + 'km/s')
        this.currentVelocity += acelleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            console.log("VELOCIDADE MÁXIMA ULTRAPASSADA.\nDiminua ou poderá provocar danos à nave.")
        }
    }

}

// A classe BSCHP está herdando de Spaceship
class BattleSpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        console.log('Recolhendo armas e parando nave de batalha.')
    }
}

// A classe DSCHP está herdando de Spaceship
class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        console.log('Recolhendo equipamentos de amostras e parando nave de descoberta.')
    }
}

let darwin = new DiscoverySpaceship('Darwin', 10, 200)
let phoenix = new BattleSpaceship('Darwin', 8, 240)
console.log(darwin, phoenix)
darwin.speedUp(210)
phoenix.speedUp(230)

darwin.stop(), phoenix.stop()