const webpack = require('webpack');
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

module.exports = release(cfg);
