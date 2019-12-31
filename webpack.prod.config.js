const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.config");
const TerserPlugin = require("terser-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VersionFile = require('webpack-version-file');

module.exports = merge(common,
  {
    mode: "production",
    devtool: "source-map",
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/web/index.html",
        filename: "./index.html"
      }),
      new VersionFile({
        template: 'version.ejs',
        output: './dist/version.json'
      }),
      new CopyPlugin([
        { from: '.well-known', to: '.well-known' }
      ]),
      new CleanWebpackPlugin()
    ],
    optimization: {
      minimizer: [new TerserPlugin()]
    },
  }
);
