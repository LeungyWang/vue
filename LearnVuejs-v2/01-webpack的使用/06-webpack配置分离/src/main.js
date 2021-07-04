// 1. 使用commonjs的模块化范式
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20,30));
console.log(mul(20,30));

// 2.使用ES6的模块化的规范
import {name, age, height} from './js/info'

console.log(name);
console.log(age);
console.log(height);

// 3. 添加css依赖
require('./css/normal.css')

// 4. 依赖less文件
require('./css/special.less')

document.writeln('<h2>Hello World</h2>')

// 5.使用Vue开发
import Vue  from 'vue'

// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components:{
        App
    }
})

document.writeln('<h2>Run dev</h2>')