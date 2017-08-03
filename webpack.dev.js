const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        publicPath: '/dist/',
        host: "0.0.0.0",
        port: 3009,
        proxy: {
            "**": "http://localhost:8100"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};
