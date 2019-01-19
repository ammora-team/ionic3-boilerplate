
// https://www.npmjs.com/package/fs-extra

module.exports = {
  copyIntl: {
    src: ['node_modules/intl/dist/Intl.min.js'],
    dest: '{{BUILD}}/polyfills'
  }
}
