let spaceship = {
    velocity: 0,
    speedUp: function (acelleration) { this.velocity += parseInt(acelleration) }
} // Criando spaceship com valores iniciais

// Função para criar um painél de registro
function registerPanel() {
    // Criando prompts automaticamente settando tais propriedades da espaçonave.
    spaceship.name = prompt('Qual é o nome da nave?')
    spaceship.type = prompt('Por favor, insira o tipo da nave.')
    spaceship.maxVelocity = prompt('Qual seria a velocidade máxima para evitar combustão?')
}

// Criando a função pra abrir um painél de Aceleração da nave.
function acellerationPanel() {
    // do para que ao menos uma vez o while seja executado.
    do {
        let userAct = prompt('Velocidade atual: ' + spaceship.velocity +
            '\nVocê deseja acelerar ou parar a nave?\n' + '1 - Para acelerar.\n' + '2 - Para parar a nave.')

        switch (userAct) {
            case '1':
                let acl = prompt('Informe um número para aceleração.')
                if (spaceship.velocity + parseInt(acl) < spaceship.maxVelocity) {
                    spaceship.speedUp(acl)
                    alert('A nave foi acelerada com sucesso.')
                } else {
                    alert('A nave não pode ser acelerada, o limite máximo pode ser atingido nessa velocidade de aceleração. \n' +
                        'No momento a única coisa que você pode fazer é parar sua nave ou diminuir a velocidade que você quer diminuir.')
                }

                break;

            case '2':
                alert('A nave está sendo parada...')
                alert('Nave parada com sucesso.\n' + 'Nome da espaçonave: ' + spaceship.name + ' ( ' + spaceship.type + ' )'
                    + '\nVelocidade antes da parada: ' + spaceship.velocity)
                break;
            default:
                alert('Opção fora do escopo, tente novamente.')
                break;
        }
    } while (userAct != '2') //While pra saber se a resposta é diferente de 2
}

registerPanel()
acellerationPanel()
