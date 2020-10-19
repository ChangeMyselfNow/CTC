<template>
  <div class="header">
    <div class="header_top">
      <div class="left-content">
        <div id="logo">
          <img
            :src="require('@assets/logo/logo.png')"
            alt="CTC检查是什么检查-CTC检查费用是多少-CTC检查机构-CTC检查多少钱一次"
          />
        </div>
      </div>
      <div class="right-content">
        <div id="search"></div>
        <div class="nav-content">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="black"
            active-text-color="#1989FA"
          >
            <el-menu-item index="1">网站首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title" @click="$router.push('/about/gsjj')">关于我们</template>
              <el-menu-item index="2-1" @click="$router.push('/about/gsjj')">公司简介</el-menu-item>
              <el-menu-item index="2-2" @click="$router.push('/about/news')">新闻动态</el-menu-item>
              <el-menu-item index="2-3" @click="$router.push('/about/contact')">联系我们</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title" @click="$router.push('/product/p1')">化验项目</template>
              <el-menu-item index="3-1" @click="$router.push('/product/p1')">无创产前DNA</el-menu-item>
              <el-menu-item index="3-2" @click="$router.push('/product/p2')">CTC检查</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title" @click="$router.push('/research/team')">科研中心</template>
              <el-menu-item index="4-1" @click="$router.push('/research/team')">技术团队</el-menu-item>
              <el-menu-item index="4-2" @click="$router.push('/research/chengguo')">成果与专利</el-menu-item>
              <el-menu-item index="4-3" @click="$router.push('/research/anli')">案例分享</el-menu-item>
            </el-submenu>
            <el-menu-item index="5" @click="$router.push('/hezuo')">医疗合作</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <el-carousel indicator-position="outside" :height="bannerHeight+'px'">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <img :src="item.idView" class="imageSwiper" />
          <!-- //ref="bannerHeight" @load="imgLoad"  -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      bannerHeight:500,
      activeIndex: "1",
      imagesbox: [
        { id: 0, idView: require("../assets/image/1-1FRG35Q20-L.jpg") },
        { id: 1, idView: require("../assets/image/287667465S30-L.jpg") },
      ],
      //浏览器宽度
      screenWidth: 0,
    };
  },
  created() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // imgLoad(){
    //   this.$nextTick(()=>{
    //     this.bannerHeight = this.$refs.bannerHeight[0].height;
    //     console.log(this.$refs.bannerHeight[0].height);
    //   })
    // }
  },
  mounted() {
    // this.imgLoad();
    // window.addEventListener('resize',()=>{
    //   this.bannerHeight = this.$refs.bannerHeight[0].height;
    //   this.imgLoad();
    // },false)
  }
};
</script>
<style lang='scss' scoped>
.header_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  width: 100%;
  height: 150px;
  .el-menu--horizontal {
    border: none;
  }
}
.header_bottom {
  width: 100%;
 .imageSwiper{
   width: 100%;
   height: 100%;
 }
}
</style>