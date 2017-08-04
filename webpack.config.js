webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    './src/index.js', './public/scss/main.scss',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader!sass-loader",
          }),
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.woff2?$|\.ttf$|\.eot$|\.png|\.jpe?g|\.gif$/,
          loader: 'file-loader'
      },
      {
          test: /\.svg?$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015,presets[]=react!react-svg-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin("public/build/production.css"),
  ]
};
