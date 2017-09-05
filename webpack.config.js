const path = require('path');

const APP = path.resolve(__dirname, './src');

module.exports = {
  context: APP,
  entry: './main',
  output: {
    path: APP,
    filename: './bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    host: '0.0.0.0',
    public: '192.168.1.20:8080'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
