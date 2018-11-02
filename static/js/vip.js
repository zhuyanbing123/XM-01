/**
 * Created by Administrator on 2016/9/28.
 */

$(function(){
    $.get("json/vip.json",function(data){
        for(var i=0;i<data.length;i++){
            var obj = data[i];
            var img = obj.img;

            var liNode = $("<li></li>");
            $(".vip ul").append(liNode);
            liNode.append("<a href='#'><img src="+img+"></a>");
        }

        $(".vip_list li img").hover(function(){
            $(this).css("opacity",0.7);
        },function(){
            $(this).css("opacity",1)
        })
    });

});