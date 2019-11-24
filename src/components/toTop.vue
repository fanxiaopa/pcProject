
<template>
    <div  class="totops" @click="goTop">
        <img src="@/assets/images/totop.png" alt="">
    </div>
</template>
<script>
export default {
    methods:{
        goTop(){
            //总距离
            var dist=1500;
            //总步数
            var steps=100;
            //总时间
            var dura=100;
            //每步走多长
            var step=dist/steps;
            //每步间隔
            var interval=dura/steps;
            var timer=setInterval(()=>{
                window.scrollBy(0,-step);
                steps--;
                if(steps==0){
                    clearInterval(timer);
                    steps=1000
                }
            },interval)
        }
    }
}
</script>
<style scoped>
    .totops{
        height: 50px;width: 50px;
        position: fixed;
        z-index: 1000;
        bottom:200px;
        right: 70px;
        background: #4c4c4c;
        text-align: center;
        cursor: pointer;
    }
</style>