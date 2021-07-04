<template>
    <div>
        <h2>cpn组件标题</h2>
        <p>cpn组件内容</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
    name: 'cpn',
    data(){
        return {
            name: 'cpn组件的name'
        }
    }
}
</script>
