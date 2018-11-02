// 品牌
$(function(){
    $.get("json/brand.json",function(data){
        for(var i=0;i<data.length;i++){
            var obj = data[i];
            var img = obj.img;
            $(".brand_list").append("<li><a href='#'><img src="+img+"></a></li>");
        }
    })
});