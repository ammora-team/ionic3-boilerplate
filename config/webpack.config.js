/*
 * The webpack config exports an object that has a valid webpack configuration
 * For each environment name. By default, there are two Ionic environments:
 * "dev" and "prod". As such, the webpack.config.js exports a dictionary object
 * with "keys" for "dev" and "prod", where the value is a valid webpack configuration
 * For details on configuring webpack, see their documentation here
 * https://webpack.js.org/configuration/
 */

const path = require('path');
const webpackConfig = require('@ionic/app-scripts/config/webpack.config.js');
const webpack = require('webpack');
const envs = require('./env');
const tsconfig = require('../tsconfig.json');

// @todo workaround bug webpack and typescript
const ignorePlugin = new webpack.IgnorePlugin(/@angular\/http$/);
const definePlugin = new webpack.DefinePlugin(envs);

for (const env of ['dev', 'prod']) {
  webpackConfig[env].plugins.push(definePlugin);
  webpackConfig[env].plugins.push(ignorePlugin);
  // permitir carregar modulos internos sem caminho relativo
  webpackConfig[env].resolve.modules = [
    path.resolve('node_modules'), path.resolve(tsconfig.compilerOptions.baseUrl),
  ];
}

module.exports = {
  dev: webpackConfig.dev,
  prod: webpackConfig.prod
}
