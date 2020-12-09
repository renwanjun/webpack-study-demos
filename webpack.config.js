const path = require("path")
const webpack = require("webpack")


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?wrapper=window',
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _:'lodash'
      join: ['lodash', 'join']
    })
  ]
}