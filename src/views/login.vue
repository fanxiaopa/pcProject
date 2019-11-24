<template>
<div class="father">
    <!-- 最顶部导航栏 -->
    <div class="topcontainer" style="">
        <div class="top">
            <div class="tophome"><a href="/" id="m_home" class="active"><img src="@/assets/images/home.jpg" width="50" height="48" alt="婚礼风尚首页" /></a></div>
            <div class="menu">
                <ul>
                    <li><a href="/articles" id="m_article">资讯</a></li>
                    <li><a href="/pictures" id="m_pic">婚礼图片</a></li>
                    <li><a href="/videos" id="m_video">婚礼视频</a></li>
                    <li><a href="/jigou" id="m_jg">婚礼机构</a></li>
                    <li><a href="/daren" id="m_daren">婚礼人</a></li>
                </ul>
            </div>
            <div class="login" id="userstatus">
                <router-link to="/login">登陆</router-link>
                <router-link to="/reg">注册</router-link>
            </div>
            <div class="follow" style="right:10px;">
                <a href="http://weibo.com/weddingvogue" target="_blank" title="婚礼风尚新浪微博"><img src="@/assets/images/icon1.jpg" width="18" height="21" alt="新浪微博" /></a>
                <a href="#" title="婚礼风尚腾讯微博"><img src="@/assets/images/icon2.jpg" width="22" height="21" alt="腾讯微博" /></a>
                <a href="#" title="婚礼风尚开心网"><img src="@/assets/images/icon3.jpg" width="22" height="21" alt="开心网" /></a>
                <a href="#" title="婚礼风尚校内网"><img src="@/assets/images/icon4.jpg" width="18" height="21" alt="校内网" /></a>
            </div>
        </div>
    </div>

    <div class="between">
        <transition name="fade">
            <div v-if="showLogin" class="bigLogin">
                <div class="loginTitle">
                    <p>登陆</p>
                </div>
                <div class="loginUser">
                    <p>用户名/手机号</p>
                </div>
                <div>
                    <input class="input1" type="text" v-model="inputPhone">
                </div>
                <div class="loginUpwd">
                    <p>密码</p>
                </div>
                <div>
                    <input class="input2" type="password" v-model="inputPwd">
                </div>
                <div class="loginCheck">
                    <p>验证码</p>
                </div>
                <div>
                    <input class="input3" type="text" v-model="inputCheck">
                    <canvas id="c3" @click="change"></canvas>
                </div>
                <div class="btn">
                    <!-- <a href="#" @click="submit"><div>立即登陆</div></a>   -->
                    <el-button  type="text" @click="submit">立即登陆</el-button>
                </div>
                <div class="loginChose">
                    <router-link to="/reg"><div class="register">注册新用户</div></router-link>
                    <router-link to="/forget"><div class="forget">忘记密码？</div></router-link>
                </div>
                
            </div>
        </transition>
    </div>

    <!-- 尾部 -->
    <foot></foot>
