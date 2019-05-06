const pkg = require('../package.json');
const webpack = require('webpack');

const cssConfig = {
  sourceMap: true,
  modules: true,
  localIdentName: '[folder]__[local]--[hash:base64:5]',
};

const cssLoaders = `style-loader!css-loader?${JSON.stringify(
  cssConfig
)}!postcss-loader`;

module.exports = {
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
        test: /\.inline\.s?css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.s?css$/,
        exclude: [/node_modules/, /\.inline\.s?css$/],
        loaders: cssLoaders,
      },
      {
        test: /\.css$/,
        include: [/node_modules/],
        loaders: [
          'style-loader',
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

  plugins: [new webpack.BannerPlugin(`${pkg.name}-${new Date()}. DEV`)],
};
