// Iremos criar uma classe para exportar em nosso projeto.
class Planet{

    constructor(name, surfaceArea){
        this.name = name
        this.surfaceArea = surfaceArea
    }

    rotate(){
        console.log(this.name, 'está rotacionando.')
    }

}

// Agora iremos exportar utiizando um recurso do CommonJS
module.exports = Planet
// Vamos agora importar os recursos "planet.js" e "solar_system.js" em index.js