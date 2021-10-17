// Utilizando o Rest Param.

function greetCrew(message, name) {
    console.log(`${message}, ${name}`)
}
greetCrew("Seja bem-vindo", "Arthur")


// Caso necessário, podemos fazer com que vários nomes possam ser usados.

function greetCrew(message, names) {
    names.forEach(name => console.log(`${message}, ${name}`))
}
greetCrew("Sejam bem-vindos", ["Arthur", "Flops", "Kcis", "Salocin", "Oreus", "Suero"])

// Veja como o rest param consegue simplificar isso no próximo exemplo.
function greetCrew(message, ...names) {// Lembre-se, o Rest Param deve ser o último parâmetro da função
    console.log(`${message}, ${names}`)
}
greetCrew("Sejam ben-vindos", "Oreus", "Salocin", "Kcis", "Nidulob")