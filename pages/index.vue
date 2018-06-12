<template>
  <div>
    <h1 class="red">Hello {{ name }}!</h1>
    <el-button>TEST</el-button>
  </div>
</template>

<script>
export default {
  auth: false,
  data () {
    return { name: 'world' }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>