import LoadingComponent from './Loading.vue'
const Tips = {
  install:function(Vue){
    Vue.component('Loading',LoadingComponent);
    /*Vue.prototype.$aaa = function(opt){ //mounted 中调用this.$aaa("hello...")
      alert(opt)
    }*/
  }
}
export default Tips