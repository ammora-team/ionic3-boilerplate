#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pathEnv = path.join('.env');
const pathEnvDist = path.join('env.example');

// run bitrise
const branch = process.env.BITRISE_GIT_BRANCH;

if (!branch) {
  if (!fs.existsSync(pathEnv)) {
    fs.createReadStream(pathEnvDist).pipe(
      fs.createWriteStream(pathEnv)
    );
  }
}
