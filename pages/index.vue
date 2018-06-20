<template>
<!--  <div>
    <h1 class="red">Hello {{ name }}!</h1>
    <el-button @click="login">TEST</el-button>
    <template v-if="$auth.$state.loggedIn">
      <h3>你已经登录了</h3>
      <el-button @click="$auth.logout()">退出</el-button>
    </template>
    <h5>{{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}</h5>
  </div>-->
  <el-row>
    <el-col :span="8" :offset="8">
      123
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      name: 'world',
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style>
.red {
  color: red;
}
</style>