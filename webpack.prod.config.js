const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
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
        test: /\.(png|svg|jpe?g|JPE?G|gif)$/i,
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
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: 'src/rules.html',
      filename: 'rules.html',
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: 'src/rules_cn.html',
      filename: 'rules_cn.html',
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: 'src/faq.html',
      filename: 'faq.html',
      favicon: 'src/favicon.ico'
    }),
    new HtmlWebPackPlugin({
      template: 'src/privacy.html',
      filename: 'privacy.html',
      favicon: 'src/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
