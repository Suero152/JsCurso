// Exportando uma classe para o motor da Spaceship
export default class SpaceshipEngine{

    constructor(spaceship){
        this.spaceship = spaceship
    }

    // Fazendo um método com promise.
    ignite(){
    return new Promise((resolve, reject) =>{
            // Utilizando o método Get da spaceship para identificar a porcentagem.
            let chargePercentage = this.spaceship.getGJPercentage.toFixed()
            if(chargePercentage > 30){
                console.log(chargePercentage)
                // Utilizando resolve para validar o promise.
                resolve(`A nave teve sua partida autorizada, carga atual: ${chargePercentage}%.`)
            }else{
                console.log(chargePercentage)
                // Utilizando reject para invaliadar o promise.
                reject(`A nave teve sua partida desautorizada, carga atual: ${chargePercentage}%.`)
            }
        })
    }

}

