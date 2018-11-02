/**
 * Created by Administrator on 2016/10/9.
 */

$(function(){
    $(".leftmenu").hover(function(){
        $(".lun_left").show();
    },function(){
        $(".lun_left").hover(function(){
            $(this).show();
        },function(){
            $(this,".leftmenu").hide();
        })
    })
});