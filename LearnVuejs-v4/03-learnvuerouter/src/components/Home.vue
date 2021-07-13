<template>
    <div>
        <h2>首页</h2>
        <p>首页内容</p>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>

        <h2>{{message}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
      return {
          message:'hi',
          path:'/home/news'
      }
    },
    created(){
        console.log('created')
        // this.$router.push('/home/news')
    },
    mounted(){
        console.log('mounted');
    },
    updated(){
        console.log('updated');
    },
    destroyed(){
        console.log('destroyed');
    },
    activated(){
        console.log('home activated');
        this.$router.push(this.path);
    },
    deactivated(){
        console.log('home deactivated');
    },
    beforeRouteLeave(to,from,next){
        console.log(this.$route.path);
        this.path = this.$route.path;
        next();
    }
}
</script>

<style scoped>

</style>