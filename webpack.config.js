const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './cli/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index0.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@libs': path.resolve(__dirname, 'cli/libs'),
      '@main': path.resolve(__dirname, 'src/launchOperaPlay')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [],
  watch: true
};
