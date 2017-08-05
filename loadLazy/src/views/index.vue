<template>
	<div class="main">
		<div v-img="val.url" v-for="val in list"></div>
	</div>
</template>
<script>
	export default {
		name:"img",
		data(){
			return {
				list:[
						{
							url:"http://img2.niutuku.com/desk/107/1011/ntk12346.jpg"
						},
						{
							url:"http://img.bizhi.sogou.com/images/2013/10/06/392564.jpg"
						},
						{
							url:"http://img.pic.pp3.cn/uploads//201505/2015060502.jpg"
						}
					]
			}
		}
	}
</script>
<style scoped lang="less">

</style>