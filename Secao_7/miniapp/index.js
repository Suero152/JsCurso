let entradaDataDeLancamento = prompt("Digite a data de partida. ( DD/MM/AAAA )")

let DataLancamento = moment(entradaDataDeLancamento, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - DataLancamento

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida. \n 1 - Segundos \n 2 - Minutos \n 3- horas \n 4- Dias")

if (chosenOption == "1") {
    let segundosLancamento = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: " + segundosLancamento + " segundos.")
} else if (chosenOption == 2) {
    let minutosLancamento = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutosLancamento + " minutos.")
} else if (chosenOption == 3) {
    let horasLancamento = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + horasLancamento + " horas.")
} else if (chosenOption == 4) {
    let diasLancamento = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + diasLancamento + " dias.")
} else{
    alert("A opção que você escolheu é inválida.")
}
