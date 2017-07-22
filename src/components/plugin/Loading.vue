<template>
	<div id="loading">
		<span>{{msg}}</span>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:"loading..."
			}
		}
	}
</script>
<style scope>
	#loading{position: fixed;top:0;left:0;z-index:998;height:auto;width:100%;background: rgba(255,255,255,0.1);}
	#loading span{position: fixed;left:0;top:0;right:0;bottom:0;display:block;text-align:center;margin:auto;color:#fff;text-shadow:2px 2px 1px #000;width:100px;height:60px;line-height:60px;background: rgba(0,0,0,0.5);border-radius: 10px}
</style>