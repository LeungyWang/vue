<template>
    <div>
        <tab-bar>
        <tab-bar-item path="/home">
            <img src="~assets/img/tabbar/home.png" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/home-active.png" alt="" slot="item-icon-active">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img src="~/assets/img/tabbar/category.png" alt="" slot="item-icon">
            <img src="~/assets/img/tabbar/category-active.png" alt="" slot="item-icon-active">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img src="~/assets/img/tabbar/cart.png" alt="" slot="item-icon">
            <img src="~/assets/img/tabbar/cart-active.png" alt="" slot="item-icon-active">
            <div slot="item-text">购物车</div>        
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img src="~/assets/img/tabbar/profile.png" alt="" slot="item-icon">
            <img src="~/assets/img/tabbar/profile-active.png" alt="" slot="item-icon-active">
            <div slot="item-text">我的</div>
        </tab-bar-item>
        </tab-bar>
    </div>

</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar//TabBarItem'

export default {
    name: "MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>