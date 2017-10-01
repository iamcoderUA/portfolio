const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src/js/main.js'),
  mod: path.join(__dirname, 'src/js/modules'),
  build: path.join(__dirname, 'prod/js'),
};

const config = {
  entry: PATHS.source,
  output: {
    path: PATHS.build,
    filename: '[name].js',
    library: '[name]',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
    ],
  },
  // plugins: [
  //   new UglifyJSPlugin({
  //     sourceMap: true,
  //   }),
  // ],
};

module.exports = config;

webpack(config);

