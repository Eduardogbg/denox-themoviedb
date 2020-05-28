const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
  mode: 'development',
  
  cache: true,
  watch: true,

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8766
  }
});
