import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// runtime-compiler
// template -> ast -> render -> vdom ->UI

// runtime-only 性能更高 代码量更少
// render - > vdom -> UI