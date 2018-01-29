<template>
  <div name="vheader"  onselectstart="return false">
    <div class="nav" ref="nav">
        <div id="navDiv">
            <div class="lo">
              <a href="index.html" class="logo"><img src="static/img/logo.png" /></a>
              <div class="nav-bar visible-xs" @click="toggle">
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
              </div>
            </div>
            <transition name="drop">
              <ul class="clear" v-show="drop">
                  <router-link :to="{path:'/index'}" tag="li" @click.native="something" active-class="active">
                    <a href="javascript:void(0)">首页</a>
                  </router-link>
                   <router-link :to="{path:'/photo'}" tag="li" @click.native="something" active-class="active">
                    <a href="javascript:void(0)">相册</a>
                  </router-link>
                   <router-link :to="{path:'/resume'}" tag="li"  @click.native="something" active-class="active">
                    <a href="javascript:void(0)">简历</a>
                  </router-link>
                   <router-link :to="{path:'/about'}" tag="li" @click.native="something" active-class="active">
                    <a href="javascript:void(0)">关于我们</a>
                  </router-link>
                   <router-link :to="{path:'/other'}" tag="li" @click.native="something" active-class="active">
                    <a href="javascript:void(0)">其他</a>
                  </router-link>
              </ul>
            </transition>
        </div>
    </div>
    <transition name="fade">
      <div class="screen hidden-sm hidden-md hidden-lg" v-show="drop"  @click="toggle"></div>
    </transition>
    <div class="header-blank"></div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  data () {
    return {
      drop:false
    }
  },
  created(){
    this.calc();
    window.onresize = ()=>{
      setTimeout(this.calc(),20)
    }
    //判断滚轮上下方向(暂时没有用到此功能)
    this.mousewheel();
    //获取向上滚动距离(头部透明度)
    window.onscroll=()=>{
      var scrollTop = this.getScrollTop();
      
      if(scrollTop < 65)
      {
        this.$refs.nav.style.background = "";
      }else{
        if(scrollTop < 200){
          var rgba = 1-(scrollTop * 0.004);
          this.$refs.nav.style.background = "rgba(255,255,255,"+(rgba)+")";
        }
      }
    }
  },
  beforeCreate: function () {
      console.log('beforeCreate-child');
  },
  beforeMount: function () {
      console.log('beforeMount-child'); 
  },
  mounted: function () {
      console.log('mounted-child');
  },
  beforeUpdate: function () {
      console.log('beforeUpdate-child');
  },
  updated: function () {
      console.log('updated-child'); 
  },
  beforeDestroy: function () {
      console.log('beforeDestroy-child'); 
  },
  destroyed: function () {
      console.log('destroyed-child');
  },
  methods:{
    something:function(){
    },
    toggle:function(){
      this.drop =!this.drop;
      this.flag = this.drop;
    },
    calc:function(){
      var w = document.documentElement.clientWidth;
      if(w >= 768){
        this.drop = true;
      }else{
        this.drop = this.flag;
      }
    },
    mousewheel:function(e){
        var direction;
        document.body.addEventListener("DOMMouseScroll", function(event) {
           direction= event.detail && (event.detail > 0 ? "mousedown" : "mouseup");
        });
        // chrome and ie
        document.body.onmousewheel = function (event) {
           event = event || window.event;
           direction = event.wheelDelta && (event.wheelDelta > 0 ? "mouseup" : "mousedown");      
        };
    }
  }
}
</script>

<style lang="less" scoped>
@import '../less/index.less';
.nav-bar{
    position: relative;
    float: right;
    padding: 5px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor:pointer;
}
.nav-bar:hover{
  background-color: #ddd
}
.nav-bar .icon-bar{
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin:4px auto; 
    background-color:#888;
}
.nav{
  width:100%;
  background:url('../../static/img/head-bg.png') repeat center center;
  height:65px;
  line-height:65px;
  margin:0 auto;
  position:fixed;
  top:0;
  left:0;
  z-index:999;
  box-shadow:0 2px 5px rgba(0,0,0,.2);
  transition:height 0.3s ease;
}
#navDiv{
  margin:0 auto;
  max-width:1200px;
  .lo{
    position:relative;
    z-index:3;
    height:65px;
    background:none;
    transition:height 0.3s ease;
    float:left;
  }
}
#navDiv{
  a.logo{
    margin-left:10px;
  }
  a.logo img{
    width:180px;
    transition:width 0.5s ease,height 0.8s ease;
  }
}  
#navDiv{
  >ul{
     margin:0 auto;
     float: right;
     overflow: hidden;
     li{
      float:left;
      text-align:center; 
      position:relative;
      margin:0 35px 0 10px;
        >a{
          height:35px;
          line-height:35px;
          display:block;
          font-size:16px;
          padding:0 10px;
          *padding:0 10px;
          margin-top:15px
        }
      }
      li.active a,li:hover a{
        color:#c90b14;border-bottom:2px solid #c90b14;
      }
  }
}
.header-blank{
  height: 75px
}
.screen{position: fixed;left:0;top:0;background: rgba(255,255,255,0.2);width:100%;height:100%}
@media (max-width: @xs) {
  .nav{
    height:50px;
    line-height: 50px;
  }
  #navDiv{
    a.logo img{
      width:140px;
    }
  }  
  .header-blank{
    height: 60px
  }
  #navDiv{
    .lo{
       height:50px;
       float: none;
       border-bottom:1px solid #ddd;
       background:#fff url('../../static/img/head-bg.png') repeat center center;
    }
    >ul{
       background:#f8f8f8 url('../../static/img/head-bg.png') repeat center center;
       margin:0 auto;
       float: none;
       overflow: hidden;
       position: relative;
       z-index: 2;
       >li{
        float: none;
        text-align:left; 
        margin:0;
        border-bottom:1px solid #ddd;
        >a{
          height:35px;
          line-height:35px;
          display:block;
          font-size:16px;
          padding:0 10px;
          margin-top:0;
        }
      }
      li.active a,li:hover a{
        color:#c90b14;border-bottom:none
      }
    }
  }
  .drop-enter-active,.drop-leave-active{transition:all 0.2s ease;}
  .drop-enter,.drop-leave-to{transform:translate3d(0,-200%,0);opacity: 0}

  .fade-enter-active,.fade-leave-active{transition:opacity 0.2s ease;}
  .fade-enter,.fade-leave-to{opacity: 0}
}
</style>
