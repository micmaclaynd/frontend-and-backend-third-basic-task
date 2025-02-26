const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')

const { LoaderOptionsPlugin } = require('webpack')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.c\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(png|jpg|webp|svg)$/,
                type: 'asset',
                exclude: /\.c\.svg$/
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, './src/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        }),
        new Dotenv({
            path: './.env.local'
        })
    ]
}
