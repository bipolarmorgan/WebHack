let webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            './index.js'
        ]
    },
    devtool: 'cheap-module-source-map',
    output: {
        path: __dirname + '/static',
        filename: 'index.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js', '.css']
    },
    plugins: [
        new webpack.IgnorePlugin(/.js.map$/)
    ]
};