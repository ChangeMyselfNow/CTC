<template>
  <div class="hezuo">
    <div class="content_left">
      <div class="image_content">
        <img src="@/assets/image/left_top.jpg" />
      </div>
      <div class="list_content">
        <ul class="content_ul">
          <li class="active">医疗合作</li>
        </ul>
      </div>
    </div>
    <div class="content_right">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            ><i class="el-icon-s-home"></i>首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>医疗合作</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content">
        <p>
          CTC检查化验所成立于2009年，总部在深圳，全国有56家医学化验所，每家医学化验所都由卫健委批准，同时联合国内多家医院和医学化验所，遍布北京、上海、广州、深圳、天津、成都、杭州、苏州、重庆、武汉、南京、大连、沈阳、长沙、郑州、西安、青岛、无锡、济南、宁波、佛山、哈尔滨、东莞、福州、长春、石家庄、合肥、昆明、南昌、贵阳、呼和浩特、乌鲁木齐，为客户提供精准的CTC检测和无创产前检查服务。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
.hezuo {
  margin-top: 40px;
  display: flex;
  padding: 0 50px;
  .content_left {
    width: 300px;
    .image_content {
      img {
        width: 300px;
      }
    }
    .list_content {
      .content_ul {
        li {
          line-height: 60px;
          font-size: 16px;
          padding-top: 15px;
          padding-bottom: 15px;
          text-align: center;
          border-bottom: 1px solid #e5e5e5;
          cursor: pointer;
          &:hover {
            background-color: rgba($color: #1e90ff, $alpha: 0.05);
            border-right: 1px solid #1e90ff;
            color: #1e90ff;
          }
          &.active {
            background-color: rgba($color: #1e90ff, $alpha: 0.05);
            border-right: 1px solid #1e90ff;
            color: #1e90ff;
          }
        }
      }
    }
  }
  .content_right {
    width: calc(100% - 360px);
    margin-left: 30px;
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
}
</style>