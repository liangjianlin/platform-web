<template>
    <div>
        <el-button @click="logout">退出</el-button>
        <h5>{{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}</h5>
        <h5>{{ user }}</h5>
    </div>
</template>

<script>
    export default {
      data() {
        return {
            user: this.$auth.user
        }
      },
      methods: {
        logout() {
          this.$auth.logout()
          //this.$router.push({ path: '/login' })
        }
      }
    }
</script>

<style>

</style>
