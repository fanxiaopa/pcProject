<template>
     <swiper id="pa" :options="swiperOption" v-if="videophoto.length>0">
        <swiper-slide data-swiper-autoplay="2000" v-for="(item,i) of videophoto" :key="i">
            <div >
            <router-link target="_blank" :to="{path:'/videos',query:{vpath:item.a,vpic:item.fengmian,vtitle:item.info_head}}">
                <img :src="nodeURL+item.imgUrl" alt="">
            </router-link>
            </div>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
</template>
<script>
export default {
    props:["videophoto"],
     data(){
        return {
            swiperOption:{
                autoplay: {disableOnInteraction: false},
                effect: 'coverflow',
                // grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1.25,
                coverflowEffect: {
                    rotate: 20, //slide做3d旋转时Y轴的旋转角度。默认50。
                    stretch: 100, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
                    depth: 200,//slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
                    modifier: 2,
                     slideShadows : true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop:true
            }
        }
    },
    methods:{
        go(){
           if(!localStorage.getItem("user")){
              this.$confirm('登录后可观赏精彩内容', '登录提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    //如果没登录先进视频页面选择登录不登录，如果登录再跳转登录页面
                    location.replace(this.cliURL+'login')
                }).catch(() => {
                    //如果没登录先进视频页面选择登录不登录，如果不登录再跳转首页
                    location.replace(this.cliURL)
                });
              
           }
        }
       
    }
   
}
</script>
<style scoped>
    #pa{
        margin-top: 33px;
    }
</style>