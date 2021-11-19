const process = require('process')

// Isso mostra no console entrada de parametros do usuário como o exemplo abaixo:
// node index.js --myName Oreus
/*
Console Output:

[
  'C:\\Program Files\\nodejs\\node.exe', // Local de onde o node está instalado.
  'JsCurso\\Secao_22\\input_output\\index.js', // Onde o Node está sendo rodado
  '--myName', // Parâmetro
  'Oreus' // Entrada do parâmetro
]

*/
console.log(process.argv);

// Exibindo inputs no console.

// Aqui fazemos com que o process identifique cada letra que o usuário digita na execução
console.log("Digite seu nome:")
process.stdin.on('data', (keyboard) =>{
    // Após o usuário apertar enter esse texto ira aparecer, com o argumento que seria o que o usuário escreveu.
    process.stdout.write("Texto do usuário: ", keyboard);
    // Finalizando o processo.
    process.exit();
})