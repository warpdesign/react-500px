var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    package_json = require('./package.json');

module.exports = {
    entry: [
        'whatwg-fetch',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
            },
            { test: /\.css$/, loader: "style!css" }            
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),        
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlWebpackPlugin({
            hash: true,
            title: package_json.name,
            template: 'src/html/index.ejs'
        })
    ]
};