const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isDev = process.env.NODE_ENV !== 'production'
const isModern = process.env.BROWSERS_ENV === 'modern'

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: {
        main: './src/js/main.js',
    },
    output: {
        filename: '[name]' + ( isModern ? '' : '.fallback' ) + '.js'
    },
    target: 'web',
    devtool: isDev ? 'inline-source-map' : false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js', 'default']
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};

if ( ! isDev && isModern ) {
    module.exports.plugins.push( 
        new BundleAnalyzerPlugin()
    )
}
