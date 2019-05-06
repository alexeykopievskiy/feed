const cfg = require('./ssr.config')('release');

const cssConfig = {
  sourceMap: false,
  modules: true,
  localIdentName: '[hash:base64:7]',
};
const cssLoaders = `isomorphic-style!css-lodaer?${JSON.stringify(
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
  mode: 'production',
  module: { rules },
});

module.exports = config;
