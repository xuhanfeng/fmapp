require ("usage/app")
var main=require("tpl/first.string");
// var content=document.body.innerHTML;
// document.body.innerHTML=main+content;
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.2+"px";
SPA.defineView('index',{
	html:main,
	plugins:["delagated"],					//渲染DOM结构
	modules:[{
		name:'content',
		views:["home","mine"],
		defaultTag:'mine',
		container:'.content',
	}],
	bindEvents:{
		beforeShoe:function(){
			console.log('done')
		},
		show:function(){
			console.log('done')
		}
	},
	bindActions:{
		"switch-tabs":function(e,data){
			var view=data.tag;
			console.log(this)
		}
	}
})
SPA.defineView('home')