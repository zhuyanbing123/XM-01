/**
 * Created by Administrator on 2016/9/30.
 */

$(function(){
    $.get("json/products.json",function(Data){

        for(var i=0;i<Data.length;i++){
            var obj = Data[i];
            var title1 = obj.title1;
            var title2 = obj.title2;
            var title3 = obj.title3;
            var arr = obj.data;
            var arr2 = obj.data2;


            var dlNode = $("<dl></dl>");
            $(".selectsort").eq(i).append("<h2>"+title1+"</h2>").append(dlNode);


            var h2Node = $("<h2>"+title2+"</h2>");
            var DlNode = $("<dl></dl>");
            $(".prdhot").eq(i).append(h2Node).append(DlNode);
            for(var h=0;h<arr2.length;h++){
                var Obj = arr2[h];
                var Msg = Obj.msg;
                var Href = Obj.href;

                DlNode.append("<dt><a style='color: #5f6a72' href="+Href+">"+Msg+"</a></dt>");
            }



            $(".prdhot").eq(i).append("<h2>"+title3+"</h2>");
            for(var j=0;j<arr.length;j++){
                var obj1 = arr[j];
                var dt1 = obj1.dt1;
                var arr1 = obj1.data1;

                dlNode.append("<dt>"+dt1+"</dt>");



                for(var k=0;k<arr1.length;k++){
                    var obj2 = arr1[k];
                    var href = obj2.href;
                    var msg = obj2.msg;
                    var ddNode = $("<dd></dd>");
                    ddNode.append(" <a href="+href+">"+msg+"</a>|");
                    ddNode.appendTo(dlNode);
                }
            }
        }
    });

    $(".lun_left li").hover(function(){
        $("ul",this).show();
        $(".aa",this).css("color","#8F0100");
        $(this).css("background","white");
    },function(){
        $("ul",this).hide();
        $(".aa",this).css("color","white");
        $(this).css("background","url('img/back_li.gif')");
    })
});