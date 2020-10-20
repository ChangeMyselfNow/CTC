<template>
 <div class="container"> 
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/'}">关于我们</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/'}">公司简介</el-breadcrumb-item>
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
  
</style>