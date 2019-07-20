<template>
    <div class="index">
        <HeadNav></HeadNav>
        <LeftMenu></LeftMenu>
        <div class="index_container">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import HeadNav from '../components/HeadNav'
    import LeftMenu from '../components/LeftMenu'
    export default {
        name: "index",
        components: {
            HeadNav,
            LeftMenu
        }
    }
</script>

<style scoped>
    .index {
        width:100%;
        height: 100%;
        overflow: hidden;
    }
    .index_container {
        width: 100%;
        height: 100%;
        margin-left: 180px;
    }
</style>
