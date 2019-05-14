/*const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('../package.json');
const cfg = require('./webpack.config');

const cssConfig = {
  sourceMap: false,
  modules: true,
  localIdentName: '[hash:base64:7]',
};

function release(config) {
  const optimization = { ...config.optimization, minimize: true };
  const plugins = [...config.plugins];

  plugins.push(
    new webpack.BannerPlugin(`${pkg.name}-${new Date()}. RELEASE`),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      PROJECT_ENV: JSON.stringify('release'),
    }),
    new MiniCssExtractPlugin({ filename: 'style.[hash].css' })
  );

  const rules = [...config.module.rules];

  rules.push(
    {
      test: /\.inline\.s?css$/,
      loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.s?css$/,
      exclude: [/node_modules/, /\.inline\.s?css$/],
      loaders: [
        MiniCssExtractPlugin.loader,
        `css-loader?${JSON.stringify(cssConfig)}`,
        'postcss-loader',
      ],
    }
  );

  return Object.assign({}, config, {
    optimization,
    mode: 'production',
    module: { rules },
    plugins,
  });
}

module.exports = release(cfg);*/
const webpack = require('webpack');
const pkg = require('../package.json');
const cfg = require('./webpack.config');

const cssConfig = {
  sourceMap: true,
  modules: true,
  localIdentName: '[folder]__[local]--[hash:base64:5]',
};

function release(config) {
  const plugins = [new webpack.HotModuleReplacementPlugin()];

  plugins.push(
    ...config.plugins,
    new webpack.DefinePlugin({ PROJECT_ENV: JSON.stringify('dev') }),
    new webpack.BannerPlugin(`${pkg.name}-${new Date()}. DEV`)
  );

  const rules = [...config.module.rules];

  rules.push(
    {
      test: /\.inline\.s?css$/,
      loader: 'style-loader!css-loader!postcss-loader',
    },
    {
      test: /\.s?css$/,
      exclude: [/node_modules/, /\.inline\.s?css$/],
      loaders: [
        'style-loader',
        `css-loader?${JSON.stringify(cssConfig)}`,
        'postcss-loader',
      ],
    }
  );

  return Object.assign({}, config, {
    entry: { index: ['webpack-hot-middleware/client', config.entry.index] },
    devtool: 'eval-source-map',
    mode: 'development',
    watchOptions: { aggregateTimeout: 300 },
    module: { rules },
    plugins,
  });
}

module.exports = release(cfg);

