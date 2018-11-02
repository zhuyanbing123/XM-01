/**
 * Created by Administrator on 2016/9/29.
 */
$(function(){
    $.get("json/phone_list.json",function(data){
        for(var i=0;i<data.length;i++){
            var obj=data[i];
            var msg = obj.msg;
            var price = obj.price;
            var img = obj.img;

            var liNode = $("<li></li>");
            $(".phone_list").append(liNode);
            liNode.append("<a href='#'><img src=" + img + "></a>");
            liNode.append("<p>" + msg + "</p>");
            liNode.append("<p>" + price + "</p>");
        }
    })
})