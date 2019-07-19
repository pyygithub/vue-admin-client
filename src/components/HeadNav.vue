<template>
    <header class="head-nav">
        <el-row align="center">
            <el-col :span="6" >
                <div class="logo-container">
<!--                    <img src="../assets/logo.png" class="logo" alt="">&ndash;&gt;-->
                    <span class="title">Blog在线后台管理系统</span>
                </div>
            </el-col>

            <el-col :span="6" :offset="12">
                <div class="userinfo">
                    <el-avatar size="medium" :src="user.avatar" class="avatar"></el-avatar>
                    <div class="welcome">
                        <p class="name comename">欢迎</p>
                        <p class="name avatarname">{{user.username}}</p>
                    </div>
                    <span class="username">
                        <!-- 下拉箭头 -->
                        <el-dropdown trigger="click" @command="setDialogInfo">
                          <span class="el-dropdown-link">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
    export default {
        name: 'head-nav',
        data() {
            return {
                user: {
                    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                    username: 'admin'
                }
            }
        },
        methods: {
            setDialogInfo(command) {
                // console.log(command)
                switch (command) {
                    case 'userInfo':
                        this.showUserInfo();
                        break;
                    case 'logout':
                        this.logout();
                }
            },
            showUserInfo () {
                console.log('个人信息')
                this.$router.push('/userInfo');
            },
            logout () {
                // console.log('退出')
                // 清除token
                localStorage.removeItem('eleToken');
                // 设置vues store
                this.$store.dispatch('clearCurrentState');
                // 跳转到登录页面
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    .head-nav {
        width: 100%;
        height: 60px;
        min-weight: 600px;
        padding: 5px;
        background: #324057;
        color: #fff;
        border-bottom: 1px solid #1f2d3d;
    }
    .logo-container {
        line-height: 60px;
        padding: 0 10px;
    }
    .userinfo {
        height: 60px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-right: 30px;
        justify-content: flex-end;
    }
    .userinfo .avatar {
        margin-right: 5px;
    }
    .userinfo .welcome {

    }
    .comename {
        font-size: 12px;
    }
    .avatarname {
        color: #409eff;
        font-weight: bolder;
    }
    .username {
        cursor: pointer;
        margin-right: 5px;
    }
    .el-dropdown {
        color: #fff;
    }
</style>