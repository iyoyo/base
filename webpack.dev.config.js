/**
 * 本地预览
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path:path.join(__dirname, './example'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            vlc: './src/index',
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [


        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                babel:{
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: '../example/index.html',
            template: './src/template/index.ejs'
        }),
        new FriendlyErrorsPlugin()
    ]
});