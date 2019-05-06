const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, '../src', 'index.js'),
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/bundle.[hash].js',
    publicPath: '/',
  },

  optimization: {
    noEmitOnErrors: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [['import', { libraryName: 'antd', style: 'css' }]],
          },
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=img/[name].[hash:8].[ext]',
      },
      {
        test: /\.css$/,
        include: [/node_modules/],
        loaders: [
          MiniCssExtractPlugin.loader,
          `css-loader?${JSON.stringify({
            modules: false,
          })}`,
          'postcss-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: ['node_modules'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src', 'index.html'),
    }),
    new StatsPlugin('stats.json', {
      chunkModules: true,
      modules: true,
      chunks: true,
      exclude: [/node_modules/],
    }),
    new MiniCssExtractPlugin({ filename: 'css/style.[hash].css' }),
    new MomentLocalesPlugin({
      localesToKeep: ['ru'],
    }),
  ],
};
