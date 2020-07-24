const path = require('path');
const pkg = require('./package.json');

module.exports = {
    entry: './index.js', //location of your main js file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: pkg.name + '.js'  // where js files would be bundled to
    },
    module: {
        rules: [
            {
                test: /\.js$/, //using regex to tell babel exactly what files to transcompile
                exclude: /node_modules/, // files to be ignored
                use: {
                    loader: 'babel-loader' // specify the loader
                } 
            }
        ]
    }
} 