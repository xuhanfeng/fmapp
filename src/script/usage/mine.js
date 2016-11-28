var mine=require("../tpl/mine.string");
var common=require('../common/common');
SPA.defineView('mine',{
	html:mine,
	plugins:["delegated"],
});