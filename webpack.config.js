const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
