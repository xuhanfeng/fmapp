var homeTpl = require("../tpl/home.string");
SPA.defineView("home",{
	html:homeTpl,
	plugins:["delegated"],
	bindEvents:{
		beforeShow:function(){
			console.log(111)
		},
		show:function(){
            var mainSwiper = new Swiper("#swiper-main",{
                onSlideChangeStart:function(swiper){
                    var index = swiper.snapIndex;
                    $("#title span").eq(index).addClass("active").siblings().removeClass("active");
                }
            });
		}
	}
})


/*
QApp.config({
    // 默认的首屏 View
    indexView: 'index',
    // 默认的动画
    defaultAnimate: 'moveEnter',
    // 是否自动初始化视图
    autoInit: true,
    // 是否开启 hash router
    hashRouter: true,
    hashSupport: {
        // 是否默认全部
        all: true,
        // 白名单
        exist: [],
        // 黑名单
        except: [],
        // 是否使用 path 变换（需要服务端支持）
        usePath: false
    },
    // 是否使用 json 形式参数
    jsonParam: false,
    screen: {
        // 是否支持屏幕旋转
        rotate: false,
        // 检测屏幕大小变换
        autoResize: true
    },
    gesture: {
        // 是否开启手势
        open: true,
        // 是否开启手势控制 (在 View 切换时，禁用手势)
        ctrl: true,
        // 长按是否触发 Tap 事件
        longTap: true,
        // 自动控制元素失去焦点
        autoBlur: true
    }
});*/