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
}