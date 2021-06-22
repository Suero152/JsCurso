// Sobrescrita de método é reescrever um método da classe-pai na própria classe-filha se necessário
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
    
    // Para esta nave imagine que eu quero que não possa ser definido uma aceleração.
    // Então só poderemos acelerar um km por vez
    speedUp(){
        console.log('Naves de transportes só aumentam a velocidade em 1km/s')
        console.log('Nave ' + this.name + ' acelerada em '  + '5km/s')
        this.currentVelocity += 5
    }

}

let Aurora = new TransportSpaceship('Transportadora Aurora', 10, 100)
Aurora.speedUp()