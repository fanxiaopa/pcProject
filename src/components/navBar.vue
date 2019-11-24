<template>
<div>
    <div class="topcontainer" style="width=1150px">
        <div class="top">
            <div class="tophome"><a href="/" id="m_home" class="active"><img src="@/assets/images/home.jpg" width="50" height="48" alt="婚礼风尚首页" /></a></div>
            <div class="menu">
                <ul>
                    <li @click="change(index)" v-for="(p,index) of path" :key="index" :class="{actives:navIndex==index}">
                        <router-link class="routerLink" :to="p.href">{{p.target}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="login" id="userstatus">
                <router-link v-if="!$store.getters.getStorage"  to="/login"><span @click="login">登陆</span></router-link>
                <div v-else>
                     <img src="@/assets/images/user3.png" alt="">
                     <div>
                         <router-link  to="/">{{$store.getters.getStorage}}</router-link>
                     </div>
                </div>
                <router-link  v-if="!$store.getters.getStorage" to="/reg">注册</router-link>
                 <el-button v-else @click="removeStorage" type="info">退出</el-button>
            </div>
            <div class="follow" style="right:10px;">
                <a href="http://weibo.com/weddingvogue" target="_blank" title="婚礼风尚新浪微博"><img src="@/assets/images/icon1.jpg" width="18" height="21" alt="新浪微博" /></a>
                <a href="#" title="婚礼风尚腾讯微博"><img src="@/assets/images/icon2.jpg" width="22" height="21" alt="腾讯微博" /></a>
                <a href="#" title="婚礼风尚开心网"><img src="@/assets/images/icon3.jpg" width="22" height="21" alt="开心网" /></a>
                <a href="#" title="婚礼风尚校内网"><img src="@/assets/images/icon4.jpg" width="18" height="21" alt="校内网" /></a>
            </div>
        </div>
    </div>
     <!-- 婚礼风尚 ，答谢晚宴10th-->
    <div class="headcontainer" style="">
            <div class="head">
                <div class="logo"><a href="/" title="婚礼风尚"><img src="@/assets/images/nlogo.jpg" width="200" height="82" alt="婚礼风尚" /></a></div>
                <div class="headbanner">
                    <a v-if="navBarImg" href="https://www.weddingvogue.cn/articles/182534" target="_blank">
                        <img :src="'http://127.0.0.1:4000/'+navBarImg.imgUrl" />
                    </a>
                </div>
            </div>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    props:["navBarImg","uname","navIndex"],
    data(){
        return{
            path:[
                {target:"资讯",href:"/information"},
                {target:"婚礼图片",href:"/information"},
                {target:"婚礼机构",href:"/information"},
                {target:"婚礼视频",href:"/information"},
                {target:"婚礼人",href:"/information"}
            ],
            chose:'s'
        }
    },
    methods:{
        change(index){
            this.chose=index;
            // sessionStorage.setItem("navIndex",0)
            sessionStorage.setItem("navIndex",index)
            console.log(index)
        },
        removeStorage(){
            this.$confirm(`${this.$store.getters.getStorage}，您真的要离开吗?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.commit('_removeStorage');
                this.$router.push("/index")
            }).catch(() => {
                this.$message({
                    type: 'warning',
                    message: '再看一会吧(#^.^#)'
                });          
            });
      },
      ...mapMutations(["setPath"]),
      //在导航栏点击登录时，在store里保存路由信息
      login(){
        //  this.$store.commit("setPath","/")
         this.setPath("/")
      }
    }
}
</script>
<style scoped>
  .login,.login>div{
      display: flex;
      align-items: center
  }
  .login span{
      margin-top: 5px;
  }
  
</style>