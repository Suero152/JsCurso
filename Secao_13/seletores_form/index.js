function showInfo(){
    // Aqui pegamos o valor do input com nome name
    const name = document.querySelector("input[name='name']").value;
    // E aqui pegamos o text da option do select com nome color
    const favoriteColor =  document.querySelector("select[name='color'] option:checked").text
    // Aqui pegamos o valor do check no input com nome like-programming
    const likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    // No developer-options devemos utilizar querySelectorAll pelo usuário consegui marcar mais de uma opção.
    const developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    // Aqui criamos uma lista vazia
    let optionsValue = []
    // E utilizamos .forEach para colocar cada elemento de developerOptions em optionsValue
    developerOptions.forEach(element => {
        optionsValue.push(element.value)
    })
    // Usamos join para concatenar cada string de optionsValue
    // Em optionsChecked
    let optionsChecked = optionsValue.join(", ")
    // E alertamos nossa string.
    alert( " Nome: " + name + "\n Cor primária: " + favoriteColor + "\n Gosta de programar? " + likeProgramming + 
    "\n Conhecimentos em programação Web: " + optionsChecked)
}