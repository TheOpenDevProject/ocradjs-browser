'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './ocrad-browser.js',
  output: {
    libary: 'OCRAD',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'ocrad-browser.js'
  }
};