const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  //入口
  entry:'./src/main.js',
  //出口
  output:{
    path:path.resolve(__dirname,'../dist'),//动态获取路径
    filename:'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        //style-loader负责将样式添加到dom中
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: [ 'vue-loader']
      }
    ]
  },
  resolve: {
    extensions:['.vue','.js','.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin("最终版权归sun所有"),
    new htmlWebpackPlugin({
      template:'index.html'
    })
    //new uglifyJsPlugin()//生产用到
  ]
  //开发时用到
  // devServer:{
  //   contentBase:'./dist',
  //   inline:true
  // }
}