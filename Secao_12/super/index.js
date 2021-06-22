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

class TransportSpaceship extends Spaceship{
    // Imagine que eu quero adicionar algo ao construtor... como uma carga para a nave de transporte
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight){
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acelleration){
        console.log('Nave ' + this.name + ' acelerada em '  + acelleration / 2 + 'km/s')
        this.currentVelocity += ( acelleration / 2 )
        if(this.currentVelocity > this.maxRecommendedVelocity){
            console.log("VELOCIDADE MÁXIMA ULTRAPASSADA.\nDiminua ou poderá provocar danos à nave.")
        }
    }
}

let transportSpacehip = new TransportSpaceship('Transportadora', 4, 100, 400)
console.log(TransportSpaceship)
transportSpacehip.speedUp(210)