console.log("Hello, World!")
let dobras = 0

alert("Olá, seja bem-vindo à nave. \nA seguir pediremos algumas informações.")

const naveName = prompt("Escolha meu nome!")
let dobraAuth = prompt("Deseja entrar em dobra especial? \n 1 - Sim. \n 2 - Não.")

/* Tentativa falha com Switch
switch (dobraAuth){
    case 1:
        while (dobraAuth == 1){
            dobraAuth = prompt("Deseja entrar em dobra especial? \n 1 - Sim. \n 2 - Não.")
            alert("Dobra realizada.")
            dobra += 1
        }
        break;
    case 2:
        alert("A viagem está sendo finalizada . . .")
        break;
    default:
        alert("A viagem está sendo finalizada . . . .")
        break;
}
*/

while (dobraAuth == '1'){ // While Inicial
    dobras += 1  // Vai incrementar + 1 para dobras. (É realizado primeiro  por que se fosse em case não iria contabilizar a primeira dobra)
    dobraAuth = prompt("Deseja realizar a próxima dobra? \n 1 - Sim. \n 2 - Não.")
    /*switch (dobraAuth){
        case "1":
            dobraAuth = prompt("Deseja realizar a próxima dobra? \n 1 - Sim. \n 2 - Não.")
            break;
        case "2":
            alert("A viagem está sendo finalizada...") // Caso seja 2 finalizará a viagem.
            break;

        default:
            break;
    } */ // Possível uso de Switch (Não é bom.)
}

alert("Viagem finalizada." + "\n" + "Nome da nave: " + naveName + "\n" + "Dobras efetuadas: " + dobras) 
// Output do Resultado!