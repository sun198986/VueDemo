//使用commonjs的模块化规范
const {add,mul} = require('./js/mathUtils.js')

console.log(add(20,30));
console.log(mul(20,4));

//使用es6的模块化规范
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//webpack4打包 webpack ./src/main.js -o ./dist/bundle.js
//
//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')
//
document.writeln('<h2>你好啊,李银河!</h2>')
//
// //5.使用vue进行开发
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/App.vue'


const app  = new Vue({
  el:"#app",
  template: `<App></App>`,
  data:{
  },
  components:{
    App
  }
})