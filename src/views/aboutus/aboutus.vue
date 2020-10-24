<template>
  <div class="aboutUs">
    <div class="content_left">
      <div class="image_content">
        <img src="@/assets/image/left_top.jpg" />
      </div>
      <div class="list_content">
        <ul class="content_ul">
          <li :class="showIndex == 1 ? 'active' : ''" @click="showIndex = 1">公司简介</li>
          <li :class="showIndex == 2 ? 'active' : ''" @click="showIndex = 2">新闻动态</li>
          <li :class="showIndex == 3 ? 'active' : ''" @click="showIndex = 3">联系我们</li>
        </ul>
      </div>
    </div>
    <div class="content_right">
      <ctc-gsjj v-if="showIndex == 1"></ctc-gsjj>
      <ctc-news v-if="showIndex == 2"></ctc-news>
      <ctc-contact v-if="showIndex == 3"></ctc-contact>
    </div>
  </div>
</template>
<script>
import ctcContact from "../aboutus/components/contact.vue";
import ctcGsjj from "../aboutus/components/gsjj.vue";
import ctcNews from "../aboutus/components/news.vue";
export default {
  name: "",
  components: {
    ctcContact,
    ctcGsjj,
    ctcNews,
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
    // console.log(this.$route.query);
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
.aboutUs {
  margin-top: 40px;
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