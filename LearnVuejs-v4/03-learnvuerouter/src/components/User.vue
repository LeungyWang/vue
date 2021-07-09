<template>
    <div>
        <h2>用户界面</h2>
        <p>用户相关信息</p>
         <h2>{{userId}}</h2>
         <h2>{{$route.params.userId}}</h2>
         <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    name: 'User',
    computed:{
        userId(){
            return this.$route.params.userId
        }
    },
    methods:{
        btnClick(){
            // 所有的组件都继承了Vue的原型
            console.log(this.$router);
            console.log(this.$route);

            console.log(this.test);
        }
    }
}
</script>

<style scoped>

</style>