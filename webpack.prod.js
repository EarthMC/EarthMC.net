const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, "src/index.js")
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|JPE?G|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "index.html",
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: "src/index_cn.html",
      filename: "index_cn.html",
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: "src/rules.html",
      filename: "rules.html",
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: "src/rules_cn.html",
      filename: "rules_cn.html",
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: "src/faq.html",
      filename: "faq.html",
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: "src/faq_cn.html",
      filename: "faq_cn.html",
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: "src/privacy.html",
      filename: "privacy.html",
      favicon: 'src/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id].css'
    })
  ]
};
