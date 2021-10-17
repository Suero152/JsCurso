const path = require("path")

module.exports = {
    entry: {
        index: './src/index.js', // Arquvio a ser lido pelo webpack.
        galaxy: './src/galaxy.js'
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

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        liveReload: true
    }

}