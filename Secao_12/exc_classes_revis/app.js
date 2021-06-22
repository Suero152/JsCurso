class App {

    constructor() {
        this.spaceshipToInteract = null
    }

    // Método de menu de opções.
    OptionMenu(spaceshipToInteract) {
        let userInput
        let velocityToSpeedUp
        do {
            userInput = prompt('Escolha uma das opções.\n1- Acelerar nave\n2- Trocar de nave\n3- Encerrar programa')
            switch (userInput) {

                case '1':
                    velocityToSpeedUp = prompt('Poderia informar a velocidade para aceleração?')
                    // Utiliza o método speedUp da espaçonave
                    spaceshipToInteract.speedUp(velocityToSpeedUp)
                    break;
                case '2':
                    // Caso o usuário queira trocar de nave o registerPanel será exibido novamente.
                    this.registerPanel()
                    break;
                case '3':
                    // Printando informações da nave
                    alert("Nome da nave:" + spaceshipToInteract.name + "\nQuantidade de tripulantes:"
                        + spaceshipToInteract.crewQuantity + "\nVelocidade antes da parada:" + spaceshipToInteract.currentVelocity)
                    break;

            }
        } while (userInput != '2' && userInput != '3')

    }

    // Criando método de painél de registro
    registerPanel() {
        // Pedindo nome e quantidade de tripulantes
        let name = prompt('Olá, seja bem-vindo. Primeiro nos informe o nome de sua nave.')
        let crew = prompt('E qual seria a quantidade de sua tripulação?')
        let guns
        let type
        let seats
        do {
            type = prompt('Qual seria o tipo do seu veíulo? \n1 - Batalha \n2 - Transporte')
            switch (type) {

                case '1':
                    guns = prompt('Estamos quase lá, qual é o número de arma disponíveis?')
                    this.spaceshipToInteract = new BattleSpaceship(name, crew, guns)
                    // Executando option menu após cadastro
                    this.OptionMenu(this.spaceshipToInteract)
                    break;
                case '2':
                    seats = prompt('Estamos quase lá, qual é o numero de assentos que a nave comporta?')
                    this.spaceshipToInteract = new TransportSpaceship(name, crew, seats)
                    // Executando option menu após cadastro
                    this.OptionMenu(this.spaceshipToInteract)
                    break;
                default:
                    alert('Insira uma opção dentro do escopo.')
                    break;
            }
        } while (type != '1' && type != '2')

    }



}
// Organização pode ser melhor, por exemplo: criar um método chamado start para fazer mais sentido na hora de começar o app.