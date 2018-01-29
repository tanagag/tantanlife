<template>
  <div class="content">
    <p class="msg">{{msg}}</p>
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

<style lang="less" type="text/css">
  @import '../less/index.less';
  .content{
    background: #eee;
    height:1000px;
  }
  .msg{
    .bg-color(red)
  }
</style>

<!-- <style lang="scss" type="text/css">
  @import '../scss/index.scss';
  .content{
    background: #eee;
    height:1000px;
  }
  .msg{
     @include bg-color(green)
  } -->
</style>
