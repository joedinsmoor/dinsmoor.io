const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: "./build",
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
	exclude: /node_modules/,
        use: ['babel-loader']
          
      }   
        ]
      },
  plugins: [
	new HtmlWebpackPlugin({
		template: path.resolve('./index.html'),
	}),
	]
};
