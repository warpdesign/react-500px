var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    package_json = require('./package.json');

module.exports = {
    /* line numbers when debugging */
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8888',
        'webpack/hot/only-dev-server',
        /* default to index.js file since there's no filename here */
        'es6-promise',
        'whatwg-fetch',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
        // enable if higher compatibility with React is needed
        // alias: {    
        //     "react": "preact-compat",
        //     "react-dom": "preact-compat"
        // }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [ // ?presets[]=react,presets[]=es2015,presets[]=stage-0
                        'react',
                        'es2015',
                        'stage-0'
                    ],
                    plugins: [
                        ["transform-react-jsx", { "pragma": "h" }]
                    ]
                }
            },
            { test: /\.css$/,
                use: [ 
                { loader: "style-loader" },
                { loader: "css-loader" }
                ]
            }
        ]
    },
    mode: 'production',
    devServer: {
        host: '127.0.0.1',
        port: '8888',
        proxy: {
            '/proxy/*': {
                target: 'http://experiments.warpdesign.fr/',
                changeOrigin: true
            }
        },
        hot: true
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new WebpackNotifierPlugin({alwaysNotify:true}),
        new HtmlWebpackPlugin({
            template: 'src/html/index.ejs',
            title: package_json.name
        })
    ]
}