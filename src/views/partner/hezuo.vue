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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit fugit iusto, sed a eligendi consequuntur est facilis porro quia id, vero autem sit reprehenderit magnam tempore doloribus possimus laborum. Cum, modi similique ipsam quae vitae maiores, minus expedita aut provident deserunt eius in officia dicta maxime veritatis hic molestias ipsa eligendi laboriosam quos delectus, deleniti accusantium itaque? Mollitia quisquam, eveniet vitae voluptatem officiis iste illo, amet nemo earum dolorum qui ipsum. Eligendi numquam minus aut enim perspiciatis nobis, sit consequatur ab eveniet sint soluta praesentium, iste, itaque dolorum
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
    }
    }
}
</style>