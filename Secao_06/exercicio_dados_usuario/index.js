// Exercício pegando dados do usuário. - comentário de uma linha
/* Comentário de várias linhas

*/

console.log("Hello, World!")
alert("Olá, a seguir pediremos algumas informações.")
let nome = prompt("Informe seu nome, por favor.")
let idade = prompt("Informe sua idade, por favor.")
let conf_idade = confirm("Tem certeza que sua idade é " + idade + "?")
alert("Olá " + nome + ",você tem " + idade + " anos e confirmou que tem essa idade assinando o confirm como " + conf_idade)