const cfg = require('./ssr.config')('stage');

const cssConfig = {
  sourceMap: true,
  modules: true,
  localIdentName: '[hash:base64:7]',
};
const cssLoaders = `isomorphic-style-loader!css-loader?${JSON.stringify(
  cssConfig
)}!postcss-loader`;

const rules = [
  ...cfg.module.rules,
  {
    test: /\.s?css$/,
    exclude: [/node_modules/, /\.inline\.s?css$/],
    loader: cssLoaders,
  },
];

const config = Object.assign({}, cfg, {
  mode: 'development',
  module: { rules },
});

module.exports = config;
