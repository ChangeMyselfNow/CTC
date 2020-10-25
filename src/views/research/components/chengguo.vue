<template>
  <div class="container"> 
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
        <el-breadcrumb-item>科研中心</el-breadcrumb-item>
        <el-breadcrumb-item>成果与专利</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <ul class="chengguoImage">
        <li v-for="(item,index) in cgImages" :key="index">
          <img :src="item.url" class="cgImage">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      cgImages:[
        {
          url:require("@/assets/image/1-1FR21G010S5.png")
        },
        {
          url:require("@/assets/image/1-1FR21G010S5.png")
        },
        {
          url:require("@/assets/image/1-1FR21G010S5.png")
        },
        {
          url:require("@/assets/image/1-1FR21G010S5.png")
        }
      ]
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
      .chengguoImage{
          width: 100%;
          li{
            float: left;
            overflow: hidden;
            width: 30%;
            margin-left: 5%;
            margin-top: 3%;
            &:first-child{
              margin-left: 0;
            }
            &:last-child{
              margin-left: 0;
            }
            img{
              width: 100%;
          }
        }
      }
    }
  }
</style>