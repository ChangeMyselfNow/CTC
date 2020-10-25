<template>
  <div class="product">
    <div class="content_left">
      <div class="image_content">
        <img src="@/assets/image/products.jpg" />
      </div>
      <div class="list_content">
        <ul class="content_ul">
          <li :class="showIndex == 1 ? 'active' : ''" @click="$router.push('/product?showIndex=1')">无创产前DNA</li>
          <li :class="showIndex == 2 ? 'active' : ''" @click="$router.push('/product?showIndex=2')">CTC检查</li>
        </ul>
      </div>
    </div>
    <div class="content_right">
      <ctc-pone v-if="showIndex == 1"></ctc-pone>
      <ctc-ptwo v-if="showIndex == 2"></ctc-ptwo>
    </div>
  </div>
</template>
<script>
import ctcPone from "../assay/components/dna.vue";
import ctcPtwo from "../assay/components/ctc.vue"
export default{
  name: "",
  components: {
    ctcPone,
    ctcPtwo,
  },
  data() {
    return {
      showIndex: 1,
    };
  },
  created() {
    if (this.$route.query && this.$route.query.showIndex) {
      this.showIndex = this.$route.query.showIndex;
    }
    console.log(this.$route.query);
  },
  methods: {},
  watch: {
    "$route.query.showIndex": function(nv) {
      if (nv) {
        this.showIndex = nv;
      }else {
        this.showIndex = 1;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.product {
  margin-top: 40px;
  display: flex;
  width: 80%;
  margin: 0 auto;
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