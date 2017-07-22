import Vue    from 'vue'
Vue.mixin({
 /* created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
    
    //调用输出"hello!"
    new Vue({
      myOption: 'hello!'
    })
  },*/
  methods:{
     //浏览器视口的高度 
    getWindowHeight:()=>{
    　　var windowHeight = 0;
        windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        return windowHeight;
    },
    //文档的总高度 
    getScrollHeight:()=>{
    　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    　　return scrollHeight;
    },
    //滚动条在Y轴上的滚动距离  
    getScrollTop:()=>{
    　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
      //chrome支持document.body.scrollTop,IE和火狐支持document.documentElement.scrollTop
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    　　return scrollTop;
    }   
  }
})
//https://cn.vuejs.org/v2/guide/mixins.html