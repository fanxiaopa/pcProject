import Vue from 'vue'
import Router from 'vue-router'

import index from './views/index.vue'
import login from './views/login.vue'
import reg from './views/register.vue'
import forget from './views/forget.vue'
import information from './views/information.vue'
import videos from './views/videos.vue'
import articles from './views/articles.vue'
import el from './views/test/elui.vue'
import info from './views/test/infolist.vue'
import top from './components/toTop.vue'


Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {path: '/',component:index,meta:{keepAlive:true} },//首页缓存
    {path: '/index',component:index,meta:{keepAlive:true} },//首页缓存
    {path: '/login',component:login },
    {path: '/reg',component:reg },
    {path: '/forget',component:forget },
    {path: '/information',component:information },
    {path: '/el',component:el },
    {path:'/info',component:info },
    {path:'/videos',component:videos },
    {path:'/articles',component:articles },
    {path:'/top',component:top }
  ]
})
