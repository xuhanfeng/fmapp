var main=require("../tpl/first.string");
SPA.defineView('main',{
	html:main,
	plugins:["delegated"],
	modules:[{
		name:'content',
		views:["first","home","mine"],
		defaultTag:'home',
		container:'.content',
	}],			
	bindEvents:{
		beforeShow:function(){
		},
		show:function(){
		}
	},
	bindActions:{
		 "go.mine":function(e,data){
            var tag = data.tag;
            this.modules.content.launch(tag)
        }
	}
})
SPA.defineView('mine')