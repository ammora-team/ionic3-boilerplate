'use strict';
/**
 * @see Create React App
 * https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/env.js
 */
const { loadEnvs } = require('../scripts/util');

const envNode = process.env.NODE_ENV;
const ENV = envNode ? envNode : process.env.IONIC_ENV;

if (!ENV) {
  throw new Error(
    'The ENV environment variable is required but was not specified.'
  );
}

loadEnvs(ENV);

// injetado para aplicação via DefinePlugin do Webpack.
const APP = /^NG2_APP_/i;

const raw = Object.keys(process.env)
  .filter(key => APP.test(key))
  .reduce(
    (env, key) => {
      env[key] = process.env[key];
      return env;
    }, {
      NG2_APP_ENV: ENV,
      NG2_APP_VERSION: process.env.APP_VERSION
    }
  );

const stringified = {
  'process.env': Object.keys(raw).reduce((env, key) => {
    env[key] = JSON.stringify(raw[key]);
    return env;
  }, {}),
};

module.exports = stringified;
