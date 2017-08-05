import Vue from "vue"

//图片懒加载
Vue.directive('img',{
	inserted:function(el,binding){
		var color=Math.floor(Math.random()*1000000)
		el.style.backgroundColor="#"+color;//设置随机的背景色
		var img=new Image();
		img.src=binding.value;//获得传给指令的值
		img.onload=function(){
			el.style.backgroundImage="url("+binding.value+")"
		}
	}
})