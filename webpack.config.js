const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {

    mode: 'development',
    target: "node",
    node: { //if this is not here, express will revolt
        __dirname: false,
        __filename: false
    },
    entry: ["@babel/polyfill", "./src/server.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    externals: [nodeExternals()], //to avoid bundling node_modules but we avoided it twice here. This is just for demonstration of two ways
    module: {
        rules: [{
            test: /\.js?$/, //any .js file
            loader: 'babel-loader'
        }]
    },
    devtool: 'none', //inline-source-map
}