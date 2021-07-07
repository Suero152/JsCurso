// Adicionando eventos dentro do HTMl.
document.querySelector('select[name="select-option"]').addEventListener("change", function(){
    console.log(event.target.value)
})