<template>
  <div class="container">
    <div class="image_content">
      <img style="width: 100%" src="@/assets/image/201737144423974.jpg" />
    </div>
    <div class="about_content">
      <h1>关于我们</h1>
      <h4>ABOUT</h4>
      <p>
        CTC检查化验所成立于2009年，总部在深圳，联合国内多家医院和医学化验所，遍布北京、上海、广州、深圳、天津、成都、杭州、苏州、重庆、武汉、南京、大连、沈阳、长沙、郑州、西安、青岛、无锡、济南、宁波、佛山、哈尔滨、东莞、福州、长春、石家庄、合肥、昆明、南昌、贵阳、呼和浩特、乌鲁木齐，为客户提供精准的CTC检测服务。
      </p>
    </div>
    <div class="product_content">
      <div class="contentTitle">
        <h1>热门产品</h1>
        <h4>HOT&nbsp;&nbsp;PRODUCT</h4>
      </div>
      <div class="proList">
        <ul>
          <li
            v-for="(item, index) in productList"
            :key="index"
            @click="todetail"
          >
            <img :src="item.image" class="proImage" />
            <h3>{{ item.text }}</h3>
          </li>
        </ul>
      </div>
      <div class="proBtu">
        <button>查看更多</button>
      </div>
    </div>

    <div class="news">
      <div class="newTitle">
        <h1>新闻动态</h1>
        <h4>NEWS&nbsp;&nbsp;INFORMATION</h4>
      </div>
      <div class="newsContent">
        <ul>
          <li
            v-for="(item, index) in newsAll"
            :key="index"
            @click="toNewdetail"
          >
            <div class="ctcNew">
              <div class="newImage">
                <img :src="item.image" />
              </div>
              <div class="newText">
                <div class="title">{{ item.title }}</div>
                <div class="contents">{{ item.contents }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="newButton">
        <button>查看更多</button>
      </div>
    </div>
    <div class="research_content">
      <div class="contentTitle">
        <h1>成果与专利</h1>
        <h4>RESULTS&nbsp;&nbsp;AND&nbsp;&nbsp;PATENTS</h4>
      </div>
      <div class="contentImage">
        <div
          class="detailImage"
          v-for="(item, index) in researchImage"
          :key="index"
        >
          <img :src="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      productList: [
        {
          image: require("@/assets/image/1-1FR216022Q51.jpg"),
          text: "今天是个好日子",
        },
        {
          image: require("@/assets/image/1-1FR216022Q51.jpg"),
          text: "今天是个好日子",
        },
        {
          image: require("@/assets/image/1-1FR216022Q51.jpg"),
          text: "今天是个好日子",
        },
      ],
      newsAll: [
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
          title: "中国创新药走向全球",
          contents:
            "中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球",
        },
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
          title: "中国创新药走向全球",
          contents:
            "中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球",
        },
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
          title: "中国创新药走向全球",
          contents:
            "中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球",
        },
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
          title: "中国创新药走向全球",
          contents:
            "中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球中国创新药走向全球",
        },
      ],
      researchImage: [
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
        },
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
        },
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
        },
        {
          image: require("@/assets/image/1-1FR21G010S5.png"),
        },
      ],
    };
  },
  created() {},
  methods: {
    todetail() {
      alert("产品详情页");
    },
    toNewdetail() {
      alert("新闻详情页");
    },
  },
};
</script>
<style lang='scss' scoped>
.container {
  .image_content {
    width: 100%;
  }
  .about_content {
    width: 100%;
    border-bottom: 1px solid #ececec;
    padding: 30px 60px;
    h1 {
      color: #0068b7;
      font-style: normal;
    }
    h4 {
      color: #999999;
      padding-top: 2px;
    }
    p {
      margin-top: 15px;
      line-height: 35px;
      text-indent: 21pt;
      letter-spacing: 1px;
    }
  }
  .product_content {
    padding: 10px 20px 30px 40px;
    width: 90%;
    margin:0 auto;
    margin-top: 40px;
    .proList {
      margin-bottom: 30px;
      ul {
        width: 100%;
        margin-top: 30px;
        li {
          width: 30%;
          margin-right: 5%;
          float: left;
          text-align: center;
          border-radius: 3px;
          padding: 3px 3px 3px 3px;
          margin-bottom: 25px;
          cursor: pointer;
          &:last-child{
            margin-right: 0;
          }
          &:hover {
            background-color: cornflowerblue;
            h3{
              color: #fff;
            }
          }
          img {
            width: 100%;
            border: 1px solid #ececec;
          }
          h3 {
            color: #333333;
            padding: 10px;
            font-weight: normal;
          }
        }
      }
    }
    .proBtu {
      text-align: center;
      button {
        color: white;
        background-color: cornflowerblue;
        font-size: 18px;
        padding:15px 45px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
  .news {
    width: 100%;
    padding: 30px 5%;
    background: url(../../assets/image/webnews.jpg);
    background-size: cover;
    .newTitle {
      text-align: center;
      h1 {
        color: white;
      }
      h4 {
        color: white;
      }
    }
    .newsContent {
      margin-top: 30px;
      ul {
        width: 100%;
        overflow: hidden;
        li {
          width: 48%;
          margin-right: 4%;
          float: left;
          cursor: pointer;
          margin-bottom:20px;
          &:nth-child(2n) {
            margin-right: 0;
          }
          .ctcNew {
            width: 100%;
            .newImage {
              float: left;
              width:30%;
              img {
                width: 100%;
              }
            }
            .newText {
              padding: 10px;
              margin-left:32%;
              text-overflow: clip;
              .title {
                border-bottom: 1px solid #ececec;
                padding-bottom: 8px;
                font-size: 18px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .contents {
                font-size: 12px;
                color: #dbdbdb;
                line-height: 24px;
                margin-top: 5px;
                display: -webkit-box;
                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
                word-wrap: break-word;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
    .newButton {
      text-align: center;
      button {
        color: cornflowerblue;
        background-color: white;
        font-size: 18px;
        padding:15px 45px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
  .research_content {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 40px;
    .detailImage {
      float: left;
      width: 22%;
      padding:2% 0;
      margin-left: 4%;
      margin-top: 20px;
      cursor: pointer;
      &:first-child{
        margin-left: 0;
      }
      img {
        width: 100%;
      }
    }
  }
  .contentTitle {
    text-align: center;
    h1 {
      color: #0068b7;
    }
    h4 {
      color: #999999;
    }
  }
}
</style>