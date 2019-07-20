<template>
    <el-row class="menu_page">
        <el-col class="menu_list">
            <el-menu
                menu-trigger="click"
                background-color="#324057"
                text-color="#fff"
                :router="true"
                active-text-color="#409eff">
                <template v-for="item in items">
                    <el-menu-item v-if="item.children.length == 0" :index="item.path">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                    <el-submenu v-if="item.children.length > 0" :index="item.path">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.name }}</span>
                        </template>
                         <el-menu-item v-for="citem in item.children" :index="citem.path" >
                             <i :class="citem.icon"></i>
                             <span slot="title">{{citem.name}}</span>
                         </el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "left-menu",
        data() {
            return {
                items: [
                    {
                        name: '首页',
                        icon: 'el-icon-s-home',
                        path: 'home',
                        children: [

                        ]
                    },
                    {
                        name: '系统管理',
                        icon: 'el-icon-s-tools',
                        path: 'sysManage',
                        children: [
                            {name: '用户管理', icon: 'el-icon-user', path: 'userManage'},
                            {name: '角色管理', icon: 'el-icon-s-custom', path: 'roleManage'},
                            {name: '权限管理', icon: 'el-icon-s-operation', path: 'authManage'},
                        ]
                    }, {
                        name: '日志管理',
                        icon: 'el-icon-info',
                        path: 'log',
                        children: [
                            {name: '操作日志', icon: 'el-icon-s-order', path: 'operLog'},
                            {name: '系统日志', icon: 'el-icon-info', path: 'osLog'}
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .menu_page {
        -webkit-transition: width .28s;
        transition: width .28s;
        width: 180px;
        height: 100%;
        position: fixed;
        font-size: 23px;
        z-index: 1001;
        overflow: hidden;
        min-height: 100%;
    }
    .menu_list {
        height: 100%;
    }
    .el-menu {
        border: none;
        height: 100%;
    }
    .el-submenu .el-menu-item {
        font-size: 14px;
        color: #303133;
        min-width: 180px;
        background-color: #1f2d3d!important;
    }
    .el-submenu .el-menu-item:focus, .el-submenu .el-menu-item:hover {
        background-color: #263445 !important;
    }
    a {
        text-decoration: none;
    }

</style>
