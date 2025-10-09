(function ($) {
  $(document).ready(function(){
    if($(window).width()=="980"){
      $("#body").prop("style","width:1190px;");
    }
    
    // a标签里title里的字符有些不显示，现在...，只为兼容IE
    window.onload=function(){
      if (!!window.ActiveXObject || "ActiveXObject" in window){
        fun();
      }
      gettitle();
    }
    
    function fun(){
      var arrAll=document.all;
      for (i=0; i<arrAll.length; i++){
        var size = 0;
        // 添加空值检查
        if(arrAll[i].title && arrAll[i].title.length > 50){
          console.log(arrAll[i],'arrAll[i]');
          var size = arrAll[i].title.length/2;
          while(size>30){
            size=size/2;
          }
        }
        // 添加空值检查
        if(arrAll[i].title && arrAll[i].title.length > 50){
          var sizes = 29;
          var reg=new RegExp('.{'+sizes+'}','g');
          var titleText = arrAll[i].title.replace(reg,repText);
          arrAll[i].title = titleText;
        }
      }
    }
    
    function repText($1){
      return $1+"\n";
    }
    
    function gettitle(){
      var arrAll=document.all;
      for (i=0; i<arrAll.length; i++){
        // 添加空值检查
        if(arrAll[i].title){
          var reg2 = new RegExp('</sub>|<sub>','g');
          var titleText2 = arrAll[i].title.replace(reg2,'');
          arrAll[i].title = titleText2;
        }
      }
    }
  });
})(jQuery);

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// 刷新回到页面顶部
function bind_my_tansoole_show_hide_event(){
  $("#myTansoole").mouseover(function(){
    $("#tableJump").show();
  })
  $("#myTansoole").mouseout(function(){
    $("#tableJump").hide();
  })
}

function bind_navagator_mouseover_second_event(){
  $(".navgatorClass").on("mouseenter", function(){
    var m=$(this).attr("index");
    $("#scbr"+m).css("display","block");
  });
  $(".navgatorClass1").on("mouseenter", function(){
    var m=$(this).attr("index");
    $("#scbr2"+m).css("display","block");
  });
}

function bind_navagator_mouseout_second_event(){
  $(".navgatorClass").on("mouseleave", function(){
    var m=$(this).attr("index");
    $("#scbr"+m).css("display","none");
  });
  $(".navgatorClass1").on("mouseleave", function(){
    var m=$(this).attr("index");
    $("#scbr2"+m).css("display","none");
  });
}

function nofind(){
  var img=event.srcElement;
  img.src=pageContext+"/images/none.png";
  img.onerror=null; // 控制不要一直跳动
}

$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if(scrollTop>0){
    // 已离开顶部
    $("#isTop").show();
  }else{
    $("#isTop").hide();
  }
});
