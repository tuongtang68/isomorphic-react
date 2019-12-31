const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const common = require("./webpack.common.config");
const VersionFile = require('webpack-version-file');

module.exports = env => merge(common, {
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    disableHostCheck: true,
    host: '0.0.0.0'
  },
  mode: "development",
  plugins: env && env.runAnalyzer === "false"
    ?
    [
      new HtmlWebPackPlugin({
        template: "./web/public/index.html",
        filename: "./index.html"
      }),
      new VersionFile({
        template: 'version.ejs',
        output: './dist/version.json'
      }),
      new CopyPlugin([
        { from: '.well-known', to: '.well-known' }
      ])
    ]
    :
    [
      new HtmlWebPackPlugin({
        template: "./web/public/index.html",
        filename: "./index.html"
      }),
      new BundleAnalyzerPlugin(),
      new VersionFile({
        template: 'version.ejs',
        output: './dist/version.json'
      }),
      new CopyPlugin([
        { from: '.well-known', to: '.well-known' }
      ])
    ]
}
);
