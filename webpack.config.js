const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ['./js/index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                '@babel/plugin-transform-react-jsx',
                                {
                                    pragma: 'h',
                                    pragmaFrag: 'Fragment',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.png$/,
                use: 'file-loader?name=assets/images/png/[contenthash].[ext]',
            },
            {
                test: /\.svg$/,
                use: 'file-loader?name=assets/images/svg/[contenthash].[ext]',
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=assets/videos/[name].[ext]',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'build'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/images/png'),
                    to: path.resolve(__dirname, 'build/assets/images/png'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
    ],
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 4200,
        hot: isDev,
    },
    optimization: {
        minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})],
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
