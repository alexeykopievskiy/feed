const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function cfg(mode) {
  return Object.assign(
    {},
    {
      target: 'node',

      externals: [nodeExternals()],

      entry: path.join(__dirname, '..', 'ssr', 'server.js'),

      output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'server.js',
        publicPath: '/',
        library: 'app',
        libraryTarget: 'commonjs2',
      },

      optimization: {
        noEmitOnErrors: true,
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.(png|jpg|svg)$/,
            loader: 'file-loader?name=img/[name].[hash:8].[ext]',
          },
          {
            test: /\.css$/,
            include: [/node_modules/],
            loaders: [
              'isomorphic-style-loader',
              `css-loader?${JSON.stringify({  
                modules: false,
              })}`,
              'postcss-loader',
            ],
          },
          {
            test: /\.inline\.s?css$/,
            loaders: [
              'isomorphic-style-loader',
              'css-loader',
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
        new CopyWebpackPlugin([
          {
            from: path.join(__dirname, '..', 'ssr', 'index.js'),
            to: 'ssr.js',
          },
          {
            from: path.join(__dirname, '..', 'package-lock.json'),
            to: 'package-lock.json',
          },
          {
            from: path.join(
              __dirname,
              '..',
              'pm2',
              mode,
              'ecosystem.config.js'
            ),
            to: 'ecosystem.config.js',
          },
        ]),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
          PROJECT_ENV: JSON.stringify(mode),
        }),
      ],
    }
  );
}

module.exports = cfg;
