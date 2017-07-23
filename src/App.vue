<template>
  <div id="app">
  	<!-- <v-header></v-header>
        <div class="container">
          <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
          <router-view></router-view>
          </transition>
        </div> -->
        <div class="box direction-column">
          <v-header style="height:65px;background:red"></v-header>
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
  }
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

