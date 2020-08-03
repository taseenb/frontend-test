const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Environment
const NODE_ENV = process.env.NODE_ENV
const isProd = NODE_ENV === 'production'

// Plugins
const cleanupPlugin = new CleanWebpackPlugin()
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/static/index.html'
})
const miniCssPlugin = new MiniCssExtractPlugin()

// Dev server: proxy local api server + HMR
const devServer = {
  port: 3000,
  open: true,
  historyApiFallback: true,
  proxy: {
    '/api': 'http://localhost:8080'
  },
  hot: true
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProd ? { loader: MiniCssExtractPlugin.loader } : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: isProd ? undefined : devServer,
  plugins: [cleanupPlugin, htmlPlugin, miniCssPlugin]
}
