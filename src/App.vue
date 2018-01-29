<template>
  <div id="app">
        <div class="box direction-column">
          <v-header style="height:65px;"></v-header>
          <div class="container" style="overflow-y:scroll">
            <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
            <router-view></router-view>
            </transition>
          </div>
        </div>
  </div>
</template>

<script>
import VHeader from './components/Header.vue'
export default {
  name: 'app',
  components:{
  	VHeader
  },
  beforeCreate: function () {
      console.log('beforeCreate-parent');
  },
  created: function () {
      console.log('created-parent');
  },
  beforeMount: function () {
      console.log('beforeMount-parent'); 
  },
  mounted: function () {
      console.log('mounted-parent');
  },
  beforeUpdate: function () {
      console.log('beforeUpdate-parent');
  },
  updated: function () {
      console.log('updated-parent'); 
  },
  beforeDestroy: function () {
      console.log('beforeDestroy-parent'); 
  },
  destroyed: function () {
      console.log('destroyed-parent');
  },
}
</script>
<style lang="less" type="text/css">
	@import './less/index.less';
  .view{
    position:absolute;
    left:0;right:0;
    bottom:auto;
    top:75px;
    margin:auto;
    width:100%;
    max-width: 1170px;
  }
  @media (max-width: @xs) {
    .view{
      top:60px;
    }
  }
</style>

