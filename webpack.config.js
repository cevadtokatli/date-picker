const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                loader: [
                    'style-loader', 'css-loader', 'sass-loader',
                    { 
                        loader: 'postcss-loader', 
                        options: {
                            ident: 'postcss',
                            plugins: [
                                autoprefixer({
                                    browsers: ['last 2 versions']
                                })
                            ]
                        } 
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }
};