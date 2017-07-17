// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


router.afterEach((to, from, next) => {
  //定义title
  var routerOptions = router.options.routes;
  for(var i=0;i<routerOptions.length;i++){
    if(to.path==routerOptions[i].path){
        document.title = routerOptions[i].title;
        var m = document.createElement('iframe');
        //m.src = '//m.baidu.com/favicon.ico';
        m.style.display = 'none';
        m.onload = function() {
              setTimeout(function(){
                m.remove();
              }, 10)
       }
      document.body.appendChild(m);
      document.getElementsByTagName('body')[0].className=routerOptions[i].name
    }
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
