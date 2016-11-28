var home=require("../tpl/home.string");
var common=require('../common/common');
SPA.defineView('home',{
	html:home,
	bindEvents:{
		show:function(){
			var swiper=new Swiper('#wrap',{
				onSlideChangeStart:function(swiper){
						var $a=$('.nav a').eq(swiper.activeIndex)
						common.setFocus($a);
				}
			});
			var swiper1=new Swiper('#m_nav',{
				autoplay:1000,
				loop:true
			});
		}
	}
})