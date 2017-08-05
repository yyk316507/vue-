// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import directives from './directives/affix'


Vue.config.productionTip = false
// Vue.directive('img',{
// 	inserted:function(el,binding){
// 		var color=Math.floor(Math.random()*1000000)
// 		el.style.backgroundColor="#"+color;//设置随机的背景色
// 		var img=new Image();
// 		img.src=binding.value;//获得传给指令的值
// 		img.onload=function(){
// 			el.style.backgroundImage="url("+binding.value+")"
// 		}
// 	}
// })

for(let key in directives){
	Vue.use(key,directives[key])

}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
