const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const html = require('html-webpack-plugin')
console.log(path.join(__dirname, 'public'))
module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'my-webpack-bundle.js'
    },
    module: {
        rules: [
            {
                test: /^.*\.scss$/,
                use: ['style-loader', 'css-loader' , 'sass-loader']
            },
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
    resolve: {
        extensions: ['.js', '.json','.vue', '.scss']
    }
}
