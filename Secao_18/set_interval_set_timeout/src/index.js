// Utilizando o set timeout passando como parâmetro uma função e um delay de milissegundos respectivamente.
setTimeout(()=> {console.log("Eu fui executado após 2 segundos.")}, 2000)
// Agora setInterval.
setInterval(()=> {console.log("Eu estou sendo executado a cada 1 segundo.")}, 1000)

// Uma coisa interessante é que essas funções do JavaScript retornam um ID em sua execução para que seja possível
// Parar sua execução caso necessário.
// Podemos conseguir o ID delas desta forma.

let timeout = setTimeout(()=> {console.log("Eu fui executado após 2 segundos.")}, 2000)
// Podemos cancelar a execução do setTimeout dessa forma.
clearTimeout(timeout)
let seconds = 0
let interval = setInterval(
    ()=> {
        seconds += 1
        console.log(`Eu estou sendo executado a cada 1 segundo. Já somei ${seconds} segundos desde minha execução.`)
        if(seconds >= 10){clearInterval(interval)}
    }
    , 1000)
// Podemos cancelar a execução do setInterval também.
