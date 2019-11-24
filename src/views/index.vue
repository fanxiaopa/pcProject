<template>
<div ref="viewBox">
<div style="margin:0 auto;width:1150px;">
    <div ref="topad" id="topad" style="">
        <a href="https://www.weddingvogue.cn/pictures/186224" target="_blank">
            <img src="@/assets/images/top1.jpg" alt="" />
        </a>
    </div>
    <div ref="topsmallad" id="topsmallad" style="">
        <a href="@/assets/https://www.weddingvogue.cn/pictures/186224" target="_blank">
            <img src="@/assets/images/top2.jpg" alt="" />
        </a>
    </div>
    <!-- 导航栏部分 -->
   <navBar :navBarImg="otherImg[0]" :uname="uname"></navBar>

   <!-- 大轮播部分 -->
   <carousel :courselTop="courselTop" :courselThump="courselThump" :coursel2="coursel2"></carousel>


   <!-- infomation 滚轮效果-->
    <div class="infos">
    <transition class="infos" name="fade">
        <div v-if="infoDisplay">
            <pinkBlock top="Information" bottom="最新资讯" path="/information"></pinkBlock>
                <!-- infoBanner板块 -->
            <div class="infoBanner">
                <div v-for="(item,i) of infoBannerImg" :key="i">
                    <a href="">
                        <img :src="nodeURL+item.imgUrl" alt="">
                    </a>
                </div>
            </div>
            <textList :list="infolist" direction="right" ></textList>
        </div>
    </transition>
    </div>
    <!-- Wedding Photo 滚轮效果-->
    <transition name="fade">
        <div v-if="weddingDisplay">
            <pinkBlock top="Wedding" bottom="婚礼图片"></pinkBlock>
            <!-- PhotoBanner -->
            <div class="photoBanner">
                <div v-for="(item,i) of photoBanner" :key="i">
                    <img :src="nodeURL+item.imgUrl" :title="item.info_head">
                    <p style="font-size:14px;"><a style="color:#585858" href="">{{item.info_head}}</a></p>
                    <p style="font-size:12px;color:#b4b4b4">{{item.info_content}}</p>
                </div>
            </div>
           <!-- PhotoList -->
             <textList :list="photoList" direction="bottom" align="center"></textList>
            <div class="line"></div>
        </div>
    </transition>

    <!-- Wedding Video 滚轮效果-->
    <transition  name="fade">
        <div v-if="videoDisplay">
            <pinkBlock top="Wedding Video" bottom="婚礼视频"></pinkBlock>
            <!-- weddingVideo轮播 -->
            <carouselVideo :videophoto="videophoto"></carouselVideo> 
        </div>  
    </transition>
 
    <!-- 右侧导航栏按钮 -->
    <transition name="slide-fade">
        <totop v-if="totop"></totop>
    </transition>
</div>
<!-- 尾部 -->
<foot></foot>
</div>

</template>

<script>
import navBar from "../components/navBar"
import carousel from "../components/carousel"
import pinkBlock from "../components/pinkBlock"
import textList from "@/components/photoTextList.vue"
import carouselVideo from "../components/carouselVideo"
import foot from "../components/footer"
import totop from "../components/toTop"
import funs from "../assets/js/funs.js"
export default {
    data(){
        return{
            courselTop:[],
            courselThump:[],
            coursel2:[],
            otherImg:[],
            infoBannerImg:[],
            infolist:[],
            photoBanner:[],
            photoList:[],
            videophoto:[],
            infoDisplay:false,
            weddingDisplay:false,
            videoDisplay:false,
            totop:false,
            uname:''
        }
    },
    created(){
            funs.getImg(res=>{
                this.courselTop=res.data.slice(0,6);
                this.courselThump=res.data.slice(6,12);
                this.coursel2=res.data.slice(12,15);
            }),
            funs.otherImg(res=>{
                this.otherImg=res.data
                this.infoBannerImg=res.data.slice(4,6)
                this.infolist=res.data.slice(6,12)
                this.photoBanner=res.data.slice(12,15);
                this.photoList=res.data.slice(15,23);
                this.videophoto=res.data.slice(23,28)
            })
    },
    mounted(){
        this.change()
        window.addEventListener('scroll', this.hade);
        var uname=this.$route.query.uname;
        this.uname=uname;
        
    },
    methods:{
        // 头顶动画效果
        change(){
            var topad=this.$refs.topad;
            var topsmallad=this.$refs.topsmallad;
            setTimeout(()=>{
                topad.style.height=0
                topad.addEventListener("transitionend",()=>{
                    topsmallad.style.height="118px"
                },true)
            },2000)
        },
        //监听滚轮
       hade(){
             //var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
            var scrollTop=window.pageYOffset
                // console.log(scrollTop)
            if(scrollTop>=380){
                this.infoDisplay=true
            }
            if(scrollTop>=1730){
                this.weddingDisplay=true
            }
            if(scrollTop>=3459){
                this.videoDisplay=true;
            }
            if(scrollTop>=300){
                this.totop=true
            }
            else{
                this.totop=false
            }
       }
        
    },
    //  离开页面清除（移除）滚轮滚动事件
    destroyed(){
        window.removeEventListener('scroll', this.hade);   
    },
    components:{
       navBar,
       carousel,
       pinkBlock,
       carouselVideo,
       foot,
       totop,
       textList
    }
}
</script>
<style scoped>
/*****************************右侧导航按钮样式****************************/
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,.slide-fade-leave-to{
  opacity: 0;
}
.slide-fade-enter{transform: translateY(500px);}
.slide-fade-leave-to{transform: translateX(40px);}
/************************************End*********************************/

/***********************************板块的淡入淡出************************/
.fade-enter-active,.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
/************************************End*********************************/

/***********************************实线样式*******************************/
.line{
    margin-top: 20px;
    height: 20px;
    border-bottom: #e5e5e5 1px solid;
} 
/************************************End*********************************/

/***********************头顶图片(动画效果))***************************/ 
    #topad{
        height: 650px;
        transition: height 1s;
        overflow: hidden;
    }
    #topsmallad{
        overflow: hidden;
        height: 0;
        transition: height 1.5s;
    }
    /* #container,#topsmalled{
        border:1px solid red;
    } */
/************************************End*********************************/

/* *********************************infomation样式************************ */
/**********************information Banner的样式***************/
    .infoBanner{
        width: 1150px;
        display: flex;
        justify-content: space-between;
        margin-top: 36px;
    }
    /**/ 
    .infolist{
        display: flex;
        flex-flow: row wrap;
    }
   .infolist>.everylist{
        width:50%;
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }
    .right>.info_head{
        font-size: 14px;
        color: #585858;
    }
    .right>.info_author{
        font-size: 12px;
        color:#b4b4b4;
    }
    .right>.info_content{
        font-family:microsoft yahei, 微软雅黑, Arial, Helvetica, sans-serif;
        color:#7f7f7f;
        font-size: 12px;
    }
/***********photoBanner的样式***********/ 
    .photoBanner{
        margin-top: 33px;
        display: flex;
        justify-content: space-around
    }
    .photoBanner p{
        text-align: center;
    }
    .photolist{
        width: 1150px;
        display: flex;
        flex-wrap: wrap;
    }
    .photolist>div{
        width: 25%;
        margin-top: 25px;
        text-align: center;
    }

  
</style>