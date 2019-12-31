const path = require("path");

const AppCachePlugin = require('appcache-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "web/src/index.js"),
  output: {
    path: path.resolve(__dirname, "web/dist"),
    publicPath:
      "/",
    filename:
      "bundle.web.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "web"),
          path.resolve(__dirname, "shared"),
          path.resolve(__dirname, 'node_modules', 'react-native-storage'),
        ],
        exclude: /node_modules\/(?!(react-native-storage))/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/flow", "@babel/react", "@babel/env"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "module-resolver",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              "@babel/plugin-proposal-function-sent",
              "@babel/plugin-proposal-export-namespace-from",
              "@babel/plugin-proposal-numeric-separator",
              "@babel/plugin-proposal-throw-expressions",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-import-meta",
              ["@babel/plugin-proposal-class-properties", { loose: false }],
              "@babel/plugin-proposal-json-strings"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.woff$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      },
      {
        test: /\.png$/,
        use: {
          loader: "file-loader?name=images/[name].[ext]"
        }
      },
      {
        test: /\.(t|o)tf$/,
        use: {
          loader: "file-loader?name=fonts/[name].[ext]"
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new AppCachePlugin({
      cache: ['**/*.jpg'],
      settings: ['prefer-online'],
      output: 'isomorphic_react.appcache'
    })
  ],
  resolve: {
    extensions: [".web.js", ".js"]
  }
};
