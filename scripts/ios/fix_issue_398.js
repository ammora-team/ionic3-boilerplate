#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const destFile = path.resolve('platforms', 'ios', 'cordova', 'lib', 'build.js');

module.exports = function() {
    fs.copyFile(path.join(__dirname, 'build.js'), destFile, (err) => {
        if (err) {
            throw err;
        }

        console.log('build.js was copied to ' + destFile);
    });
}