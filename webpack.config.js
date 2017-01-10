/**
 * Created by rj on 1/8/2017.
 */
'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // Entry point for static analyzer
    entry: [
        './src/js/main.js',
        './index.html'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader']},
            {test: /\.hbs$/, loader: 'handlebars-loader'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')},
            {test: /\.html$/, loader: 'file-loader?name=[name].[ext]'}
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

    devtool: '#inline-source-map',

};