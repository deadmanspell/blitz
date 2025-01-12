// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './lib/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'public')
      },
    compress: true,
    port: 9000
  }
};
