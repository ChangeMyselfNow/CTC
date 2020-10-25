<template>
  <div class="container">
    <div class="contentTop">
      <p class="contentTitle">
        {{ detail.title }}
      </p>
    </div>
    <div class="contentTexts" v-html="detail.content"></div>
  </div>
</template>
<script>
import { getNews } from "@/api/api";
export default {
  name: "",
  data() {
    return {
      detail: {},
    };
  },
  created() {
    if (this.$route.query && this.$route.query.id) {
      let id = this.$route.query.id;
      this.getNewDetail(id);
    }
  },
  methods: {
    getNewDetail(id) {
      let params = {
        _id: id,
      };
      getNews(params).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.detail = res.data[0];
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.container {
  .contentTop {
    text-align: center;
    .contentTitle {
      font-weight: bold;
      font-size: 26px;
      color: cornflowerblue;
      margin-bottom:30px;
    }
  }
  .contentTexts {
    font-size: 12px;
    width: 80%;
    margin: 0 auto;
    line-height: 28px;
    text-indent: 24px;
    /deep/p {
      width: 100%;
      img {
        width:50%;
        margin:20px 0 20px 25%;
      }
    }
  }
}
</style>