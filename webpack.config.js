module.exports = {
    entry: "./app/components/main.js",
    output: {
        path: __dirname + '/public/scripts',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    devtool: 'source-map'
};