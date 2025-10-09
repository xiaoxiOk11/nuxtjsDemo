 var pageContext="";
jQuery(document).ready(function() {
	
	bind_navagator_mouseover_second_event();
	bind_navagator_mouseout_second_event();
	bind_promotion_scroll_event();

	bind_my_tansoole_show_hide_event();
	
});
$(window).scroll(function(){ 
	var scrollTop = $(this).scrollTop();
		if(scrollTop>0){//已离开顶部
			$("#isTop").show();
		}else{
			$("#isTop").hide();
		}
		//楼层导航显示
		if(scrollTop>770){
			$("#elevator").show();
		}else{
			$("#elevator").hide();
		}
	});




function bind_promotion_scroll_event(){
	$("img.lazy").show().lazyload();
	$("img.lazyShow").lazyload({ threshold : 200 });
	lazyload_cc("loading",300);
	//楼层导航显示
	var scrollTop = $(this).scrollTop();
	if(scrollTop>770){
		$("#elevator").show();
	}else{
		$("#elevator").hide();
	};
	
	//楼层导航二级目录显示
	   $(".elevator .item-s").hover(function(){
    		 $(this).addClass("active").find("s").hide();
    		 $(this).find(".product-wrap").show();
	     	},function(){
	        $(this).removeClass("active").find("s").show();
	        $(this).find(".product-wrap").hide();
	     });
	
	
	
}


function lazyload_cc(className,beginHeight){
	//功能：当div完整出现在屏幕时，加载。
	//参数className，需要进行懒加载的元素的类名，要取一样的名字
	//参数beginHeight，滚动条滚到哪里，开始监听
	//必须有inited熟悉你给，request-url属性，loading的图片自己准备。可以卸载.loading中。
	if(!className) {
		console.error("lazyload_cc方法中缺少className参数");
		return;
	}
	if(!beginHeight) beginHeight=0;
	lazyDivList=$("."+className);
	$(window).scroll(function(){
		srcTop=$(window).scrollTop();
		//alert(srcTop);
		if(srcTop>=beginHeight){
			lazyDivList.trigger("lazyme",$(window).scrollTop());
		}				
	});
	lazyDivList.bind("lazyme",function(e,scrTop){
		var offset=$(this).offset().top;
		var interval=$(window).height()-$(this).height();//当前页面可视高度
		var sumB=offset;
		var sumS=offset-interval;
		var url=$(this).attr("request-url");
		if(scrTop>=sumS && scrTop<=sumB){
			$(this).load(pageContext+"/"+url,function(responseTxt,statusTxt,xhr){
				if (statusTxt=="success") {
					$(this).removeClass(className);
					$(this).css("height","auto");
					$(this).unbind("lazyme");
				};
			});
		}
	});
}




function lazyload_refresh(beginHeight){
       srcTop=$(window).scrollTop();
		//alert(srcTop);
		if(srcTop>=beginHeight){
			lazyDivList.trigger("lazyme",$(window).scrollTop());
		}
  }				
  
     //楼层导航
function  floor_navigation(floor){
  var roll="762";//滚动条基数
  //floor 对应楼层
  	$(".pro-promotion div").each(function(i){
	if($.trim($(this).attr("floor"))!=""&&$.trim($(this).attr("floor"))!="undefined"&&$.trim($(this).attr("floor"))!=floor){
		roll=parseInt(roll)+parseInt($(this).height());
	}
  	if($(this).attr("floor")==floor){
  		document.body.scrollTop=parseInt(roll);
  		document.documentElement.scrollTop=parseInt(roll);
  		return false;
  	}
  	});
  }
(function($) {
    'use strict';
    
    var HeroBanner = {
        $banner: null,
        $slides: null,
        $indicators: null,
        currentIndex: 0,
        totalSlides: 0,
        autoPlayTimer: null,
        autoPlayInterval: 4000,
        
        init: function() {
            this.$banner = $('#heroBanner');
            this.$slides = this.$banner.find('.banner-slide');
            this.$indicators = this.$banner.find('.banner-indicator');
            this.totalSlides = this.$slides.length;
            
            this.bindEvents();
            this.startAutoPlay();
        },
        
        bindEvents: function() {
            var self = this;
            
            // 左箭头点击
            this.$banner.find('.banner-arrow-left').on('click', function() {
                self.prevSlide();
            });
            
            // 右箭头点击
            this.$banner.find('.banner-arrow-right').on('click', function() {
                self.nextSlide();
            });
            
            // 指示器点击
            this.$indicators.on('click', function() {
                var index = $(this).index();
                self.goToSlide(index);
            });
            
            // 鼠标悬停暂停自动播放
            this.$banner.on('mouseenter', function() {
                self.stopAutoPlay();
            }).on('mouseleave', function() {
                self.startAutoPlay();
            });
        },
        
        goToSlide: function(index) {
            this.currentIndex = index;
            this.updateSlides();
            this.resetAutoPlay();
        },
        
        nextSlide: function() {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
            this.updateSlides();
            this.resetAutoPlay();
        },
        
        prevSlide: function() {
            this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            this.updateSlides();
            this.resetAutoPlay();
        },
        
        updateSlides: function() {
            this.$slides.removeClass('active').eq(this.currentIndex).addClass('active');
            this.$indicators.removeClass('active').eq(this.currentIndex).addClass('active');
        },
        
        startAutoPlay: function() {
            var self = this;
            this.autoPlayTimer = setInterval(function() {
                self.nextSlide();
            }, this.autoPlayInterval);
        },
        
        stopAutoPlay: function() {
            if (this.autoPlayTimer) {
                clearInterval(this.autoPlayTimer);
                this.autoPlayTimer = null;
            }
        },
        
        resetAutoPlay: function() {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    };
    
    // 初始化
    $(document).ready(function() {
        HeroBanner.init();
    });
    
})(jQuery);
  

