// Criando a classe

class SpacialStation {

    // Aqui estó criando um método construtor, que será usado 
    // como parâmetro para um novo objeto dessa Classe.
    constructor(name, platformsQuantity) {
        // Name vai receber name
        this.name = name
        // platformsQuantity vai receber platformsQuantity
        this.platformsQuantity = platformsQuantity
    }

}

let observatory = new SpacialStation("Observatório Suereus", 40)

console.log(observatory)

class Spaceship{

    // Criando parâmetro padrão
    constructor(myName, type='Descoberta'){
        this.name = myName
        this.type = type
    }

}

let darwin = new Spaceship('Darwin')
let helmet= new Spaceship('Helmet', 'Batalha')
console.log(darwin, helmet)