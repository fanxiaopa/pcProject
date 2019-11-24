<template>
<div>
    <!-- 头部 -->
    <navBar :navBarImg="otherImg[3]"></navBar>
    <div class="container">
        <h1 class="article_title">{{img.art_head}}</h1>
        <div class="article_info">{{img.art_author}}</div>
        <div class="article_content">
        <!-- 文章第一段，有过渡效果 -->
        <transition name="slide-fade">
        <div v-if="phase1">
            <h2 style="text-align:center"><strong><span v-if="img.phase1" style="color:#f39c12">01 # &nbsp;<br />
            <br />
            {{img.phase1}}</span></strong></h2>
            <br />
            一见钟情的故事屡见不鲜，新东方雅思老师和托福老师的一见钟情你猜会是什么样？<br />
            <br />
            「见到你的那一刻，我的脑子一片空白，只剩下 &ldquo;Hi，how are you&rdquo;」<br />
            <br />
            原来真的遇见那个人的时候，嘴巴里是说不出好听的话的。<br />
            <br />
            5年的爱情长跑，Tiana（新娘）和Kurt（新郎）经历了异地的考验和来自家庭的牵绊，但他们用坚持验证了，爱情可以打败。
            <div style="text-align: center;"><br />
            <img :src="nodeURL+img.artImg1" alt=""><br />
            &nbsp;</div>
            Tiana钟情于大海，在备婚时就看遍了国内外海岛，对于身处南京的他们来说，目的地海岛婚礼是他们梦想中婚礼的样子。<br />
            <br />
            大海，总给人无限的遐想。<br />
            <br />
            举办一场海边的草坪婚礼，在山和海的见证下，爱情也壮阔而深远起来&hellip;&hellip;<br />
            <br />
            于是在金茂三亚亚龙湾丽思卡尔顿酒店，VIA唯然婚礼机构（后文简称VIA唯然婚礼）为他们圆了目的地婚礼的梦想。
            <div style="text-align: center;"><br />
            <img :src="nodeURL+img.artImg2" alt=""></div>
            <br />
            一望无际的海，一望无际的天，挚爱亲朋，海风音乐，欢声笑语&hellip;&hellip;<br />
            <br />
            目的地婚礼最大的魅力可能就是这些生动的、闪光的、无法被遗忘的瞬间。
            <div style="text-align: center;"><br />
            <img :src="nodeURL+img.artImg3" alt=""></div>
            &nbsp;
        </div>
        </transition>
        <!-- 文章第二段，有过渡效果 -->
        <transition name="slide-fade">
        <div v-if="phase2">
            <h2 style="text-align:center"><span v-if="img.phase2" style="color:#f39c12"><strong>02 # &nbsp;<br />
            <br />
            {{img.phase2}}</strong></span></h2>
            <br />
            去繁就简，清爽的海风扑面而来。<br />
            <br />
            也许我们需要的只是感情本身的魅力&hellip;<br />
            <br />
            在了解了新人对婚礼的想法之后，VIA唯然婚礼将最终的婚礼主题确定为「Orange」。
            <div style="text-align: center;"><br />
            <img :src="nodeURL+img.artImg4" alt=""></div>
            <br />
            Orange既是新娘喜欢的色彩，又和她的性格一样热情阳光。撒向海边的亮橙色，是攒了一整个夏天的温暖。<br />
            <br />
            VIA的小伙伴提前在南京准备了栖霞山的枫叶带到三亚，配合新郎留学加拿大的经历，寄托了那些年在北美的回忆。
            <div style="text-align: center;"><br />
            <img :src="nodeURL+img.artImg5" alt=""><br />
            <br />
            <img :src="nodeURL+img.artImg6" alt=""><br />
            &nbsp;</div>
            Tiana一直很忙没有时间进行细致的沟通，唯一给出的想法是喜欢明亮的橙色系，设计师因此而确定了&ldquo;玻璃晴朗 橘子辉煌&rdquo;的设计方向。<br />
            <br />
            仪式主背景通透的结构与自然风景相辅相成，明亮的暖色系搭配三亚的碧海蓝天，给到场的亲友眼前一亮的视觉体验。
            <div style="text-align: center;"><br />
            <br />
            &nbsp;</div>
            一眼望去，看到的只有仪式区和宽阔的草坪，开放式设计让大家更好的沉浸在这一片海边风光中，有遮阳帽和蒲扇的加持，明媚晴朗的好心情真是挡也挡不住呢。
            <div style="text-align: center;"><br />
            </div>
            <br />
            当然海边婚礼，操办起来没有远没有看上去那么简单。VIA的小伙伴在搭建时遇到了重重阻力，一边是上货路漫漫，一边还要和海风作斗争。已经布置好的装饰一不注意就被吹歪了，来来回回几次让人哭笑不得。<br />
            <br />
            <br />
            在考虑场地实际情况之后，策划师主张把部分装饰从对称结构改为两边一致的顺风方向，权衡之下让方案的落地达到理想效果。
            <div style="text-align: center;"><br />
            </div>
        </div>
        </transition>
        <!-- 文章第三段，有过渡效果 -->
        <transition name="slide-fade">
        <div v-if="phase3">
            <h2>&nbsp;</h2>
            <h2 style="text-align:center"><span v-if="img.phase3" style="color:#f39c12"><strong>03 #&nbsp;<br />
            {{img.phase3}}</strong></span></h2>
            <br />
            小朋友以证婚人身份来参加婚礼，是这场婚礼不容忽视的亮点。
            <div style="text-align: center;"><br />
            <img :src="nodeURL+img.artImg7" alt=""><br />
            <br />
            &nbsp;</div>
            「&ldquo;我们来拉勾勾，大人不许骗小孩呦&rdquo;」<br />
            <br />
            <br />
            在小小证婚人的见证下，他们认真说出&ldquo;我愿意&rdquo;，眼神坚定又温柔。<br />
            <br />
            父母和亲友其实不能陪我们走完人生，夫妻彼此可以陪伴到年老，而小朋友代表未来，可以见证爱情的延续，邀请小朋友做证婚人是一种美好的祝福。
            <div style="text-align: center;"><br />
            <br />
            </div>
            &nbsp;
        </div>
        </transition>
        <!-- 文章第四段，有过渡效果 -->
        <transition name="slide-fade">
        <div v-if="phase4">
            <h2 style="text-align: center;"><span v-if="img.phase4" style="color:#f39c12"><strong>04 #&nbsp;<br />
            {{img.phase4}}</strong></span></h2>
            <br />
            <br />
            VIA唯然婚礼把印度尼西亚热带轰趴的氛围带到了晚宴现场，也算弥补了新人备婚时错过巴厘岛的遗憾。<br />
            <br />
            考虑到参加婚礼的亲友中长辈居多，设计师特别在现场设置了休息区，用新鲜的水果来装饰餐盘桌面，尽可能地去呈现自然之感。仪式区的座椅也贴心的准备了遮阳帽和蒲扇。
            <div style="text-align: center;"><br />
            <img :src="nodeURL+img.artImg8" alt=""><br /><br />
            </div>

            <div style="text-align: center;"><br />
            <br />
            &nbsp;</div>
            这场在三亚举办的目的地婚礼，除了让人惊艳的婚场布置、周到的细节体验感，还完成了Kurt和Tiana对婚礼的诸多期待：海边婚礼、有创意的证婚、野餐晚宴，最最最重要的是一次难得的全家旅行。<br />
            <br />
            而对于VIA唯然婚礼而言，满足新人期待只是基础，让他们觉得惊喜才是VIA一直在做的事。<br />
        </div>
        </transition>
        
        <transition name="slide-fade">
            <totop v-if="totop"></totop>
        </transition>
    </div>
    </div>
    <foot></foot>
