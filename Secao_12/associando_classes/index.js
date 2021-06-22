// Criando uma classe para um capitão de uma nave

class Captain{

    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }

}

class Spaceship {

    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours){
        this.name = name
        this.crewQuantity = crewQuantity
        // Instânciando um objeto para o this.captain
        this.captain = new Captain(captainName, captainAge, captainFlightHours)
        // Então o capitão vai receber uma classe do tipo capitão, com objetos e métodos se existentes
        // Assim se tornando um objeto interno
    }

}

let spaceship =  new Spaceship('Artemis', 13, 'Suero', 14, 15000)
console.log(spaceship)
/*Spaceship {
  name: 'Artemis',
  crewQuantity: 13,
  captain: Captain { name: 'Suero', age: 14, flightHours: 15000 }
} */