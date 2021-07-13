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
    redirect:'home',
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'Home'
    },
    children:[
      // {
      //   path: '',
      //   redirect: 'news'
      // },
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
    meta:{
      title:'About'
    },
    component:About,
    beforeEnter:(to, from, next)=>{
      console.log('About beforeEnter');
      next()
    }
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

// 前置守卫(guard)
router.beforeEach((to, from, next)=>{
  // 从from跳转到to
  // console.log(to);
  document.title = to.matched[0].meta.title
  console.log('+++++');
  next()
})

// 后置守卫(guard)
router.afterEach((to, from)=>{
  console.log('-----');
})

// 3. 将Router对象传入到实例中
export default router