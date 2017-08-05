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
              url:"https://m.niucache.com/static/m/widget/store/list/images/1u1_737362f.jpg"
            },
            {
              url:"https://m.niucache.com/static/m/widget/store/list/images/1u1_737362f.jpg"
            },
            {
              url:"https://m.niucache.com/static/m/widget/store/list/images/1u1_737362f.jpg"
            }
          ]
      }
    }
  }
</script>
<style scoped lang="less">
  .main{
    width:100%;
    height:auto;
     div{
      width:33%;
      height:200px;;
      float:left;
      background-size:100%
     }
  }
</style>