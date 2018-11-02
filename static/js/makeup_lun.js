$(function(){
    $.get("json/makeup_lun.json",function(data){

        for(var i=0;i<data.length;i++){
            var obj = data[i];
            var img = obj.img;

            var aNode = $("<a href='#'></a>");
            aNode.appendTo($(".makeup_lun"));
            aNode.append("<img src="+img+">");

            if(i==0){
                $(".makeup_lun img").addClass("active1")
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
            var size = $(".makeup_lun img").length;

            if(j==size){
                j=0;
                $(".makeup_lun img").fadeOut(1000).eq(j).fadeToggle(1000);
            }else {
                $(".makeup_lun img").fadeOut(1000).eq(j).fadeToggle(1000);
            }
        }
    }


});