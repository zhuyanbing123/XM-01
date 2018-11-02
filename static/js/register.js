/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
    $(".loginLeft input").eq(0).blur(function(){
        var str = $(this).val();
        var email = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        if(!email.test(str)){
            $(this).parent().find("strong").html("邮箱不正确");
        }else {
            $(this).parent().find("strong").html("输入正确");
        }
    }).focus(function(){
        $(this).parent().find("strong").html("填写正确的邮箱");
    });

    $(".loginLeft input").eq(1).blur(function(){
        var str1 = $(this).val();
        var user = /^\w{4,20}$/;
        if(!user.test(str1)){
            $(this).parent().find("strong").html("你输入的用户名不正确");
        }else {
            $(this).parent().find("strong").html("用户名可以注册");
        }
    }).focus(function(){
        $(this).parent().find("strong").html("4-20英文字符,数字,'_'的组合。");
    });

    $(".loginLeft input").eq(2).blur(function(){
        var str2 = $(this).val();
        var psw = /^.{6,16}$/;
        if(!psw.test(str2)){
            $(this).parent().find("strong").html("密码不合法,请确认");
        }else {
            $(this).parent().find("strong").html("密码合法");
        }
    }).focus(function(){
        $(this).parent().find("strong").html("6-16位字符");
    })

    $(".loginLeft input").eq(3).blur(function(){
        var str3 = $(this).val();
        var psw1 = /^.{6,16}$/;
        if(!psw1.test(str3)){
            $(this).parent().find("strong").html("密码不合法,请确认");
        }else if(str3 != $(".loginLeft input").eq(2).val()){
            $(this).parent().find("strong").html("2次密码不一致,请确认");
        }else {
            $(this).parent().find("strong").html("密码一致");
        }
    }).focus(function(){
        $(this).parent().find("strong").html("6-16位字符");
    })



    $(".suiJi").click(function(){
        var sstr = "";
        for(var i=0;i<4;i++){
            var num = Math.round(Math.random());
            if(num==0){
                var sstr1 = parseInt(Math.random()*10) ;
                sstr += sstr1;
            }else {
                var sstr2 = String.fromCharCode(parseInt(Math.random()*24+65));
                sstr += sstr2;
            }
        }
        $(".suiJi").html(sstr);
    })




    $(".loginLeft input").eq(5).click(function(){
        if($(".loginLeft input").eq(0).parent().find("strong").html() != "输入正确"){
            alert("邮箱不正确");
        }else if($(".loginLeft input").eq(1).parent().find("strong").html() != "用户名可以注册"){
            alert("你输入的用户名不正确");
        }else if($(".loginLeft input").eq(2).parent().find("strong").html() != "密码合法"){
            alert("密码不合法,请确认");
        }else if($(".loginLeft input").eq(3).parent().find("strong").html() != "密码一致"){
            alert("2次密码不一致,请确认");
        }else if($(".loginLeft input").eq(4).val() != $(".suiJi").html()){
            alert("验证码输入错误")
        }else{
            // 都输入正确  保存到cookie 当中
            // 现获取之前的用户
            var users = $.cookie("users")?JSON.parse($.cookie("users")):[];
            for(var i=0; i<users.length; i++) {
                if ( $(".loginLeft input").eq(1).val() == users[i].name ) {
                    alert("该用户已经存在, 不能注册!");
                    return;
                }
            }
            alert("注册成功!");
            //需要注册的用户(需要保存到cookie中的用户)
            var user = {
                name: $(".loginLeft input").eq(1).val(), //用户名
                pwd: $(".loginLeft input").eq(2).val() //密码
            }
            users.push(user); //添加新用户

             //保存到cookie中
            $.cookie("users", JSON.stringify(users), {expires:30, path:"/"});
            console.log( $.cookie("users") );
        }


    })





    // 登录页面
    $(".loginRight input").eq(2).click(function(){
        // 获取所有注册过的用户名
        var users = $.cookie("users");
        if(users){
            users = JSON.parse(users);
            var isExist = false;
            for(var i=0;i<users.length;i++){
                if($(".loginRight input").eq(0).val() == users[i].name && $(".loginRight input").eq(1).val() == users[i].pwd){
                    alert("登录成功!");
                    location.href = "home page.html";
                    isExist = true;
                }
            }
            if(!isExist){
                alert("用户名或密码错误！")
            }
        }
    })
})