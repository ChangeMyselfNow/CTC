<template>
  <div class="footer">
    <div class="footer_top">
      <ul class="list_main">
        <li class="foot_left list_main_li">
          <img src="@/assets/image/footerbg.png" />
        </li>
        <li class="foot_center list_main_li">
          <ul class="top_content">
            <li>地址：中国深圳</li>
            <li>邮编：518000</li>
            <li>电话：</li>
            <li>传真：010-88888888</li>
            <li>客服电话：4008-888-888</li>
          </ul>
        </li>
        <li class="footer_right list_main_li"></li>
      </ul>
    </div>
    <div class="footer_bottom">
      <div class="bottom_content">
        <p>Copyright © 2020-2020 CTC 版权所有 技术支持：CTC检查</p>
        <p><a class="link_qzjd" href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2020101621号</a></p>
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
.footer {
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  .footer_top {
    width: 100%;
    height: 200px;
    padding: 20px 180px;
    background: #3f3f3f;
    .list_main {
      .list_main_li{
        float: left;
      }
      ul li {
        color: #8e8e8e;
        line-height: 26px;
        padding-top: 6px;
        font-size: 10px;
      }
      .top_content {
        float: left;
      }
    }
  }
  .footer_bottom {
    text-align: center;
    width: 100%;
    background: #333;
    padding: 20px 0;
    .bottom_content {
      p {
        line-height: 23px;
        font-size: 10px;
        color: #8e8e8e;
      }
      .link_qzjd {
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>