<template>
<div>
    <!-- 头部 -->
    <navBar :navBarImg="otherImg[1]" :navIndex="navIndex"></navBar>
    <!-- 中间内容区域 -->
    <div class="container">
        <!-- 普通轮播 -->
        <transition name="slide-fade">
            <div v-if="coursel" >
                <normalCoursel :courselImg="courselImg"></normalCoursel>
            </div>
        </transition>
        <!-- News板块 -->
        <transition   name="slide-fade">
            <div v-if="infoDisplay">
                <pinkBlock top="News" bottom="最新资讯"></pinkBlock>
                <textList :list="photolist" direction="bottom" align="center" ></textList>
            </div>
        </transition>
        <!-- WeddingGuide板块 -->
        <transition   name="slide-fade">
            <div v-if="guideDisplay">
                <pinkBlock top="WeddingGuide" bottom="婚礼攻略"></pinkBlock>
                <textList :list="infolist" direction="right" ></textList>
            </div>
        </transition>
        <!-- Weddingvogue Event -->
        <transition   name="slide-fade">
            <div v-if="eventDisplay">
                <pinkBlock top="Weddingvogue Event" bottom="风尚活动"></pinkBlock>
                <div class="eventDiv">
                    <div class="infolist">
                        <div  class="everylist"  v-for="(item,i) of eventlist" :key="i">
                            <div class="left" >
                                <a href="javascript:;" >
                                    <img :src="nodeURL+item.imgUrl" :title="item.info_head">
                                </a>
                            </div>
                            <div class="right" style="margin-left:22px;padding-right:12px;border-bottom:1px solid #e7e7e7">
                                <p class="info_head">{{item.info_head}}</p>
                                <div>
                                    <p class="info_author"  style="margin-top:5px;">{{item.info_author}}</p>
                                    <p class="info_content" style="margin-top:10px;">{{item.info_content}}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="rightImg">
                        <img :src="nodeURL+'/infoPhoto/eventBanner.jpg'" alt="">
                    </div>
                </div>
            </div>
        </transition> 
    </div>
    <!-- 尾部 -->
    <foot></foot>
</div>
</template>
<script>
import navBar from '../components/navBar'
import foot from '../components/footer'
import normalCoursel from '../components/normalCoursel'
import pinkBlock from '../components/pinkBlock'
import textList from '../components/photoTextList'
import funs from "../assets/js/funs.js"
export default {
    data(){
        return {
            otherImg:'',
            courselImg:'',
            photolist:'',
            infolist:'',
            eventlist:'',
            coursel:false,
            infoDisplay:false,
            guideDisplay:false,
            eventDisplay:false,
            navIndex:"none",
        }
    },
    created(){
        
        //如果没有登陆，则直接跳转登陆页面
        if(!localStorage.getItem('user')){
           alert("请登录！")
           this.$router.push("/login")
        }
        funs.otherImg(res=>{
            this.otherImg=res.data
            // this.infoBannerImg=res.data.slice(4,6)
            this.infolist=res.data.slice(6,10)
            this.eventlist=res.data.slice(32,35)
            // this.photoBanner=res.data.slice(12,15);
            this.photolist=res.data.slice(28,32);
            // this.videophoto=res.data.slice(23,29)
            console.log(this.photolist)
        })
        funs.getImg(res=>{
            this.courselImg=res.data.slice(15,19)
        })
    },
    mounted(){
       this.coursel=true;
        window.addEventListener('scroll', this.hade);
        this.navIndex=sessionStorage.getItem("navIndex")
        console.log(this.navIndex)
    },
    methods:{
         hade(){
            var scrollTop=window.pageYOffset
                //  console.log(scrollTop)
            if(scrollTop>=200){
                this.infoDisplay=true
            }
            if(scrollTop>=800){
                this.guideDisplay=true
            }
            if(scrollTop>=1670){
                this.eventDisplay=true
            }
       }
    },
    destroyed(){
        window.removeEventListener('scroll', this.hade);   
    },
    components:{
        navBar,
        foot,
        normalCoursel,
        pinkBlock,
        textList
    }
}
</script>
<style scoped>


/*************************设置中间大内容区域定宽为1150px********************* */
    .container{
        width: 1150px;
        margin:0 auto  
   }
/**********************************End************************************ */  

/*******************************设置Weddingvogue Event的布局样式 */
   .eventDiv{
       display: flex;
       margin-top: 30px;
       height: 615px;
   }
   .eventDiv>.infolist{
        display: flex;
       flex-direction: column;
       width: 90%;
       justify-content:space-between
    }
   .everylist{
        width:100%;
        display: flex;
        justify-content: flex-start;
    }
    .right .info_head{
        font-size: 14px;
        color: #585858;
        margin-top: 10px;
    }
    .right .info_author{
        font-size: 12px;
        color:#b4b4b4;
    }
    .right .info_content{
        font-family:microsoft yahei, 微软雅黑, Arial, Helvetica, sans-serif;
        color:#7f7f7f;
        font-size: 12px;
    }
/********************************End************************* */
</style>