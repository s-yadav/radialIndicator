var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './docs/radialIndicatorExamples.js',
  mode: env,
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './docs/index.html',
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
