<template>
  <div class="container"> 
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
        <el-breadcrumb-item>联系我们</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <p>CTC检查是什么检查、CTC检查费用是多少、CTC检测</p>
      <img src="@/assets/image/1-200Z2224Q0954.jpg" alt="">
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
        line-height: 30px;
        font-size: 14px;
        letter-spacing: 1px;
        margin-bottom: 30px;
      }
    }
  }
</style>