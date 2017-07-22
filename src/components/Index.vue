<template>
  <div class="content">
    <p>{{msg}}</p>
    <p>{{msg}}</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '我是首页'
    }
  }
}
</script>

<style scoped>
  .content{
    background: #eee;
    height:1000px;
  }
</style>
