import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Photo from '@/components/Photo'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      title:'首页',
      component: Index
    },{
      path: '/photo',
      name: 'photo',
      title:'相册',
      component: Photo
    },{
      path: '/resume',
      name: 'resume',
      title:'简历',
      component: Resume
    },{
      path: '/about',
      name: 'about',
      title:'关于我们',
      component: About
    },{
      path: '/other',
      name: 'other',
      title:'其他',
      component: Other
    },{
      path: '/',
      redirect:'/index'
    },{
       path: '*',
      redirect:'/index'
    }
  ]
})
