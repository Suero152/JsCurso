// Fazendo uma classe chamada Spaceship
export default class Spaceship{

    constructor(name, maxGJ, currentGJ) {
        this.name = name
        this.maxGJ = maxGJ
        this.currentGJ = currentGJ
    }
    // Fazendo um método get que retorna a carga da nave em porcentagem.
    get getGJPercentage(){
        return this.currentGJ * 100 / this.maxGJ
    }

}