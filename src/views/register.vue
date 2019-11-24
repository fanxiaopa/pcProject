<template>
<div>
    <!-- 顶部导航栏 -->
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
        <transition name="slide-fade">
            <div v-if="show" class="bigReg">
                <div class="regTitle">
                    <p>欢迎加入婚礼风尚</p>
                </div>
                <div class="regPhone">
                    <p>手机号</p>
                </div>
                <div>
                    <input class="inputPhone" type="text" v-model="inputPhone">
                </div>
                <div class="regName">
                    <p>用户昵称</p>
                </div>
                <div>
                    <input class="inputName" type="text" v-model="inputName">
                </div>
                <div class="regUpwd">
                    <p>密码</p>
                </div>
                <div>
                    <input class="inputUpwd" type="text" v-model="inputUpwd">
                </div>
                <div class="regSure">
                    <p>确认密码</p>
                </div>
                <div>
                    <input class="inputSure" type="text" v-model="inputSure">
                </div>
                <div class="regCheck">
                    <p>验证码</p>
                </div>
                <div>
                    <input class="inputCheck" type="text" v-model="inputCheck">
                    <canvas id="c3" @click="change"></canvas>
                </div>
                <div class="read">
                    <input id="check" type="checkbox">
                    <label for="check">
                        <p>已经阅读<a href="https://www.weddingvogue.cn/regagreement">&lt婚礼风尚服务条款&gt</a></p>
                    </label>
                </div>
                <div class="btn">
                   <el-button  type="text" @click="submit">立即注册</el-button>
                </div>
                
            </div>
        </transition>
    </div>

    <foot></foot>
</div>
    
</template>
<script>
import funs from "../assets/js/funs.js"
import canvas from "../assets/js/canvas.js"
import foot from "../components/footer"
export default {
    created(){
        
    },
    mounted(){
         this.show=true;
         setTimeout(() => {
            canvas.checkCode();
         }, 10);
    },
    data(){
        return {
            inputPhone:'',
            inputName:'',
            inputUpwd:'',
            inputSure:'',
            inputCheck:'',
            show:false
        }
    },
    methods:{
        change(){
            canvas.checkCode()
        },
        submit(){
            if(!this.inputPhone){
                this.$message("请输入电话号码")
                return
            }
            if(!this.inputName){
               this.$message("请输入昵称")
                return
            }
            if(!this.inputUpwd){
                this.$message("请输入密码")
                return
            }
            if(this.inputUpwd!=this.inputSure){
                this.$message("密码不一致")
                return
            }
            if(!this.inputCheck){
                this.$message("请输入验证码")
                return
            }
            if(this.inputCheck.toLowerCase()===canvas.str.toLowerCase()){
                //发送注册请求
                funs.regUser((res)=>{
                   this.$store.commit("_setStorage",this.inputName);
                   this.$alert(`恭喜您：${this.$store.getters.getStorage}，加入婚礼风尚`,"注册成功",{
                        confirmButtonText: '确定',
                           callback: ()=>{
                            this.$router.push("/login")
                        }
                    })
                },this.inputName,this.inputUpwd,this.inputPhone)
            }else{
               this.$message.error("验证码错误")
                return
            }
            
        }
    },
    components:{
        foot
    }
}
</script>
<style scoped>
/****************过渡样式************/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}
/***************end****************/ 
.regCheck+div{position: relative}
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
    .bigReg{
        display: flex;
        flex-direction:column;
        /* border: 1px solid blue; */
        height: 512px;
        width: 452px;
        margin:20px auto;
    }
    .between{
         /* border: 1px solid red; */
         height: 560px;
        /* width: 1150px; */
    }
    .regTitle{
        text-align: center;
        font-size: 36px;
        color: #c70070;
       margin-bottom: 20px;
    }
    .regName,.regPhone,.regUpwd,.regCheck,.regSure{
        font-size: 16px;
        color: #585858;
        
    }
    .inputPhone,.inputName,.inputUpwd,.inputSure{
        width: 100%;
        outline: none;
        height: 38px;
        line-height:38px;
        width: 440px;
        border:#ccc 1px solid;
        font-size: 16px;
        padding: 0 5px;
    }
    .inputCheck{
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
    .regChose{
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
    .regPhone+div,.regUpwd+div,.regSure+div{
        margin-bottom: 20px;
    }
    .regCheck+div,.btn{
        margin-bottom: 20px;
    }
    .read{
        display: flex;
        align-items: center;
        margin-bottom:40px;
    }
    .read p{
        margin-left: 10px;
    }
</style>