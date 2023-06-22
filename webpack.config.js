// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
      favicon: "/img/favicon.ico"
    }),
    /*new HtmlWebpackPlugin({
      template: "/html/contact.html",
      inject: true,
      favicon: "/img/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: "/html/porfolio.html",
      inject: true,
      favicon: "/img/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: "/html/about.html",
      inject: true,
      favicon: "/img/favicon.ico"
    }),*/

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(css)$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "style-loader", 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|ico)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
