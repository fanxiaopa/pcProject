/**************************此文件用于存放axios请求*************************/
import Axios from "axios"
var funs={
    /* *********登陆检测账号密码 post请求**********/
    getUser:function(callback,uPhone,uPwd){
        var url='login';
        // var obj={uphone:uPhone,upwd:uPwd};
        var str=`uphone=${uPhone}&upwd=${uPwd}`
        Axios.post(url,str)
        .then(callback)
    },
    /**************注册**************/
    regUser:function(callback,uName,uPwd,uPhone){
        var url="/register";
        var str=`uname=${uName}&uphone=${uPhone}&upwd=${uPwd}`
        Axios.post(url,str).then(callback)
    }, 
    /************修改密码***********/ 
    forgetUpwd:function(callback,uPhone,uPwd){
        var url="/forget";
        var str=`uphone=${uPhone}&upwd=${uPwd}`;
        Axios.post(url,str).then(callback)
    },
    /*********请求轮播图图片*******/ 
    getImg:function(callback){
        var url='getImg';
        Axios.get(url).then(callback)
    },
    /********请求导航栏左侧图片********/
    otherImg:function(callback){
        var url="otherImg";
        Axios.get(url).then(callback);
    },
    /************请求文章图片**************** */
    artImg:function(callback,artid){
        var obj={aid:artid};
        var url="articles"
        Axios.get(url,{params:obj}).then(callback)
    }
}
export default funs;