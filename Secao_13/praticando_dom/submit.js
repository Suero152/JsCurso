class Submit{

    // Método para a criação do imovel
    addProperty(){
        // Impede a pagina de reiniciar
        event.preventDefault()
        const kind = document.querySelector('select[name="kind"]').value
        console.log(kind)
        const area = document.querySelector('input[name="area"]').value
        console.log(area)
        const rented = document.querySelector('input[name="rented"]').checked
        console.log(rented)
        const property = new Property(kind, area, rented)
        console.log(property)
        // Chama dois métodos para adição do imovel a lista
        this.addToList(property)
        this.cleanForm()
    }

    addToList(property){
        let li = document.createElement('li')
        const info = ' Tipo: ' + property.kind + ' ( Área: ' + property.area + 'm² )'
        if (property.rented){
            const rentedMark = this.createRentedMark()
            li.appendChild(rentedMark)
        }
        // Utilizamos innerHTML pois depois que se adiciona filhos na tag não é mais possível utilizando innerText
        li.innerHTML += info
        const buttonRemove = this.createRemoveButton()
        li.appendChild(buttonRemove)
        document.getElementById('list').appendChild(li)
    }

    createRentedMark(){
        const mark = document.createElement('span')
        mark.style.color = 'white'
        mark.style.background = 'red'
        mark.innerText = 'ALUGADO'
        return mark
    }

    createRemoveButton(){
        const button = document.createElement('button')
        button.style.border = '0'
        button.setAttribute('onclick', 'app.remove()')
        button.innerText = 'Remover'
        return button
    }

    cleanForm(){
        document.querySelector('input[name="area"]').value = ''
        document.querySelector('input[name="rented"]').checked = false
    }

    remove(){
        const li = event.target.parentNode
        document.getElementById('list').removeChild(li)
    }
}
// Criando uma variavel global a ser utilizada na pagina.
const app = new Submit()