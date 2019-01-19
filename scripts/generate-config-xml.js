#!/usr/bin/env node

const fs = require('fs');
const { replaceEnvs, replaceContent } = require('./util');

let content = fs.readFileSync('./config.xml.dist', 'utf8');

content = replaceEnvs(content);

let deepLinkScheme = '';
let deepLinkHost = '';

if (process.env.NG2_APP_BASE_URL_LINK_SHARE) {
    const baseUrlScheme = process.env.NG2_APP_BASE_URL_LINK_SHARE.split('://');
    deepLinkScheme = baseUrlScheme[0];
    const host = baseUrlScheme[1];
    // normaliza host caso venha com caracter /
    let max = host.indexOf('/');
    if (max === -1) {
        max = host.length;
    }

    deepLinkHost = host.substr(0, max);
}

content = replaceContent(content, 'DEEPLINK_SCHEME', deepLinkScheme);
content = replaceContent(content, 'DEEPLINK_HOST', deepLinkHost);

fs.writeFileSync('./config.xml', content);
