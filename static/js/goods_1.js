/**
 * Created by Administrator on 2016/10/9.
 */
$(function(){
    $("#two1").click(function(){
        $("#con_two_1").css("display","block");
        $("#con_two_2").css("display","none");
        $("#tab2 li").removeClass("hover");
        $("#two1").addClass("hover")
    });
    $("#two2").click(function(){
        $("#con_two_1").css("display","none");
        $("#con_two_2").css("display","block");
        $("#tab2 li").removeClass("hover");
        $("#two2").addClass("hover")
    });
});