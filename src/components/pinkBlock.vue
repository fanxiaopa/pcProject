<template>
    <div class="head" style="">              
        <div class="title">
            <a href="/articles">{{top}}</a>
        </div>
        <div class="more">
            <a href="javascript:;" @click="getStorage">SEE MORE</a>
        </div>
        <div class="title2">
            -
            <a href="/articles">{{bottom}}</a>
            -
     </div>
   </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    props:["top","bottom","path"],
    methods:{
        //将this.setPath映射为 this.commit("setPath"),和其他methods中的方法同级
        ...mapMutations(["setPath"]),
        getStorage(){
            // this.user = localStorage.getItem('user')
            this.user=this.$store.getters.getStorage
            this.setPath(this.path)
            if(!this.user){
                 // 如果缓存中没有此用户，路由导向 登陆页
                this.$confirm('登录后可观赏精彩内容', '登录提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                         this.$router.push("/login")
                    }).catch(() => {
                        console.log(123)        
                    });
            }else{
                this.$router.push(this.path)// 否则，界面显示 当前用户名称
            }
        }
         
    }
}
</script>
<style scoped>
    .head{margin-top: 45px;}
    .head>div{text-align:center}
    .title a{
        color: #737373;
        font-size: 36px;
        transition: all .5s linear;
        text-align: center
    }
    .title a:hover{color: #ff4e7e}
    .more{margin-top: 15px;}
    .more a{
        display: block;
        margin: 0 auto;
        width: 226px;
        height: 50px;
        border: 1px solid #ff4d7d;
        background: #ff4d7d;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 50px;
    }
    .title2{margin-top: 20px;color: #737373}
    .title2 a{
        font-size: 14px;
        font-family:microsoft yahei, 微软雅黑, Arial, Helvetica, sans-serif;
        color: #737373;
        font-weight:bold;
    }
</style>