const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpackbar = require('webpackbar')

const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: {
            disableDotRule: true,
        },
        inline: true,
        port: 3000,
        hot: true,
        compress: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },

                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'url-loader?limit=10000',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new Webpackbar(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
            hash: true,
            cache: true,
            showErrors: true,
        }),
    ],
}
