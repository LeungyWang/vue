import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Cart from '../views/cart/Cart'
import Profile from '../views/profile/Profile'

Vue.use(Router)

const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  

]

export default new Router({
  routes,
  mode: 'history'
})
