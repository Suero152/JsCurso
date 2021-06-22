// Os métodos estáticos são chamados assim pois são chamados diretamente na classe, quando temos algo que não vai se alterar
// independentemente da instância do objeto
class ResourceProcessorStation {

    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    // Criando o método estático
    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

// Note que eu nem precisei instanciar um objeto para utilizaro método
let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)
console.log(totalProcessing)

let processor = new ResourceProcessorStation('Gaia', 2000)
/* calculateProcessInHours is not a function
processor.calculateProcessInHours() */

let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(totalProcessed)