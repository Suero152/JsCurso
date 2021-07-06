function verifyEnablement(){
    // Aqui utilizamos um seletor css para buscar o valor.
    const value = document.querySelector('select').value
    if (value == "disabled"){
        // E então é possível deixar o atributo disabled do input como true.
        document.querySelector('input[name="some-text"]').disabled = true
        const pElement = document.getElementById('message')
        pElement.innerText = 'O formulário foi desativado.'
        pElement.style.color = 'red'
    // Utilizando else para deixar enabled.
    }else{
        document.querySelector('input[name="some-text"]').disabled = false
        const pElement = document.getElementById('message')
        pElement.innerText = 'O formulário está ativado.'
        pElement.style.color = 'green'
    }
    
}