<template>
<div>
    <button @click="go">zou</button>
    <div class="infolist">
            <div  class="everylist" :class="className" v-for="(item,i) of infolist" :key="i">
                <div class="left" >
                    <a href="javascript:;" >
                         <img :src="'http://127.0.0.1:4000/'+item.imgUrl" :title="item.info_head">
                    </a>
                </div>
                <div class="right" style="margin-left:22px;padding-right:12px;border-bottom:1px solid #e7e7e7">
                    <p class="info_head">{{item.info_head}}</p>
                    <p class="info_author" style="margin-top:5px;">{{item.info_author}}</p>
                    <p class="info_content" style="margin-top:10px;">{{item.info_content}}</p>
                </div>
            </div>
    </div>
</div>
</template>
<script>
import funs from "../../assets/js/funs.js"
export default {
    data(){
        return{
            infolist:'',
            direction:"bottom",
            className:{
                change:true
            }
        }
    },
    methods:{
        go(){
            this.className.change=this.direction=="right"?false:true;
        }
    },
   
    created(){
        funs.otherImg(res=>{
            this.infolist=res.data.slice(6,12)
        })
        this.go()
    }
}
</script>
<style scoped>
.infolist{
        display: flex;
        flex-flow: row wrap;
    }
   .everylist{
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
    .change{
         width:25%;
        flex-direction: column
    }

</style>