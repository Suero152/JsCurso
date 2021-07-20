// Um REST param serve como um args em Python e também utiliza o spread operator.
function greetsCrew(message, ...names){
    console.log(names)
    names.forEach(name => console.log(`${message}, ${name}`))
}
greetsCrew('Olá seja bem vindo', 'Suero', 'Oreus', 'Kcis')
// Note que ele se for usar um rest param use sempre como o último parâmetro.