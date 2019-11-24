<template>
<div>
    <navBar :navBarImg="otherImg[3]"></navBar>
    <div class="container">
        <video1 :title="vtitle" :path="vpath" :pic="vpic"></video1>
    </div>
    <foot></foot>
</div>
</template>
<script>
import navBar from '../components/navBar'
import foot from '../components/footer'
import video1 from '../components/video'
import funs from "../assets/js/funs.js"
export default {
    data(){
        return{
            otherImg:'',
            vpath:'',
            vpic:'',
            vtitle:''
        }
    },
    created(){
        funs.otherImg(res=>{
            this.otherImg=res.data
        })
    },
    mounted(){
        //判断是否登录，登录不执行
        if(!localStorage.getItem("user")){
            this.chooseLogin()
        }
        this.vpath=this.$route.query.vpath;
        this.vpic=this.$route.query.vpic;
        this.vtitle=this.$route.query.vtitle;
        console.log(this.vpath,this.vpic)
    },
    methods:{
        chooseLogin(){
            this.$confirm('登录后可观赏精彩内容', '登录提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                //确定，跳转登录页面
                location.replace(this.cliURL+'login')
            }).catch(() => {
                //取消跳转首页
                location.replace(this.cliURL)
            });
            
        }
    },
    components:{
        navBar,
        foot,
        video1
    }
}
</script>
<style scoped>
.container{
    width: 1150px;
    margin: 0 auto;
}

</style>