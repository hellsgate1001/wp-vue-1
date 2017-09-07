const path = require('path');
const webpack = require('webpack');

const APP = path.resolve(__dirname, './src');
const sassOpt = {
  sourceMap: true,
  includePaths: [
    path.resolve(APP, '**/*.scss'),
  ],
};

module.exports = {
  context: APP,
  entry: './main',
  output: {
    path: APP,
    filename: './bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    host: '0.0.0.0',
    public: '192.168.1.20:8080',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          quiet: true,
        },
      },
      {
        test: /\.js$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: sassOpt,
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
