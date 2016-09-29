var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    package_json = require('./package.json');

module.exports = {
    /* line numbers when debugging */
    devtool: 'inline-source-map',
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
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js'],
        alias: {    
            "react": "preact-compat",
            "react-dom": "preact-compat"
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        address: '127.0.0.1',
        port: '8888',
        proxy: {
            '/proxy/*': {
                target: 'http://experiments.warpdesign.fr/',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin({alwaysNotify:true}),
        new HtmlWebpackPlugin({
            template: 'src/html/index.ejs',
            title: package_json.name
        })
    ]
}