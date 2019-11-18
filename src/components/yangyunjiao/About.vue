<template>
  <div class="body_box">
    <header-box></header-box>
    <div class="about_box">
      <ul class="about">
        <li class="first">
          <router-link to="/about" class="bing">关于我们</router-link>
        </li>
        <li>
          <router-link to="/tell" class="bing">联系我们</router-link>
        </li>
        <li>
          <router-link to="/join" class="bing third">加入我们</router-link>
        </li>
        <li>
          <router-link to="/problem" class="bing">常见问题</router-link>
        </li>
        <li>
          <router-link to="/paly" class="bing">用户体验</router-link>
        </li>
      </ul>
      <div class="introduce">
        <div class="header">关于我们</div>
        <div class="docs_section">
          <h4>WeHotel企业介绍</h4>
          <p class="paragraph">
            上海齐程网络科技有限公司（WeHotel）成立于2017年2月，由锦江资本、锦江酒店、
            锦江股份联合联银创投、西藏弘毅、国盛投资，共同注资人民币10亿元设立，
            并于2017年6月成为上海市地方国有控股混合所有制企业首批员工持股试点单位。
          </p>
          <p class="paragraph">
            WeHotel自成立以来，植根中国，面向全球，以股东庞大的产业资源和雄厚的实力资本为依托，
            以连接有温度、有深度的旅行体验为目标，以互联网+产业为驱动，通过为广大用户提供手机客户端、
            微信、智能客服等一站式移动互联网预订体系；为逾亿会员提供全球近30个品牌，约8000家优质酒店预订、
            旅游度假、在线服务、金融支付等全流程旅行服务体系；为品牌酒店提供经营管理的赋能支持系统。
            加快实现用户消费需求、高新技术运用与酒店创新发展的无缝结合和多方共赢，持续推动产业转型升级，
            全力构筑以酒店为核心的全球旅行服务共享平台。
          </p>
        </div>
      </div>
    </div>
    <about-box></about-box>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "About",
  data() {
    return {
      // aboutlist: [
      //   {
      //     url: "/about",
      //     text: "关于我们"
      //   },
      //   {
      //     url: "/call",
      //     text: "联系我们"
      //   },
      //   {
      //     url: "/join",
      //     text: "加入我们"
      //   },
      //   {
      //     url: "/problem",
      //     text: "常见问题"
      //   },
      //   {
      //     url: "/paly",
      //     text: "用户体验"
      //   }
      // ]
    };
  },
  components: {
    "about-box": Footer,
    "header-box": Header
  }
};
</script>
<style scoped>
.body_box {
  background-color: #f3f3f3;
}
.about_box {
  width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
.about {
  width: 178px;
  height: 200px;
  background-color: #fff;
  border: 1px solid #d5d5d5;
}
.about > li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 30px;
  border-bottom: 1px solid #f4f4f4;
  box-sizing: border-box;
}
.about > .first{
  background-color: #5babfc;
}
.about > .first>.bing{
 color: #fff;
}
.bing {
  color: #777777;
}
.bing:hover {
  color: #5babfc;
}
.introduce {
  width: 800px;
  height: 700px;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: #fff;
}
.header {
  color: #5babfc;
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f4f4f4;
  margin-bottom: 30px;
}
.docs_section {
  line-height: 28px;
  font-family: "Helvetica Neue", Helvetica, "Microsoft Yahei", STHeiTi,
    sans-serif;
}
.docs_section > h4 {
  font-weight: 700;
  font-size: 14px;
  color: #333;
  margin-bottom: 25px;
}
.docs_section > p {
  font-size: 16px;
  color: #777;
}
.docs_section > .paragraph {
  text-indent: 25px;
}
</style>