// REVISAR CÓDIGO

const spaceshipName = prompt("Olá, seja bem-vindo. Qual é o nome de sua nave?")
let spaceshipVelocity = 0
// let velocity = 0
let acellerationHistory = ''


function showMenu(){
    let option

    while (option != '1' && option != '2' && option != '3' && option != '4'){
        option = prompt("Escolha uma dessas opções." + 
                        "\n 1 - Acelerar a nave em 5 km/s" + 
                        "\n 2 - Desacelerar a nave em 5km/s" + 
                        "\n 3 - Imprimir dados de bordo" + 
                        "\n 4 - Sair do programa.") 
    }

    return option
}

function speedUp(velocity){
    let newVelocity = velocity + 5
    acellerationHistory += '+ 5 na aceleração.\n'
    return newVelocity
}

function slowDown(velocity){
    let newVelocity
    if (velocity >= 5) {
        newVelocity = velocity - 5
        acellerationHistory += '- 5 na aceleração.\n'
    }
    else{
        newVelocity = 0
        acellerationHistory += '- 5 na aceleração. [CANCELADO POR VELOCIDADE ESTAR ABAIXO DE 5]\n'
    }

    return newVelocity
}

function printSpaceshipBoardInformations(name, velocity){
    alert('Velocidade Atual da nave ' 
    + name + ': ' + velocity + 
    'km/s' + '\n' 
    + 'Histórico de acelerações/desacelerações:\n' + acellerationHistory)

}

do{
    chosenOption = showMenu()

    switch (chosenOption) {

        case '1':
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break;
    
        case '2':
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break;
        
        case '3':
            printSpaceshipBoardInformations(spaceshipName, spaceshipVelocity)
            break;
    
        case '4':
            alert('O programa será encerrado.')
            break;
        
        default:
            alert("Opção Inválida, por favor insira uma das opções.")
            break;
    }
} while(chosenOption != '4')




// Espaçamento




/* Fazendo sem funções
while (userAct != '4'){
    
    userAct = prompt("Escolha uma dessas opções." + "\n 1 - Acelerar a nave em 5 km/s  \n 2 - Desacelerar a nave em 5km/s \n 3 - Imprimir dados de bordo \n 4 - Sair do programa.")
    
    switch (userAct) {

    case '1':
        velocity += 5
        acellerationHistory += '+ 5 na aceleração.\n'
        break;

    case '2':
        if (velocity >= 5) {
            velocity -= 5
            acellerationHistory += '- 5 na aceleração.\n'
        }
        else{
            acellerationHistory += '- 5 na aceleração. [CANCELADO POR VELOCIDADE ESTAR ABAIXO DE 5]\n'
        }
        break;
    
    case '3':
        alert('Velocidade Atual da nave ' + spaceshipName + ': ' + velocity + 'km/s' + '\n' + 'Histórico de acelerações/desacelerações:\n' + acellerationHistory)
        break;

    case '4':
        alert('O programa será encerrado.')
        break;
    
    default:
        alert("Opção Inválida, por favor insira uma das opções.")
        break;
    }
}
*/