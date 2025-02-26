const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js')

const { merge } = require('webpack-merge')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[fullhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /\.m\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.m\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './public/manifest.json', to: './manifest.json' }
            ]
        })
    ]
})
