<template>
  <div id="app">
    <!-- <router-view></router-view> -->

    <!-- <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link> -->
    <!-- <router-link :to="{path: '/profile', query:{name:'wly', age:18, height:1.88}}">档案 -->
    <!-- </router-link> -->
    <h2>我是App组件</h2>
    <router-link to='/home' tag="button" replace>首页</router-link>
    <router-link to='/about' tag="button" replace>关于</router-link>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'lisi',
      imgURL: 'http'
    }
  },
  methods: {
    homeClick(){
      // 通过代码修改路由 vue-router
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutClick');
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name: 'wly',
          age:19,
          height:1.87
        }
      })
    }
  },
}
</script>

<style>
/* .router-link-active{
  color: red;
} */
.active {
  color: aqua;
}
</style>
