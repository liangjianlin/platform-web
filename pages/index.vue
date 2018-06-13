<template>
  <div>
    <h1 class="red">Hello {{ name }}!</h1>
    <el-button @click="login">TEST</el-button>
  </div>
</template>

<script>
export default {
  auth: false,
  data () {
    return { name: 'world' }
  },
  methods: {
    login() {
      this.$auth.loginWith('local', {
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
.red {
  color: red;
}
</style>