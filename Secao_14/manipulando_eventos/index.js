// Manipulando eventos.
function doChange(){
    alert(event.target.value)
}

const sampleInput = document.querySelector('input[name="sample-input"]')
// Note que quando usamos manipulamos pelo JS
// Chamamos o objeto da função e não chamamos ela.
sampleInput.addEventListener('change', doChange)

const changeEvent = new Event("change")
// Chamando um evento pelo JS
sampleInput.dispatchEvent(changeEvent)


// E então removemos assim.
sampleInput.removeEventListener('change', doChange)