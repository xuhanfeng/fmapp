var common={
	setFocus:function($el){
		$el.addClass('active').siblings().removeClass('active')
	}
}
module.exports=common;