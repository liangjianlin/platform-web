<template>
    <div>
        <el-form>
            <el-form-item label="用户：">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
      auth: false,
      data() {
        return {
          username: '',
          password: ''
        }
      },
      computed: {
        redirect() {
          return (
              this.$route.query.redirect &&
              decodeURIComponent(this.$route.query.redirect)
          )
        },
        isCallback() {
          return Boolean(this.$route.query.callback)
        }
      },
      methods: {
        async login() {
          return this.$auth.loginWith('local', {
            data: {
              username: 'admin',
              password: 'admin'
            }
          })
        }
      }
    }
</script>

<style>

</style>