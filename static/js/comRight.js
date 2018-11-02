/**
 * Created by Administrator on 2016/9/29.
 */
$(function(){
    $.get("json/computer1.json",function(data){

        for(var i=0;i<data.length;i++){
            var obj = data[i];
            var img = obj.img;

            var aNode = $("<a href='#'></a>");
            aNode.appendTo($(".comRight_lun"));
            aNode.append("<img src="+img+">");

            if(i==0){
                $(".comRight_lun img").addClass("active1")
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
            var size = $(".comRight_lun img").length;

            if(j==size){
                j=0;
                $(".comRight_lun img").fadeOut(1000).eq(j).fadeToggle(1000);
            }else {
                $(".comRight_lun img").fadeOut(1000).eq(j).fadeToggle(1000);
            }
        }
    }
});