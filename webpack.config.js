const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const config = {
    entry: {
        app: path.resolve(__dirname, 'src/main/resources/static/js/App')
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/dist'),
        filename: '[name].js',
        publicPath: '/dist/'

    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery : "jquery",
            Backbone : "backbone",
            _ : "underscore",
            Handlebars: "handlebars",
            moment : "moment"
        }),
        new CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: Infinity
        })
    ]
};
module.exports = function(env) {
    return webpackMerge(config, require(`./webpack.${env}.js`))
};