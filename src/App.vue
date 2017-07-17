<template>
  <div id="app">
  	<v-header></v-header>
  	<div class="container">
 		<router-view></router-view>
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
<style type="text/css">
	@import './less/index.less';
</style>

