const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const html = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'my-webpack-bundle'
    },
    module: {
        rules: [
            {
                test: /^.*\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /^.*\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new html({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9999
    },
    // resolve: {
    //     extensions: ['.js','.vue']
    // }
}