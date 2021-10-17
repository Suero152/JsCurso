const presets = [
    [
       "module:@babel/preset-env", // Ele espera como primeiro elemento o pacote que iremos utilizar para transpilar o código.
        {
            useBuiltIns: "usage",
            corejs: "3.3.2" // Estamos utilizando agora o core.js para importar funções de versões futuras que não funcionam nas versões passadas para que a conversão funcione bem.
            // Isso só funciona quando o core-js está alinhado com o babel.
        }
    ]
]

module.exports = { presets }