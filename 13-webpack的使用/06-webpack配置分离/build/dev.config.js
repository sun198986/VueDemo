const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports=webpackMerge(baseConfig,{
  //合并的内容
  devServer:{
    contentBase:'./dist',
    inline:true
  }
})