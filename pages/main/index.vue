<template>
    <div>
        <el-button @click="logout">退出</el-button>
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
      created: function() {
        this.$axios.get('/api/auth/user?userId=123')
      },
      methods: {
        logout() {
          //this.$auth.logout()
          this.$router.push({ path: '/login' })
        }
      }
    }
</script>

<style>

</style>
