const webpack = require('webpack');
const pkg = require('../package.json');
const cfg = require('./webpack.config');

const cssConfig = {
  sourceMap: true,
  modules: true,
  localIdentName: '[folder]__[local]--[hash:base64:5]',
};

function dev(config) {
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

module.exports = dev(cfg);
