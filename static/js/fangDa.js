/**
 * Created by Administrator on 2016/10/10.
 */



$(function(){

    var _smallImg = $(".jqzoom"); //小图
    var _smallArea = $(".jqZoomPup"); //小区域
    var _bigImg = $(".bigimg"); //大图
    var _bigArea = $(".zoomdiv"); //大区域

    //bigImg.width / smallImg.width = bigArea.width/smallArea.width
    //smallArea.width = bigArea.width * smallImg.width / bigImg.width
    //计算小区域的宽高
    //width() == innnerWidth() == outerWidth()
    _smallArea.width( _bigArea.width() * _smallImg.width() / _bigImg.width() );
    _smallArea.height( _bigArea.height() * _smallImg.height() / _bigImg.height() );

    //放大系数/放大倍数
    var scale = _bigImg.width() / _smallImg.width();



    //mousemove
    _smallImg.mousemove(function(e){
        _smallArea.show(); //显示小区域
        _bigArea.show();// 显示大区域

        //clientX: 可视区域的x值
        //pageX: 距离窗口左边的x值
        var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
        var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
        //console.log(e.clientX);
        //console.log(e.pageX);

        //控制小区域范围在小图内
        if (x <= 0) { //不超出左边
            x = 0;
        }
        else if (x >= _smallImg.width()-_smallArea.width()) { //不超出右边
            x = _smallImg.width()-_smallArea.width();
        }
        if (y <= 0) { //不超出上边
            y = 0;
        }
        else if (y >= _smallImg.height()-_smallArea.height()) { //不超出下边
            y = _smallImg.height()-_smallArea.height();
        }


        //移动小区域
        _smallArea.css({left: x, top: y});

        //移动大图
        _bigImg.css({left: -x*scale, top: -y*scale});

    })

    //mouseleave
    _smallImg.mouseleave(function(){
        _smallArea.hide(); //隐藏小区域
        _bigArea.hide(); // 隐藏大区域
    })



})