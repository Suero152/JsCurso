distanciaAnosLuz = prompt("Insira sua distância em anos luz.")

opcSelecionada = prompt("Em qual unidade de distância você deseja calcular?\n1- Parsec \n2- UA ( Unidade astronomica )\n3- KMs (kilometros)")

let convDesejada
let distConvertida

switch (opcSelecionada) {
    case '1':
        convDesejada = "PARSEC/s"
        distConvertida = 0.306601 * distanciaAnosLuz
        break;
    case '2':
        convDesejada = "UAs"
        distConvertida = 63241.1 * distanciaAnosLuz
        break;
    case '3':
        convDesejada = "KMs"
        distConvertida = (9.5 * distanciaAnosLuz) * 10**12
        break;

    default:
        convDesejada = "Unidade não identificada."
        distConvertida = "Conversão fora de escopo."
        break;

}
alert("Distância em anos luz: " + distanciaAnosLuz + "\n" + convDesejada + " : " + distConvertida)


/* -- Outra forma de se fazer sem switch.
if(opcSelecionada == 1){
    convDesejada = "PARSECs"
    distConvertida = 0.306601 * distanciaAnosLuz
    alert("Distância em anos luz: " + distanciaAnosLuz + "\n" + convDesejada + " : " + distConvertida)
} else if(opcSelecionada == 2){
     convDesejada = "UAs"
     distConvertida = 63241.1 * distanciaAnosLuz
     alert("Distância em anos luz: " + distanciaAnosLuz + "\n" + convDesejada + " : " + distConvertida)
} else if(opcSelecionada == 3){
    convDesejada = "KMs"
     distConvertida = (9.5 * distanciaAnosLuz) * 10**12
     alert("Distância em anos luz: " + distanciaAnosLuz + "\n" + convDesejada + " : " + distConvertida)
} else{
    alert("Distância em anos luz: " + distanciaAnosLuz + "\n" + "Unidade não identificada" + " : " + "Conversão fora do escopo.")
} */