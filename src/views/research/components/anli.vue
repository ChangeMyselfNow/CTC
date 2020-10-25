<template>
  <div class="container"> 
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
        <el-breadcrumb-item>科研中心</el-breadcrumb-item>
        <el-breadcrumb-item>案例分享</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
       <ul class="anli">
        <li v-for="(item,index) in anli" :key="index" @click="toDetail(item._id)">
          <img :src="item.coverUrl" class="anliImage">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getNews} from "@/api/api"
export default {
  name: '',
  data() {
    return {
      anli:[]
    };
  },
  created() {
    this.getAnliList()
  },
  methods: {
    getAnliList(){
      let params = {
        type:'center_example'
      }
      getNews(params).then(res =>{
        console.log(res)
        if(res.code == 200){
          this.anli = res.data;
        }
      })
    },
    toDetail(id){
      this.$router.push("/detail?id="+id)
    }
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
      .anli{
           width: 100%;
          height: 250px;
          li{
            text-align: center;
            float: left;
            overflow: hidden;
            height:100%;
            width: 30%;
            margin-left: 5%;
            margin-top: 3%;
           &:nth-child(3n+1){
              margin-left: 0;
            }
            img{
              width: 100%;
              height: 75%;
          }
          p{
            font-size: 14px;
            margin-top: 15px;
          }
          &:hover{
            p{
              color: cornflowerblue;
            }
            cursor: pointer;
          }
        }
      }
    }
  }
</style>