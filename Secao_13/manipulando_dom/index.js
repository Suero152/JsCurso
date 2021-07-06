function addNewPhone(){
    // Criando um const chamado phoneForm
    // Que ira receber o primeiro elemento do caminho form.phones
    const phoneForm = document.querySelector('form.phones')
    // Criando um const chamado newPhone form
    // Que ira receber o primeiro filho do phoneForm e clonar ele.
    // O true significa se será um deepClone. Se for true ele irá clonar todas propriedades/filhos da tag
    // e se for false ele irá clonar apenas a tag
    const newPhone = phoneForm.children[0].cloneNode(true)
    // Aqui ele pega a posição do número de telefone e então pega o tamanho da lista de filhos do phoneForm.
    // Somando mais um ele consegue a posição atual do numero.
    const phonePosition = phoneForm.children.length + 1
    // Chamando o elemento clonado selecionando a tag label e mudando o texto com innerText
    newPhone.querySelector('label').innerText = "Telefone " + phonePosition + ": "
    // Adicionando um novo filho a phoneForm
    phoneForm.appendChild(newPhone)
}

function printPhones(){
    let message = ''
    // Criando uma const com uma lista de todas tags input que tem o atributo name como phone
    const phones = document.querySelectorAll("input[name='phone']")
    // Usando forEach para que podemos fazer a formatação da mensagem
    phones.forEach((phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + '\n'
    })
    // Alertando a mensagem final.
    alert(message)
}