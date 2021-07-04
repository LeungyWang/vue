<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">点击</button>
        <h2>{{name}}</h2>
        <cpn></cpn>
    </div>
</template>

<script>
import cpn from './Cpn'

export default {
    name: "App",
    data(){
        return {
            message: "Hello Webpack",
            name:"wly"
        }
    },
    methods:{
        btnClick(){

        }
    },
    components:{
        cpn
    }
}
</script>
<style scoped>
    .title {
        color: blanchedalmond;
    }
</style>