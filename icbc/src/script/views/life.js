var lifeTpl = require("../tpl/life.string");
SPA.defineView("life",{
	html:lifeTpl,
	plugins:["delegated"],
})