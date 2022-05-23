const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const html = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'my-webpack-bundle'
    },
    modules: {
        rules: [
            {
                test: /^.*\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new html({
            template: ``
        })
    ],
    devServer: {
        port: 9999
    }
}