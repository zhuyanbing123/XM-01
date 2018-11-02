/**
 * Created by Administrator on 2016/9/29.
 */
$(function(){
    $.get("json/gift_lun.json",function(data){

        for(var i=0;i<data.length;i++){
            var obj = data[i];
            var img = obj.img;

            var aNode = $("<a href='#'></a>");
            aNode.appendTo($(".gift_lun"));
            aNode.append("<img src="+img+">");

            if(i==0){
                $(".gift_lun img").addClass("active1")
            }
        }
        lunbo();

    });
    function lunbo(){
        var j=1;
        setInterval(function(){
            move();
            j++;
        },2000);
        function move(){
            var size = $(".gift_lun img").length;

            if(j==size){
                j=0;
                $(".gift_lun img").fadeOut(1000).eq(j).fadeToggle(1000);
            }else {
                $(".gift_lun img").fadeOut(1000).eq(j).fadeToggle(1000);
            }
        }
    }


});