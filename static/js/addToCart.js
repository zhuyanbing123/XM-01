/**
 * Created by Administrator on 2016/10/11.
 */

$(function(){

    $("#addShopCart").click(function(){

        // 要加入购物车的商品信息
        var goodsImg = $(".jqzoom img").attr("src");

        var goodsMsg = $(".xuanxiang li").eq(0).find("h1").html();
        var goodsBianHao = $(".xuanxiang li").eq(1).html();
        var goodsPrice1 = $(".xuanxiang li").eq(3).find("span").html();
        var goodsPrice2 = $(".xuanxiang li").eq(4).find("strong").html();
        var goodsNum = parseInt($("#txtNum").val());

        // 获取之前保存在cookie中的信息
        var arr = $.cookie("cart")?JSON.parse($.cookie("cart")):[];

        // 遍历购物车中是否存在即将添加的商品
        var isExist = false;

        for(var i=0;i<arr.length;i++){

            if(goodsBianHao==arr[i].bianhao){
                arr[i].num += goodsNum;
                isExist = true;
            }
        }

        if(!isExist){
            var goods={
                img : goodsImg,
                msg : goodsMsg,
                bianhao : goodsBianHao,
                price1 : goodsPrice1,
                price2 : goodsPrice2,
                num : goodsNum
            }
            arr.push(goods);
        }

        // 保存到cookie中
        $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
        console.log( $.cookie("cart") );


        //================动画加入购物车效果

        var imgNode = $(".jqzoom").find("img");
        var imgPos = imgNode.offset();
        var imgWidth = imgNode.width();
        // 复制图片 在当前位置
        var cyImg = imgNode.clone().css({
            "position":"absolute",
            "top":imgPos.top,
            "left":imgPos.left,
            "width":imgWidth
        });

        $("body").append(cyImg);
        //  添加动画
        cyImg.animate({
            "top":$(".shoppingCar").offset().top,
            "left":$(".shoppingCar").offset().left,
            "width":0,

        },1000,function(){
            cyImg.remove();
        })

        //alert("加入购物车成功");
        $(".shoppingCar span").html(arr.length);

    });

    //========================第一行购物车的数量
    var arr = $.cookie("cart");
    if(arr){
        arr = JSON.parse(arr);
        $(".shoppingCar span").html(arr.length);
    }else {
        $(".shoppingCar span").html(0);
    }


    //===============================点击购买
    $("#rightBuy").click(function(){

        // 要加入购物车的商品信息
        var goodsImg = $(".jqzoom img").attr("src");

        var goodsMsg = $(".xuanxiang li").eq(0).find("h1").html();
        var goodsBianHao = $(".xuanxiang li").eq(1).html();
        var goodsPrice1 = $(".xuanxiang li").eq(3).find("span").html();
        var goodsPrice2 = $(".xuanxiang li").eq(4).find("strong").html();
        var goodsNum = parseInt($("#txtNum").val());

        // 获取之前保存在cookie中的信息
        var arr = $.cookie("cart")?JSON.parse($.cookie("cart")):[];

        // 遍历购物车中是否存在即将添加的商品
        var isExist = false;

        for(var i=0;i<arr.length;i++){

            if(goodsBianHao==arr[i].bianhao){
                arr[i].num += goodsNum;
                isExist = true;
            }
        }

        if(!isExist){
            var goods={
                img : goodsImg,
                msg : goodsMsg,
                bianhao : goodsBianHao,
                price1 : goodsPrice1,
                price2 : goodsPrice2,
                num : goodsNum
            }
            arr.push(goods);
        }

        // 保存到cookie中
        $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
        console.log( $.cookie("cart") );


        location.href = "shoppingcar.html";
    })
})