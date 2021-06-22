class Spaceship{

    constructor(name, type='Descoberta'){
        this.name = name
        this.type = type
        this.velocity = 0
    }

    speedUp(acceleration=20){
        this.velocity += acceleration
        console.log('A nave foi acelerada em ' + acceleration + 'km/s.')
    }    

}

let artemis = new Spaceship('Artemis')
console.log(artemis)

artemis.speedUp(50)
artemis.speedUp(50)
console.log(artemis)