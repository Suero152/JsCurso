alert("Olá, seja bem-vindo.")

const spaceshipName = prompt("Qual é o nome de sua nave?")
const charToReplace = prompt("Qual é o caractere que você deseja substituir?")
const charWhoReplaces = prompt('E por qual caractere você deseja substituir o "' + charToReplace + '" ?')

let newSpaceshipName = ''

for(let l = 0; l < spaceshipName.length; l++){
    // 1°; - Definindo variavel 2°; Verificando se é menor que o length da string 3°; Adicionando 1 ao indice. 'i'
    if (spaceshipName[l] == charToReplace) {
        newSpaceshipName += charWhoReplaces
    }
    else {
        newSpaceshipName += spaceshipName[l]
    }
}

alert("O novo nome é: " + newSpaceshipName)