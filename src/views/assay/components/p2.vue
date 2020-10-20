<template>
  <div class="container"> 
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/'}">化验项目</el-breadcrumb-item>
        <el-breadcrumb-item >CTC检查</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content"></div>
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
    }
  }
</style>