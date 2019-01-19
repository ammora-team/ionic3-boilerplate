const fs = require('fs');

function loadEnvs(env) {
  env = env || 'dev';
  // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
  const dotenvFiles = [
    `.env.${env}.local`,
    `.env.${env}`,
    // Don't include `.env.local` for `test` environment
    // since normally you expect tests to produce the same
    // results for everyone
    env !== 'test' && `.env.local`,
    '.env',
  ].filter(Boolean);

  dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
      require('dotenv-expand')(
        require('dotenv').config({
          path: dotenvFile,
        }
      ));
    }
  });
}

function replaceEnvs(content) {
  loadEnvs(process.env.NODE_ENV);

  const envVars = Object.keys(process.env);

  for (const varName of envVars) {
    const value = process.env[varName];
    content = replaceContent(content, varName, value);
  }

  return content;
}

function replaceContent(content, key, value) {
  const regex = new RegExp('\\${' + key + '}', 'g');

  return content.replace(regex, value);
}

module.exports = {
  loadEnvs,
  replaceEnvs,
  replaceContent
};
