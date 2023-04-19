const path = require('path');

const classes = path.resolve(__dirname, '../classes');

module.exports = function(api) {
  api.resolve = {
    roots: [__dirname, classes]
  }
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
