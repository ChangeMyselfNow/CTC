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
        <li v-for="(item, index) in article" :key="index">
          <div class="articleImage">
            <img :src="item.idView" />
          </div>
          <div class="articleContent">
            <p class="pTop">
              <span class="pTitle">{{ item.title }}</span>
              <span class="pTime">{{ item.times }}</span>
            </p>
            <p class="pBottom">{{ item.content }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      article: [
        {
          idView: require("@/assets/image/1-1FR2162IIS-lp.jpg"),
          title: "CTCT检查机构",
          times: "2020-09-02",
          content:
            "吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国",
        }, 
        {
          idView: require("@/assets/image/1-1FR2162IIS-lp.jpg"),
          title: "CTCT检查机构",
          times: "2020-09-02",
          content:
            "吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国",
        },
        {
          idView: require("@/assets/image/1-1FR2162IIS-lp.jpg"),
          title: "CTCT检查机构",
          times: "2020-09-02",
          content:
            "吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国",
        },
        {
          idView: require("@/assets/image/1-1FR2162IIS-lp.jpg"),
          title: "CTCT检查机构",
          times: "2020-09-02",
          content:
            "吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国",
        },
        {
          idView: require("@/assets/image/1-1FR2162IIS-lp.jpg"),
          title: "CTCT检查机构",
          times: "2020-09-02",
          content:
            "吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国吴一龙坦言，这也是中国创新药走出国门的必经之路。中国创新药要想走出国门，必须要接受国际市场的检验，必须进行国际多中心临床试验，必须符合国",
        }
      ],
    };
  },
  created() {},
  methods: {},
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
            
          }
        }
        .articleContent {
          margin-left: 220px;
          .pTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            border-bottom: 1px solid #ececec;
            padding-bottom: 8px;
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
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
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