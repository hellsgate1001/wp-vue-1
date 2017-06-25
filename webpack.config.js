const path = require('path');

const APP = path.resolve(__dirname, './src');

module.exports = {
  context: APP,
  entry: './main',
  output: {
    path: APP,
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: '/node_modules',
        loader: 'babel',
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
