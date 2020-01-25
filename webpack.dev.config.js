const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 7000
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
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
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
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
