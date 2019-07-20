<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">Blob后台管理系统</span>
            </div>
            <el-form :model="loginUser" status-icon :rules="rules" ref="loginForm" class="login_form">
                <el-form-item label="" prop="username">
                    <el-input v-model="loginUser.username" prefix-icon="el-icon-user" placeholder="请输入用户名" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input v-model="loginUser.password" prefix-icon="el-icon-lock" type="password"  placeholder="请输入密码" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="" prop="verifyCode">
                    <el-input v-model="loginUser.verifyCode" prefix-icon="el-icon-chat-line-round"   placeholder="请输入验证码" auto-complete="off" class="verify_code" ></el-input>
                    <img class="verify_img" src="../assets/verifycode.png">
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <!--  底部  -->
        <div class="login-footer">
            <span>© 2019 Zheng Jie Apache License 2.0</span>
            <span> ⋅ </span>
            <a href="http://www.beian.miit.gov.cn" target="_blank"> 浙ICP备18005431号-3</a>
        </div>
    </div>
</template>

<script>
    import jwt_decode from 'jwt-decode'

    export default {
        name: 'login',
        data() {
            return {
                loginUser: {
                    username: '',
                    password: '',
                    verifyCode: ''
                },
                rules: {
                    username: [{
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }],
                    verifyCode: [{
                        required: true,
                        message: '验证码不能为空',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/users/login', this.loginUser).then(res => {
                            console.log(res);
                            // 获取token
                            const { token } = res.data;
                            // 存储到ls
                            localStorage.setItem('eleToken', token);
                            // 解析token
                            const decoded = jwt_decode(token);
                            console.log(decoded);

                            //token存储到vuex
                            this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded));
                            this.$store.dispatch('setUser', decoded);

                            // 跳转到index
                            this.$router.push('/index');
                        });
                    }
                });
            },
            isEmpty(value) {
                return (
                    value === undefined ||
                    value === null ||
                    (typeof value === 'object' && Object.keys(value).length === 0) ||
                    (typeof value === 'string' && value.trim().length === 0)
                );
            }

        }
    }
</script>

<style scoped>
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background: url(../assets/bg.jpg);
        background-size: cover;
    }
    .login .box-card {
        width: 400px;
        padding: 5px;
    }
    .login .box-card .title {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }
    .verify_code {
        width: 220px !important;
    }
    .verify_img {
        width: 100px;
        height: 35px;
        vertical-align: middle;
        margin-left: 30px;
    }
    .submit_btn {
        display: block !important;
        width: 100%;
    }
    .login-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-family: Arial;
        font-size: 12px;
        letter-spacing: 1px;
    }
    .login-footer a {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }
</style>
