import Vue from 'vue';
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

// 1. 通过Vue.use(插件)， 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象 引用后直接使用
const routes = [
  {
    path:'',
    redirect:'home'
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component:HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/user/:userId',
    component:User
  },
  {
    path:'/profile',
    component: Profile
  }
]

// 3. 创建路由 路由懒加载
// const routes = [
//   {
// 	path: '/home',
//     component: () => import('../components/Home')
//   },
//   {
// 	path: 'About',
//     component: () => import('../components/About')
//   }
// ]



const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass: 'active'
})

// 3. 将Router对象传入到实例中
export default router