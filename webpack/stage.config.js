const webpack = require('webpack');
const pkg = require('../package.json');
const cfg = require('./webpack.config');

const cssConfig = {
  sourceMap: true,
  modules: true,
  localIdentName: '[hash:base64:7]',
};

function stage(config) {
  const optimization = { ...config.optimization, minimize: true };
  const plugins = [...config.plugins];

  plugins.push(
    new webpack.BannerPlugin(`${pkg.name}-${new Date()}. STAGE`),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      PROJECT_ENV: JSON.stringify('stage'),
    })
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
      loader: [
        'style-loader',
        `css-loader?${JSON.stringify(cssConfig)}`,
        'postcss-loader',
      ],
    }
  );

  return Object.assign({}, config, {
    optimization,
    devtool: 'source-map',
    mode: 'development',
    module: { rules },
    plugins,
  });
}

module.exports = stage(cfg);
