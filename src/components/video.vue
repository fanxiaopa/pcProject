<template>
    <div class="video" >
        <p class="title">{{title}}</p>
        <video id="example_video_1" class="video-js vjs-fluid img-fluid" :poster="nodeURL+pic" preload="preload">
            <source :src="path">
        </video>
    </div>
</template>
<script>
export default {
    props:["path","pic","title"],
    data(){
        return{

        }
    },
    mounted(){
        //必须加定时器，不要获取不到视屏
        setTimeout(() => {
             this.initVideo();
             console.log(this.pic);
        }, 100);
    //    history.go(0);
    //    return

    },
    methods:{
        initVideo(){
            let myPlayer=this.$video("example_video_1",{
                 muted: false,//是否静音
                controls : true/false,//是否拥有控制条      
                height:300, 
                width:400,
                loop : true,//视频播放结束后，是否循环播放
                // 更多配置.....
                playbackRates:[0.5,1] //设置播放速度
               
            })
        },
        
    }
}
</script>
<style scoped>
  .video{
     width: 1150px;
    /* height: 647px; */
  }
 .title{
     text-align: center;
     font-size: 24px;
     color: #c5016f;
     font-weight: normal;
     margin-top: 30px;
     margin-bottom: 30px;
 }
</style>