const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    // port: 8000,

}