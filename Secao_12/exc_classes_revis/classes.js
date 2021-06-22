
// Criando a classe-pai
class Spaceship {

    // Criando uma variável estática que retorna a taxa de desaceleração
    static get decellerationRate() {
        return 0.17
    }

    // Método construtor
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }

    // Função para SpeedUP
    speedUp(acelleration) {
        this.currentVelocity += (acelleration * (1 - this.decellerationRate))
        alert('A nave ' + this.name + ' foi acelerada em ' + acelleration * (1 - this.decellerationRate) + 'km/s')
        return (acelleration * (1 - this.decellerationRate))
    }

}

// Classe BSPCHP que herda de Spaceship
class BattleSpaceship extends Spaceship {

    // Reescrevendo método construtor com super
    constructor(name, crewQuantity, availableGuns) {
        super(name, crewQuantity)
        this.availableGuns = availableGuns
        this.currentVelocity = 0
    }

}

// Classe TSPCHP que herda de Spaceship
class TransportSpaceship extends Spaceship {

    // Reescrevendo método construtor com super
    constructor(name, crewQuantity, availableSeats) {
        super(name, crewQuantity)
        this.availableGuns = availableSeats
        this.currentVelocity = 0
    }
}

let a = new Spaceship('oi', 3)

a.speedUp(30)
console.log(a)

//FIXME resultado de velocidade dando NaN