</div>
</template>
<script>
import funs from "../assets/js/funs.js"
import navBar from "../components/navBar"
import foot from "../components/footer"
import totop from "../components/toTop"
export default {
    data(){
        return{
            img:'',
            otherImg:'',
            phase1:false,
            phase2:false,
            phase3:false,
            phase4:false,
            totop:false
        }
    },
    methods:{
        // 滚轮监听事件
         hade(){
             //var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
            var scrollTop=window.pageYOffset
                  console.log(scrollTop)
            if(scrollTop>=2000){
                this.phase2=true
            }
            if(scrollTop>=4265){
                this.phase3=true
            }
            if(scrollTop>=5120){
                this.phase4=true
            }
            //判断右侧导航按钮的出现与消失
           if(scrollTop>=1400){
               this.totop=true
           }else{
                this.totop=false
           }
        }
    },
    created(){
        // 如果用户没登录
        if(!localStorage.getItem('user')){
           alert("请登录！")
           this.$router.push("/login")
        }

        var aid=this.$route.query.aid
        funs.artImg(res=>{
            this.img=res.data[0]
            //  console.log(res.data[0])
        },aid)
        // console.log(this.img)
        funs.otherImg(res=>{
            this.otherImg=res.data
        })
    },
    mounted(){
           this.phase1=true;
        window.addEventListener('scroll', this.hade);
    },
    destroyed(){
        window.removeEventListener('scroll', this.hade);   
    },
    components:{
        navBar,
        foot,
        totop
    }
}
</script>
<style scoped>
.container{
    width: 1150px;
    /* border: 1px solid red; */
    margin: 0 auto
}
/***********************文章的字体样式*********************************/ 
.article_title{ text-align:center; font-size:24px; color:#c5016f; font-weight:normal; margin:20px 0 0 0;}
.article_info{ text-align:center; font-size:12px; color:#afafaf; margin:16px 0 0 0;}
.article_content{ margin:35px 0 0 0; color:#585858; font-size:14px; line-height:25px;}
.article_content a{color:#ff4e7e; font-size:14px;}
.article_content a:hover{ text-decoration:underline;}
.article_content p img{ margin:20px 0 0 0;}
/***************************************** End******************************/

/*****************************右侧导航按钮样式****************************/
.slide-fade-enter-active {
  transition: all 1s ease;
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
</style>