<template>
  <div class="content box">
     <div class="flex1">1</div>
     <div class="flex3">2</div>
  </div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      msg: '简历'
    }
  }
}
</script>

<style lang="less" scoped>
	@import '../less/index.less';
	.content{
		margin:0 auto;
		position: fixed;
		top:65px;
		right:0;
		bottom:0;
		left:0;
		width:100%;
		.flex1{
			/*background-color: #fff; 
			background-image: 
			linear-gradient(#eee .1em, transparent .1em);
			background-size: 100% 1.2em;*/
			background: #27AE60;
		}
		.flex3{
			background-color: #fff; 
			background-image: 
			linear-gradient(#eee .1em, transparent .1em);
			background-size: 100% 1.2em;
		}
	}
	@media (max-width: @xs) {
    .content{
      top:50px;
    }
  }
</style>
