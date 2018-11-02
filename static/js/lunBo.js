/**
 * Created by Administrator on 2016/9/28.
 */


$(function(){
    $.get("json/lunbo.json",function(data){
        // 遍历data数组
        for(var i=0;i<data.length;i++){
            var obj = data[i];
            var img = obj.img;

            $(".bigPic").append("<li><img src="+img+"></li>");
            $(".smallPic").append("<li></li>");

            if(i==0){
                $(".smallPic li").addClass("active")
            }
        }
        lunbo();
    });
    // 添加动画 开始轮播
    function lunbo(){
        $(".bigPic li").first().clone().appendTo($(".bigPic"));
        var size = $(".bigPic li").length;
        var i = 0; //记录下标位置 即将显示的图片
        var timer = setInterval(function(){
            i++;
            move();
        },3000);
        function move(){

            if(i>=size){
                $(".bigPic").css("left",0);
                i = 1;
            }
            if(i<0){
                $(".bigPic").css("left",-(size-1)*$(".bigPic li").first().width());
                i=size-2;
            }
            $(".bigPic").stop().animate({left:-i*$(".bigPic li").first().width()},500);

            $(".smallPic li").removeClass("active").eq(i).addClass("active");
            if(i==size-1){
                $(".smallPic li").removeClass("active").eq(0).addClass("active");
            }

        }

        //点击小列表
        $(".smallPic li").click(function(){
            i = $(this).index();
            move();
        })
        // 点击上一页  下一页
        $(".prev").click(function(){
            i--;
            move()
        })
        $(".next").click(function(){
            i++;
            move();
        })
        $(".lun_center").hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                i++;
                move();
            },3000);
        })
    }

})