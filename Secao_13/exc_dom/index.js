function saveHouse(){
    // Aqui criamos uma variável chamada area que pega a query ( neste caso é o input) 
    // selecionada em inputs com o name com o valor area
    const area = document.querySelector("input[name='area']").value
    // E a mesma coisa que acontece acima acontece abaixo também
    const number = document.querySelector("input[name='numero']").value
    const neighborhood = document.querySelector("input[name='bairro']").value
    const city = document.querySelector("input[name='cidade']").value

    // Então abaixo pegamos a lista vazia para que se
    // Possamos inserir as informações da casa.

    // Aqui criamos uma nova lista de valores, mas não associamos ela a ninguém.
    // Para que mais tarde possamos alterar ela ao nosso querer.
    const newListValue = document.createElement('li')
    // A função innerText serve para colocar um texto dentro de uma tag, ou seja <li>Texto</li>.
    newListValue.innerText = area + 'm², Número: ' + number + '°, Bairro ' + neighborhood + ' - ' + city
    // então criamos um botão para remover a informação caso isso for desejado.
    const removeButton = document.createElement('button')
    // Botamos o type como button pois o type padrão seria submit
    // então ele enviaria alguma informação em vez de ser só um botão que faz algo
    removeButton.type = 'button'
    removeButton.innerText = 'Remover'
    // Botamos o atributo onde botamos o atributo on click
    // Que vai usar a nossa função removeHouse e passando o parametro this
    // o this significa 'este' ou seja, ele vai eliminar o li onde ele está usando a função parentNode.
    removeButton.setAttribute('onclick', 'removeHouse(this)')
    // Após isso iremosa tribuir newListValue a lista vazia de antes.
    newListValue.appendChild(removeButton)
    
    // Quando desejamos pegar apenas um elemento é recomendado o uso de id
    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button){
    // Criamos a variavel liToRemove que irá ser o li que iremos remover.
    // E então pegamos o pai do botão especificado, que no caso é o botão Remover.
    const liToRemove = button.parentNode
    // Então capturamos o elemento house-list e removemos o child liToRemove.
    document.getElementById('house-list').removeChild(liToRemove)
}