</div>
</template>
<script>
import funs from "../assets/js/funs.js"
import canvas from "../assets/js/canvas.js"
import foot from "../components/footer"
import navBar from '../components/navBar'
//actions辅助函数
import {mapActions} from "vuex"
export default {
    created(){
        // 已经登录时，在地址栏访问注册，失效
        if(this.$store.getters.getStorage){
            if(confirm("已登录账号，不能重复登录，您可以修改密码")){
                this.$router.push("/forget")
            }else{
               history.go(-1)
               return
            }

            // alert("已登录账号，不能重复登录，您可以修改密码")
            // this.$router.push("/forget")
        }
    },
    mounted(){
        this.showLogin=true
        setTimeout(() => {
            canvas.checkCode();
        }, 10);
    },
    data(){
        return {
            inputCheck:'',
            inputPhone:'',
            inputPwd:'',
           showLogin:false
        }
    },
    methods:{
        //变换验证码
        change(){
            canvas.checkCode()
        },
        //该方法为调用vuex里面的actions请求异步方法
        ...mapActions(["login"]),
        submit(){
            //输入手机号为空时
            if(!this.inputPhone){
                 this.$message({
                    message: '您输入的手机号为空',
                    type: 'warning'
                });
                return
            }
            //输入密码为空时
            if(!this.inputPwd){
               this.$message({
                    message: '您输入的密码为空',
                    type: 'warning'
                });
               return
            }
            //输入验证码为空时
            if(!this.inputCheck){
               this.$message({
                    message: '您输入的验证码为空',
                    type: 'warning'
                });
               return
            }
            var res= this.inputCheck.toLowerCase()===canvas.str.toLowerCase()
            //验证码正确时
            if(res){
                // funs.getUser(res=>{
                //     if(res.data.code==1){
                //         var uname=res.data.outcome[0].uname
                //        this.$store.commit("_setStorage",uname);
                //     //    alert(`尊敬的会员：${this.$store.getters.getStorage}，您好`)
                //         this.$alert(`尊敬的会员：${this.$store.getters.getStorage}，您好`,"欢迎",{
                //              confirmButtonText: '确定',
                //              callback: ()=>{
                //                  console.log('这里是store+'+this.$store.getters.getPath)
                //                  //直接跳转vuex中的路径
                //                  this.$router.push(this.$store.getters.getPath)
                                 
                //             }
                //         })
                //     }else{
                //         this.$message.error('用户名或密码错误');
                //     }
                // },this.inputPhone,this.inputPwd)
                var user={phone:this.inputPhone,pwd:this.inputPwd,thisx:this}
                //此处thisx的作用是将当前组件对象传给vue
                this.login(user)
                //user为载荷
            }else{
                // alert("验证码错误")
               this.$message.error('验证码错误');
            }
            
        }
    },
    components:{
        // navBar,
        foot,
        navBar
    }
}
</script>
<style scoped>
/****************过渡样式************/ 
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
/***************end****************/
    .father{
        min-width:1150px;
    }

    .loginCheck+div{position: relative}
    #c3{
        /* background: #ddd; */
        width: 80px;height: 50px;
        position: absolute;
        top: -3px;right: 0
    }
    .check{
        margin: 50px auto;
        width: 70px;
        height:30px;
        overflow: hidden;
    }
    .bigLogin{
        display: flex;
        flex-direction:column;
        /* border: 1px solid blue; */
        height: 440px;
        width: 452px;
        /* margin-top:20px ;margin-left: 800px; */
        margin: 50px auto;
        /* box-shadow: 1px 1px 1px 1px #585858; */
        /* background: #ddd */
    }
    .between{
         /* border: 1px solid red; */
         height: 500px;
        /* width: 1150px; */
        /* background-image: url("https://weizhihunli.oss-cn-hangzhou.aliyuncs.com/image/201908/20190826113731_0416.jpg"); */
        background-repeat: repeat-x;
        background-size:contain
    }
    .loginTitle{
        text-align: center;
        font-size: 36px;
        color: #c70070;
       margin-bottom: 20px;
    }
    .loginUser,.loginUpwd,.loginCheck{
        font-size: 16px;
        color: #585858;
        
    }
    .input1,.input2{
        width: 100%;
        outline: none;
        height: 38px;
        line-height:38px;
        width: 440px;
        border:#ccc 1px solid;
        font-size: 16px;
        padding: 0 5px;
    }
    .input3{
        height: 38px;
        line-height: 38px;
        border: #ccc 1px solid;
        font-size: 16px;
        padding: 0 5px;
        width: 345px;
    }
    .btn{
        width: 450px;
        height:36px;
        background: #ff4e7e;
        border: #ff4e7e 1px solid;
        font-size: 18px;
        text-align: center;
        line-height: 36px;
        cursor: pointer;
    }
    .btn>a{
        list-style: none;
        text-decoration: none;
        color: #fff;
        width: 100%;
    }
    .loginChose{
        display: flex;
        justify-content: space-between
    }
    .register,.forget{
        border: 1px solid red;
        background: #f2f2f2;
        border: #f2f2f2 1px solid;
        width: 219px;
        height: 38px;
        font-size: 16px;
        color: #585858;
        line-height: 38px;
        text-align: center;
    }
    .loginUser+div,.loginUpwd+div{
        margin-bottom: 10px;
    }
    .loginCheck+div,.btn{
        margin-bottom: 20px;
    }
    
</style>