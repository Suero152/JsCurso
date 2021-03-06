<<<<<<< HEAD
const path = require("path")

module.exports = {
    entry: {
        index: './src/index.js', // Arquvio a ser lido pelo webpack.

    },

    output: {
        filename: '[name].bundle.js', // Fazendo um padrão de output.
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [ // Com o rules podemos fazer com que cada arquivo que o webpack passa o babel faça algo antes.
            {
                test: /\.js$/, // Aqui usamos uma expressão regular para que cada arquivo terminado em .js ocorra algo.
                use: ['babel-loader']
            }
        ]
    },

    watch: true, // Processamento automatico no servidor de desenvolvimento após mudança nos arquivos.
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true
        },
        liveReload: true
    }

=======
const path = require('path')

module.exports = {
    // Entradas
    entry: {
        index: './src/index.js',
    },
    // Padrão em salvar arquivos.
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // Para cada arquivo termindo em .js
        // Utilize babel-loader
        rules: [
            { test: /\.js$/,
            use: ['babel-loader']
            }
        ],
    },
    // Vai procurar por qualquer alteração nos arquivos para processar o webpack denovo
    // Aqui ja estamos utilizando npm install webpack-dev-server --save-dev
    watch: true,

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        liveReload: true
    }
>>>>>>> 6b4b4bff7bae8f504ba1dd10b0be77802bdd578f
}