// Fazendo uma função de conversão de AU para KM

module.exports = {
    get AU_IN_KILOMETERS(){
        return 149587870
    },
    conversionFunction: function conversion(distance){
        return (distance * this.AU_IN_KILOMETERS).toFixed(2) // O toFixed faz com que o número só tenha 2 casas decimais.
    },
}