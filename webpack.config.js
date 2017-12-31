const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS        = new ExtractTextPlugin('[name].bundle.css');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  context: path.resolve(__dirname),
  entry: ['./src/js/app.js', './src/scss/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader'
      }]
    },{
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader','sass-loader'])
    },
    {
      test: /\.(html)$/,
      use: [{
        loader: 'html-loader'
      }]
    }]
  },
  plugins:[
    extractCSS,
    new CopyWebpackPlugin([
      // {output}/to/file.txt
      { from: './src/index.html'}
    ])
  ]
}

module.exports = config
