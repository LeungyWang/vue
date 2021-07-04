// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = {
  template: `
    <div>{{message}}</div>
  `,
  data(){
    return {
      message:'组件message'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(createElement){
    // 1. CtreateElement('标签', {标签的属性}, [''])
    // return createElement('h2', {class: 'box'}, ['Hello World',
    // createElement('button',['按钮'])
    //   ])

    // 2. 直接传入组件对象
    return createElement(App)
  }
})
