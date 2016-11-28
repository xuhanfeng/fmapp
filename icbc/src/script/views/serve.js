var serveTpl = require("../tpl/serve.string");
SPA.defineView("serve",{
	html:serveTpl,
	plugins:["delegated"],
})