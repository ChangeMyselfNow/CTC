<template>
  <div class="product">
    <div class="content_left">
      <div class="image_content">
        <img src="@/assets/image/products.jpg" />
      </div>
      <div class="list_content">
        <ul class="content_ul">
          <li @click="showIndex = 4">无创产前DNA</li>
          <li @click="showIndex = 5">CTC检查</li>
        </ul>
      </div>
    </div>
    <div class="content_right">
      <ctc-pone v-if="showIndex == 4"></ctc-pone>
      <ctc-ptwo v-if="showIndex == 5"></ctc-ptwo>
    </div>
  </div>
</template>
<script>
import ctcPone from "../assay/components/p1.vue";
import ctcPtwo from "../assay/components/p2.vue"
export default{
  name: "",
  components: {
    ctcPone,
    ctcPtwo,
  },
  data() {
    return {
      showIndex: 4,
    };
  },
  created() {
    if (this.$route.query && this.$route.query.showIndex) {
      this.showIndex = this.$route.query.showIndex;
    }
    console.log(this.$route.query);
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.product {
  display: flex;
  padding: 0 50px;
  .content_left {
    width:300px;
    .image_content{
      img{
      width:300px;
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
  .content_right{
    width:calc(100% - 360px);
    margin-left: 30px;
  }
}
</style>