<template>
  <div class="research">
    <div class="content_left">
      <div class="image_content">
        <img src="@/assets/image/research.jpg" />
      </div>
      <div class="list_content">
        <ul class="content_ul">
          <li :class="showIndex == 6 ? 'active' : ''" @click="showIndex = 6">技术团队</li>
          <li :class="showIndex == 7 ? 'active' : ''" @click="showIndex = 7">成果与专利</li>
          <li :class="showIndex == 8 ? 'active' : ''" @click="showIndex = 8">案例分享</li>
        </ul>
      </div>
    </div>
    <div class="content_right">
      <ctc-team v-if="showIndex == 6"></ctc-team>
      <ctc-chengguo v-if="showIndex == 7"></ctc-chengguo>
      <ctc-anli v-if="showIndex == 8"></ctc-anli>
      
    </div>
  </div>
</template>
<script>
import ctcAnli from "../research/components/anli.vue";
import ctcChengguo from "../research/components/chengguo.vue";
import ctcTeam from "../research/components/team.vue";
export default {
  name: "",
  components: {
    ctcAnli,
    ctcChengguo,
    ctcTeam,
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
        this.showIndex = 6;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.research {
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