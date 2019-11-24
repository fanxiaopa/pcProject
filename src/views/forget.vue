<template>
<div>
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
                <a href="http://www.tmooc.cn/">登陆</a>
                <!-- <router-link to="http://www.tmooc.cn/">登陆</router-link>  -->
                <a href="">注册</a>
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
            <div v-if="show" class="bigforget">
                <div class="forgetTitle">
                    <p>重置密码</p>
                </div>
                <div class="forgetUser">
                    <p>用户名/手机号</p>
                </div>
                <div>
                    <input class="input1" type="text" v-model="inputPhone">
                </div>
                <div class="forgetCheck">
                    <p>验证码</p>
                </div>
                <div>
                    <input class="input3" type="text" v-model="inputCheck">
                    <canvas id="c3" @click="change"></canvas>
                </div>
                <div class="forgetUpwd">
                    <p>新密码</p>
                </div>
                <div>
                    <input class="input2" type="password" v-model="inputNewPwd">
                </div>
                <div class="forgetUpwd">
                    <p>确认密码</p>
                </div>
                <div>
                    <input class="input2" type="password" v-model="inputSurePwd">
                </div>
                <div class="btn">
                     <el-button  type="text" @click="submit">立即修改</el-button>  
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
            inputCheck:'',
            inputPhone:'',
            inputNewPwd:'',
            inputSurePwd:'',
            show:false
        }
    },
    methods:{
        change(){
            canvas.checkCode()
        },
        submit(){
            var res= this.inputCheck.toLowerCase()===canvas.str.toLowerCase()
            // alert(res)
            if(!this.inputPhone){
                this.$message({
                     message: '请输入手机号',
                    type: 'warning'
                });
                return
            }
            if(!this.inputCheck){
                this.$message({
                     message: '请输入验证码',
                    type: 'warning'
                });
                return
            }
            if(!this.inputNewPwd||!this.inputSurePwd){
                this.$message({
                     message: '请输入密码',
                    type: 'warning'
                });
                return
            }
            if(this.inputNewPwd===this.inputSurePwd){
                if(res){
                    funs.forgetUpwd((res)=>{
                        if(res.data.code==1){
                            this.$message({
                                message: '恭喜你，修改成功',
                                type: 'success'
                            });
                            this.$router.push("/login")
                        }else{
                            this.$alert(`用户名不存在，无法修改，清先注册`,"警告",{
                                confirmButtonText: '确定',
                                callback: ()=>{
                                    this.$router.push("/reg")
                                }
                            })  
                        }
                    },this.inputPhone,this.inputSurePwd)
                }else{
                    alert("验证码错误")
                    this.canvas.change()
                    return
                }
            }else{
                alert("密码不一致")
                return
            }
            
        },
        
    },
    components:{
        // navBar,
        foot
    }
}
</script>
<style scoped>
/**********过度样式********/
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
/*************end******** */
    .forgetCheck+div{position: relative}
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
    .bigforget{
        display: flex;
        flex-direction:column;
        /* border: 1px solid blue; */
        height: 440px;
        width: 452px;
        margin:40px auto;
    }
    .between{
         /* border: 1px solid red; */
         height: 500px;
        /* width: 1150px; */
    }
    .forgetTitle{
        text-align: center;
        font-size: 36px;
        color: #c70070;
       margin-bottom: 20px;
    }
    .forgetUser,.forgetUpwd,.forgetCheck{
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
    .forgetUser+div,.forgetUpwd+div{
        margin-bottom: 20px;
    }
    .forgetCheck+div,.btn{
        margin-bottom: 20px;
    }
</style>