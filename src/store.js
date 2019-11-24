import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)
const key = 'user'
export default new Vuex.Store({
  state: {
    user:null,
    fromPath:'/',
  },
  mutations: {
    //设置 数据进入localStorage
    _setStorage(state,value){ 
      state.user = value
      localStorage.setItem(key,value)  // localStroage.setItem(key,数据值) 设置存入缓存
    },
    _removeStorage(state){
      state.user = null
      localStorage.removeItem(key)  // localStorage.removeItem(key) 删除缓存
    },
    //记录路径信息
    setPath(state,path){
      state.fromPath=path
      // console.log("hhh"+state.fromPath)
    }
  },
  actions: {
    //登陆请求
    login(context,user){
      (async function(){
        var result = await axios.post("login",`uphone=${user.phone}&upwd=${user.pwd}`)
        //登陆成功
        if(result.data.code==1){
          var uname=result.data.outcome[0].uname
          //保存当前登陆的用户信息
          context.commit("_setStorage",uname)
          user.thisx.$alert(`尊敬的会员：${context.getters.getStorage}，您好`,"欢迎",{
          confirmButtonText: '确定',
          callback: ()=>{
            console.log('这里是store+'+context.getters.getPath)
            //直接跳转vuex中的路径
            user.thisx.$router.push(context.getters.getPath)
          }
          })
        }else{
          user.thisx.$message.error('用户名或密码错误');
        }
        
        
      })()
    }
  },
  getters:{
    getStorage(state){
      if(!state.user){
        state.user = localStorage.getItem(key) // localStorage.getItem(key) // 获取缓存中的数据
      }
      return state.user
    },
    getPath(state){
      return state.fromPath
    }
  }
})
