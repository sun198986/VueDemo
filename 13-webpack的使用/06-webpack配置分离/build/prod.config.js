const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports=webpackMerge(baseConfig,{
  //合并的内容
  plugins:[
    new uglifyJsPlugin()//生产用到
  ]
})