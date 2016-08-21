const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', __dirname + '/src/app.js'],
        vendor: ['react', 'react-dom', 'react-relay']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[name].js',
        publicPath: '/'
    },
    devtool: 'eval',
    debug: true,
    cache: true,
    context: path.resolve(__dirname, 'src'),
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader:  'babel'
        }]
    },
    node: {
        __filename: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.join(__dirname, 'src'),
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};
