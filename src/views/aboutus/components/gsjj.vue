<template>
 <div class="container"> 
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
        <el-breadcrumb-item>公司简介</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <p>
        CTC检查化验所成立于2009年，总部在深圳，联合国内多家医院和医学化验所，遍布北京、上海、广州、深圳、天津、成都、杭州、苏州、重庆、武汉、南京、大连、沈阳、长沙、郑州、西安、青岛、无锡、济南、宁波、佛山、哈尔滨、东莞、福州、长春、石家庄、合肥、昆明、南昌、贵阳、呼和浩特、乌鲁木齐，为客户提供精准的CTC检测服务。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>
<style lang='scss' scoped>
  .container{
    .breadcrumb{
      width:100%;
      border-bottom: 1px solid #ececec;
      padding-bottom: 10px;
    }
    .content{
      width: 100%;
      margin-top:15px;
      p{
        line-height: 28px;
        font-size: 14px;  
      }
    }
  }
</style>