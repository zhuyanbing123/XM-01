/**
 * Created by Administrator on 2016/10/11.
 */

$(function(){
    //从购物车中获取所有商品信息
    var arr = $.cookie("cart");


    if (arr) {
        arr = JSON.parse(arr);


        $(".shoppingCar span").html(arr.length);//购物车商品数量

        $("tfoot b").eq(0).html(arr.length);

        //遍历数组, 显示所有商品的信息
        for (var i=0; i<arr.length; i++) {

            //$("ul").append( "<li>" + arr[i].name + "," + arr[i].price + "," + arr[i].num + "</li>" )

            var trNode = $("<tr></tr>");
            $("#shopCart tbody").append(trNode);
            trNode.append("<td><p><img src="+arr[i].img+"><a href='#'>"+arr[i].msg+"</a></p></td>");
            trNode.append("<td><span>"+arr[i].price1+"</span></td>");
            trNode.append("<td><b>"+arr[i].price2+"</b></td>");
            trNode.append("<td><a href='#'><img class='minus' src='img/menu_minus.gif'></a>   <input readonly='readonly' type='text' size='3' value="+arr[i].num+" />   <a href='#'><img class='plus' src='img/menu_plus.gif'></a></td>");
            trNode.append("<td><strong>￥"+parseFloat(arr[i].price2.substr(1))*arr[i].num+"</strong></td>");
            trNode.append("<td><a class='quXiao' href='#'>取消订购</a></td>");
        }

    }else{

        $(".shoppingCar span").html(0);
        $("tfoot b").eq(0).html(0);


        var trNode = $("<tr></tr>");
        $("#shopCart tbody").append(trNode);
        trNode.append("<td colspan='6' style='text-align: center;padding: 25px'>您的购物车还是空的，赶紧行动吧！马上去<a href='home page.html' style='color:red'>挑选商品</a></td>")

        $("#shopCart tfoot").hide();

    }


    //====================加减商品

    $(".minus").click(function(){

        // 修改商品信息的数量 存到cookie中
        //$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});

        var index = $(this).parent().parent().parent().index();


        var num1 = parseInt($(this).parent().parent().find("input").val());

        if(num1>1){
            arr[index].num--;
            $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
            location.href = "shoppingcar.html";
        }
    });

    $(".plus").click(function(){

        // 修改商品信息的数量 存到cookie中
        //$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});

        var index = $(this).parent().parent().parent().index();


            arr[index].num++;
            $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
            location.href = "shoppingcar.html";

    });

    //=========================计算总共价格

    //  获取各个价格
    var s=0;
    for(var i= 0;i<$("tbody strong").length;i++){
        var nub =  parseFloat($("tbody strong").eq(i).html().substr(1));
        s += nub;
    }
    $("tfoot b").eq(1).html("￥"+s);
    $("tfoot b").eq(2).html("￥"+s);


    //======================删除某一行信息
    $(".quXiao").click(function(){
        var index = $(this).parent().parent().index();
        arr.splice(index,1);
        $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
        if(arr.length==0){
            $.cookie("cart", "", {expires:0, path:"/"});
        }
        location.href = "shoppingcar.html";
    });


    // =========清空购物车
    $(".clearCart").click(function(){
        $.cookie("cart", "", {expires:0, path:"/"}); //清空cookie
        alert("购物车已清除");
        location.href = "shoppingcar.html";
    })


})