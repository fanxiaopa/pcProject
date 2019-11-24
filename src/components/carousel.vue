<template>
<div class="container">
     <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" v-if="courselThump.length>0">
        <swiper-slide v-for="(item,i) of courselTop" :key="i">
            <img :src="nodeURL+item.imgUrl" alt="">
        </swiper-slide>
        <!-- 左右箭头 -->
        <!-- <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div> -->
      </swiper>

      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" v-if="courselThump.length>0">
        <swiper-slide v-for="(item,i) of courselThump" :key="i">
            <img :src="nodeURL+item.imgUrl" alt="">
        </swiper-slide>
      </swiper>
      <!-- 实线部分 -->
       <div class="line"></div>
      <!-- swiper3 -->
       <swiper id="pa" :options="swiperOption2" >
            <swiper-slide data-swiper-autoplay="4000" v-for="(item,i) of coursel2" :key="i">
                <img :src="nodeURL+item.imgUrl" alt="">
            </swiper-slide>
        <!-- 指示器 -->
        <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
</div>
</template>
<script>
import carousel from "../components/carousel"
export default {
    props:["courselTop","courselThump","coursel2"],
    data(){
        return {
         swiperOptionTop: {
         autoplay: {disableOnInteraction: false},
          effect : 'fade',
          spaceBetween: 10,
           loop: true,
          loopedSlides: 5, //looped slides should be the same
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 6,
          touchRatio: 0.2,
          slideToClickedSlide: true,
            loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideThumbActiveClass: 'my-slide-thumb-active',
        },
        swiperOption2: {
            autoplay: {disableOnInteraction: false},
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        }
      }
    },
    mounted() {
        //axios数据还未返回，延迟执行
        this.top_thumbs();
    },
    methods:{
        //实现轮播上下联动
        top_thumbs(){
            setTimeout(()=>{
                 const swiperTop = this.$refs.swiperTop.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            },1000)
        }
    }

}
    
</script>
<style scoped>
.line{
    width: 1150px;
    height: 20px;
    border-bottom:#e5e5e5 1px solid;
    margin-bottom:20px;
}
  .gallery-thumbs .swiper-slide {
    /* width: 25%;
    height: 100%; */
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
  #pa /deep/ .swiper-pagination-bullet {
      width:15px;
      height: 15px;
      /* border-radius: 50%; */
  }
  #pa /deep/  .swiper-pagination-bullet-active{
        background: #ff4e7e;
  }

</style>