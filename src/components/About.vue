<template>
  <div name="about">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '关于我们'
    }
  }
}
</script>

<style lang="less" scoped>
  .content{border:1px solid #ccc}
</style>
