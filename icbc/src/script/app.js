// 引入spa
require("./libs/spa.min");
// swiper插件
require("./libs/swiper-3.3.1.min");
// 引入视图文件
require("./views/index");
require("./views/home");
require("./views/serve");
require("./views/life");
require("./views/mine");

// 设置默认视图
SPA.config({
	indexView:"index"
})