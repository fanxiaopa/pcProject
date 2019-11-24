<template>

    <div class="infolist" :class="column">
            <div  class="everylist" :class="className" v-for="(item,i) of list" :key="i">
                <div class="left" >
                    <a href="javascript:;" >
                         <img :src="nodeURL+item.imgUrl" :title="item.info_head">
                    </a>
                </div>
                <div class="right" style="margin-left:22px;padding-right:12px;border-bottom:1px solid #e7e7e7">
                    <p @click="goto(i)" class="info_head">{{item.info_head}}</p>
                    <div :class="classText">
                        <p class="info_author"  style="margin-top:5px;">{{item.info_author}}</p>
                        <p class="info_content" style="margin-top:10px;">{{item.info_content}}</p>
                    </div>
                </div>
            </div>
    </div>
    
</template>
<script>
import funs from "@/assets/js/funs.js"
export default {
    // 该组件有四个属性，后台数据，文字与图片相对位置，文字居中，是否y轴弹性
    props:["list","direction","align","columnY"],
    data(){
        return{
            infolist:'',
            className:{
                change:true,
               
            },
            classText:{
                 textCenter:false
            },
            column:{
                columns:false
            }
           
        }
    },
    methods:{
        go(){
            // 判断文字与图片的相对位置
            this.className.change=this.direction=="right"?false:true;
            // 判断文字是否居中对齐
            this. classText.textCenter=this.align=="center"?true:false;
            this.column.columns=this.columnY=="yes"?true:false
        },
        //单击文章标题，跳转文章网页，传递参数
        goto(i){
            i++;
            this.$store.commit("setPath",`/articles?aid=${i}`)
            if(!this.$store.getters.getStorage){
                this.$confirm('登录后观看精彩内容', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push('/login')
                })
            }
            else{
                this.$router.push(`/articles?aid=${i}`)
            } 
        }
    },
   
    mounted(){
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
    .right .info_head{
        font-size: 14px;
        color: #585858;
        margin-top: 10px;
    }
    .info_head:hover{
        color: #ff4d7d;
        cursor: pointer;
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
    
    /* **************************组件中根据属性改变类 **********************/
    /* 文字和图片的相对位置 此时文字在图片下方 */
    .change{
         width:25%;
         flex-direction: column;
         align-items: center;
         margin-top: 17px;
    }
    /* 让文字居中对齐 */
    .textCenter{
        margin-top: 10px;
        text-align: center
    }
    /* .divDirection{
        display: flex;
    } */
    .columns{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        /* width: 90% */
        
    }
   
    /**********************************End************************************* */
</style>