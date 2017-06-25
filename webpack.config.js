var path = require('path');
var webpack = require ('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CommonsChunkPlugin } = require('webpack').optimize;

var extractStyles = new ExtractTextPlugin({
            filename: 'css/styles.css',
            allChunks: true
});

module.exports = {
    context: __dirname + '/src',

    entry: {
        polyfills: './polyfills.ts',
        vendor: './vendor.ts',
        app: './main.ts'
    },
    
    output: {
        filename: '[name].bundle.js',
        library: '[name]',
        path: __dirname+'/dist'
    },

    resolve: {
        extensions: ['.js', '.ts', '.html', '.sass', 'css']
    },

  //  devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.ts$/, 
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular-router-loader'
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            }, {
                test: /\.html$/,
                use: 'raw-loader'
            },{
                test: /\.css$/,
				use: ['style-loader','css-loader']
            },
            {
                test: /\.(scss$|sass)$/,
                use: ['css-hot-loader'].concat(extractStyles.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }))
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
        ]
    },

    plugins:[
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            __dirname+'/src'
        ),
        new CopyWebpackPlugin([
            { 
                from: 'assets', to: '../dist', toType: 'dir'
            }
        ]),
        new HtmlWebpackPlugin({
            "template": "./index.html",
            "filename": "./index.html",
            "hash": false,
            "inject": true,
            "compile": true,
            "favicon": false,
            "minify": false,
            "cache": true,
            "showErrors": true,
            "chunks": "all",
            "excludeChunks": [],
            "title": "Likeshop",
            "xhtml": true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        //new webpack.optimize.UglifyJsPlugin({}),
        extractStyles
    ],

    devServer: {
        host: 'localhost',
        port: 9000,
        historyApiFallback: true
    }
};