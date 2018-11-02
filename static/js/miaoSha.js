/**
 * Created by Administrator on 2016/9/28.
 */

$(function(){

    $.get("json/product1.json",function(data){
        for(var i=0;i<data.length;i++){
            var arr = data[i];
            var ulNode = $("<ul></ul>");
            $(".ms_list2").append(ulNode);
            if(i==0){
                ulNode.addClass("hover1");
                for(var j=0;j<arr.length;j++) {
                    var obj = arr[j];
                    var msg = obj.msg;
                    var price = obj.price;
                    var time = obj.time;
                    var img = obj.img;
                    var id = obj.id;

                    var liNode = $("<li></li>");
                    $(ulNode).append(liNode);
                    liNode.append("<a href='#'><img src=" + img + " id="+id+"></a>");
                    liNode.append("<p>" + msg + "</p>");
                    liNode.append("<p>" + price + "</p>");
                    liNode.append("<p>" + time + "</p>");
                }
            }
            if(i==1 || i==2){
                for(var j=0;j<arr.length;j++) {
                    var obj = arr[j];
                    var msg = obj.msg;
                    var price = obj.price;
                    var img = obj.img;

                    var liNode = $("<li></li>");
                    $(ulNode).append(liNode);
                    liNode.append("<a href='#'><img src=" + img + "></a>");
                    liNode.append("<p>" + msg + "</p>");
                    liNode.append("<p>" + price + "</p>");
                }
            }
            if(i==arr.length-1){
                for(var j=0;j<arr.length;j++) {
                    var obj = arr[j];
                    var msg = obj.msg;
                    var price = obj.price;
                    var img = obj.img;

                    var liNode = $("<li></li>");
                    $(ulNode).append(liNode);
                    liNode.append("<a href='#'><img src=" + img + "></a>");
                    liNode.append("<p>" + msg + "</p>");
                    liNode.append("<p>" + price + "</p>");
                }
            }

        }
    });
    $(".ms_list1 li").click(function(){
        var index = $(this).index();
        $(".ms_list1 li").removeClass("hover").eq(index).addClass("hover");

        $(".ms_list2 ul").removeClass("hover1").eq(index).addClass("hover1");

    })
});