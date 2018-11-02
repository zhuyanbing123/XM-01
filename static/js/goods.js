/**
 * Created by Administrator on 2016/10/10.
 */

$(function(){
    $('body').on('click','.ms_list2 img', function () {

        var id = $(this).attr("id");
        location.href = 'goods.html?'+id;

    });


    var Id = location.href.substr((location.href.indexOf("?")+1));
    // 遍历json


    $.get("json/goods.json",function(data){

        for(var i=0;i<data.length;i++){
            var obj=data[i];
            var img = obj.img;
            var bianHao = obj.bianHao;
            var price = obj.price;
            var shopPrice = obj.shopPrice;
            var jieShao = obj.jieShao;


            if(Id == i+1){
                $(".jqzoom img").attr("src",img);
                $(".zoomdiv img").attr("src",img);

                $(".xuanxiang li").eq(0).find("h1").html(jieShao);
                $(".xuanxiang li").eq(1).html(bianHao);
                $(".xuanxiang li").eq(3).find("span").html(price);
                $(".xuanxiang li").eq(4).find("strong").html(shopPrice);
            }



        }
    })

})