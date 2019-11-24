<template>
    <swiper id="pa" :options="swiperOption" v-if="courselImg.length>0">
        <swiper-slide data-swiper-autoplay="1500" v-for="(item,i) of courselImg" :key="i">
            <img :src="nodeURL+item.imgUrl" alt="">
        </swiper-slide>
        <!-- 指示器 -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
export default {
    props:["courselImg"],
    data(){
        return{
             swiperOption: {
                autoplay: {disableOnInteraction: false},
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    }
}
</script>
<style scoped>
    #pa{
        margin-top: 20px;
    }
    /* 指示器的样式 */
    #pa /deep/ .swiper-pagination-bullet {
      width:15px;
      height: 15px;
      /* border-radius: 50%; */
    }
    #pa /deep/  .swiper-pagination-bullet-active{
            background: #ff4e7e;
    }
</style>