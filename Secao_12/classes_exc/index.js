// Criando classe Spaceship
class Spaceship {

    // Método construtor, com atributos Hitched e DoorOpen como false pois podem ser alterados mais tarde
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.isDoorOpen = false
    }

    // Método que torna os atributos anteriores de false para true
    hitch(){
        this.isHitched = true
        this.isDoorOpen = true
    }
}


// Função para printar lista de espaçonaves engatadas
function printSpaceshipList(spaceships){
    // Criando uma string para ser alertada
    let spaceshipList = ''
    // Usando o método forEach com uma função anônima
    spaceships.forEach((spaceship, index) => {
        spaceshipList += ( index + 1 ) + ' - ' + spaceship.name + " ( " + spaceship.crewQuantity + ' tripulantes )\n'
    })
    alert(spaceshipList)
}

// Função para mostrar menu
function showMenu(){
    let userPrompt 
    // Enquanto a reposta não for uma das disponíveis, ele irá mostrar o menu.
    // A operção só torna True por causa dos sinais != que transformam o False em True.
    // Então se Userprompt for diferente de 1 2 e 3 ele ira retornar true e vai entrar no while.
    while (userPrompt != '1' && userPrompt != '2' && userPrompt != '3'){
        userPrompt = prompt('O que deseja fazer?\n1 - Engatar nave\n2 - Imprimir naves\n3 - Encerrar Programa')
    }
    // Ao final ele retorna a escolha do usuário
    return userPrompt
}

// Função para criar spaceship
function createSpaceship(){
    let spaceshipName = prompt('Olá, insira o nome de sua nave para que possamos prosseguir.')
    let spaceshipCrewQtt = prompt('Estamos quase lá, insire a quantidade de tripulantes da sua nave.')
    // Utilizando de prompts anteriores para criação de um novo objeto do tipo nave
    let spaceship = new Spaceship(spaceshipName, spaceshipCrewQtt)
    // Retorna o objeto da espaçonave
    return spaceship
}

let userPrompt
// Cria uma lista para receber objetos do tipo espaçonave
let hitchedSpaceships = []

// Enquanto a resposta não for 3 vai mostrar o menu
while(userPrompt != '3'){
    userPrompt = showMenu()
    switch (userPrompt) {
        case '1':
            // Quando o caso do userPrompt for 1 ele irá criar uma nova 
            //espaçonave que automaticamente sera pushada para a lista de espaçonaves engatadas
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break;
        case '2':
            // Utiliza a função de printar espaçonaves com a lista de espaçonaves engatadas
            printSpaceshipList(hitchedSpaceships)
            break;
    }
}

// Fim do código!