#!/usr/bin/env node

const fs = require('fs');
const { replaceEnvs } = require('./util');

let content = fs.readFileSync('./build.json.dist', 'utf8');
let originalMatchType = process.env.MATCH_TYPE;
if (process.env.MATCH_TYPE && process.env.MATCH_TYPE === 'appstore') {
  process.env.MATCH_TYPE = 'app-store';
}

fs.writeFileSync('./build.json', replaceEnvs(content));

process.env.MATCH_TYPE = originalMatchType;
