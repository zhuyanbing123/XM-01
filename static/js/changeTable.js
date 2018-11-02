/**
 * Created by Administrator on 2016/10/10.
 */
$(function(){
    $("#tab1 li").click(function(){
        var index = $(this).index();
        $("#tab1 li").removeClass("hover").eq(index).addClass("hover");

        $(".pb_coursedetail").hide().eq(index).show();
    })
})