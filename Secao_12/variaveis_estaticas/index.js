// Variaveis estaticas vai ser sempre o mesmo, quase o mesmo conceito de metodo estatico

class Spaceship{

    // Suponhamos que toda nave tem uma taxa fixa de desacerleração, essa taxa fixa seria 15%
    static get decellerationRate(){
        return 0.15
    }

    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acelleration){
        this.currentVelocity += ( acelleration * (1 - Spaceship.decellerationRate) )
    }

    

}

let spaceship = new Spaceship('Apollo')
spaceship.speedUp(100)
console.log(spaceship)