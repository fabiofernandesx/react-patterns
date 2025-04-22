const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 5173,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

module.exports = merge(common, devConfig)
