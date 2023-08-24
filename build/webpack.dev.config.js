const path = require('path');
const webpack = require('webpack');
const Dotenv  = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "index.js"
  },
  plugins: [
    new Dotenv (),
  ]
}
