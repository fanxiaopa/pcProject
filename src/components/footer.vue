<template>
<div>
    <div class="foot">
        <div class="left">
            <div>
                <ul>
                    <li><a href="https://weibo.com/u/6066469403?is_hot=1" target="_blank">新浪微博</a></li>
                    <li><a href="http://www.silverwed.com/" target="_blank">银禧婚礼</a></li>
                    <li><a href="https://www.josederosa.com/" target="_blank">蔷薇婚礼</a></li>
                    <li><a href="https://weddingiswear.com/" target="_blank">爱禧会婚礼定制</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="http://www.weizhihunli.com/" target="_blank">微致婚礼</a></li>
                    <li><a href="#" target="_blank">花非花雾非雾</a></li>
                    <li><a href="http://www.hicoconut.com/" target="_blank">椰子海海外婚礼网</a></li>
                </ul>
            </div>
        </div>
        <div class="right">
            <img src="@/assets/images/footer/wx.jpg" alt="">
        </div>
    </div>
    <div class="footend">
        <div>
            <img src="@/assets/images/footer/logo.jpg" alt="">
        </div>
        <div>
            <div class="footnav"><a href="/about">关于我们</a> | <a href="/gonggao">婚礼风尚公告</a> | <a href="/ad">广告刊例</a> | <a href="/job">诚聘英才</a> | <a href="/contact">联系我们</a> | <a href="/login">商户登录</a> </div>
            <div class="font">Copyright 2014. All Rights Reserved. 婚礼风尚 版权所有 <a href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备09072038号</a> </div>
        </div>
        <div>
            <img src="@/assets/images/footer/icon.jpg" alt="">
        </div>
    </div>
</div>
</template>
<style scoped>
    ul{list-style: none;}
    a,.font{color:#8c8c8c;}
    a:hover{
        color: #ff4d7d
    }
    .foot{
        margin-top: 30px;
        border-top:#dbdbdb 1px solid;
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
        padding-left: 150px;
        padding-right: 150px;
    }
    .left{
        display: flex;
    }
    .left>div{
        border-left: 1px solid #dbdbdb;
        padding-left: 15px;
    }
    .left>div:nth-child(2){
        margin-left: 30px;
    }
    .footend{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .footend>:nth-child(1),.footend>:nth-child(2){
        margin-right: 25px;
    }
</style>