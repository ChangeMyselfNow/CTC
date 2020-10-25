<template>
  <div class="container">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }"
          ><i class="el-icon-s-home"></i>首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
        <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in article" :key="index" @click="toDetail(item._id)">
          <div class="articleImage">
            <img :src="item.coverUrl" />
          </div>
          <div class="articleContent">
            <p class="pTop">
              <span class="pTitle">{{ item.title }}</span>
              <span class="pTime">{{ dateFormat('yyyy-MM-dd', item.createdTime) }}</span>
            </p>
            <p class="pBottom">{{ item.remark }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getNews} from "@/api/api" 
import {dateFormat} from '@/utils/common';
export default {
  name: "",
  data() {
    return {
      article: [],
      
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    dateFormat,
    getNewsList(){
      let params = {
        type:'us_news'
      }
      getNews(params).then(res =>{
        console.log(res)
        if(res.code == 200){
          this.article = res.data;
        }
      })
    },
    toDetail(id){
      this.$router.push("/detail?id="+id)
    }
    
  },
};
</script>
<style lang='scss' scoped>
.container {
  .breadcrumb {
    border-bottom: 1px solid #ececec;
    padding-bottom: 10px;
    margin-bottom: 25px;
  }
  .content {
    ul {
      li {
        width: 100%;
        margin-bottom:25px;
        height: 140px;
        cursor: pointer;
        .articleImage {
          float: left;
          width: 200px;
          img {
            width: 100%;
            height: 130px;
            
          }
        }
        .articleContent {
          margin-left: 220px;
          .pTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
            border-bottom: 1px solid #ececec;
            padding-bottom: 10px;
            .pTitle {
              font-size: 16px;
            }
            .pTime {
              font-size: 12px;
            }
          }
          .pBottom {
            font-size: 12px;
            color: #878787;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        &:hover {
          p {
            color: cornflowerblue;
          }
          .pBottom {
            color: cornflowerblue;
          }
        }
      }
    }
  }
}
</style>