const webpack = require('webpack')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  entry: APP_DIR + '/index.jsx', // 入口文件
  output: {
    path: BUILD_DIR, // 出口路径
    filename: 'bundle.js' // 出口文件名
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    port: 3000, // 服务启动的端口号
    contentBase: "./dist" // 配置当前服务读取的文件目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
      sourceMap: true,
      chunksSortMode: "dependency"
    }),
    new CleanWebpackPlugin() // 不传参数
  ]
}