<template>
    <el-row>
        <el-col :span="8" :offset="8">
            <el-form :model="loginForm">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="login">登录</el-button>
                </el-form-item>
            </el-form>
            <h5>{{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}</h5>
        </el-col>
    </el-row>
</template>

<script>
    export default {
      data() {
        return {
          loginForm: {
            username: '',
            password: ''
          }
        }
      },
      methods: {
        async login() {
          this.error = null
          return this.$auth
              .loginWith('local', {
                data: {
                  username: this.loginForm.username,
                  password: this.loginForm.password
                }
              }).then(() => {
                //this.$router.push({ path: '/main' })
              })
              .catch(e => {
                this.error = e + ''
              })
        }
      }
    }
</script>

<style>

</style>