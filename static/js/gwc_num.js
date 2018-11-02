/**
 * Created by Administrator on 2016/10/12.
 */
$(function(){
    var arr = $.cookie("cart");
    if(arr){
        arr = JSON.parse(arr);
        $(".shoppingCar span").html(arr.length);
    }else {
        $(".shoppingCar span").html(0);
    }
});