import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*************************引入自定义文件样式***********************/ 
import './assets/css/common.css'

/*************************引入element ui*************************/
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
/** 自定义样式覆盖默认样式*/
import './assets/css/elementui.css'
Vue.use(ElementUI)

/**************************引入axios模块*************************/
import axios from "axios"
//6.配置保存session信息
axios.defaults.withCredentials=true;
//7.配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//8.注册axios
Vue.prototype.axios=axios;
//从后台数据库中请求图片
Vue.prototype.nodeURL="http://127.0.0.1:4000/"
//脚手架中的端口
Vue.prototype.cliURL="http://localhost:8080/#/"

/**************************引入swipper模块*************************/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/***************************引入video.js模块**********************/
import Videojs from 'video.js'
import 'video.js/dist/video-js.css'
import './assets/css/video.css'
Vue.prototype.$video = Videojs


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
