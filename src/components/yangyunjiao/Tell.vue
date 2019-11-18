<template>
  <div class="body_box">
    <header-box></header-box>
    <div class="about_box">
       <ul class="about">
        <li>
          <router-link to="/about" class="bing">关于我们</router-link>
        </li>
        <li class="second">
          <router-link to="/call" class="bing">联系我们</router-link>
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
      </ul>
      <div class="introduce">
        <div class="header">联系我们</div>
        <div class="docs_section">
          <h4>WeHotel企业介绍</h4>
          <p class="paragraph">
           服务热线：400-820-9999
          </p>
          <p class="paragraph">
          电子邮件：service@wehotelglobal.com
          </p>
          <p class="paragraph">公司地址：上海市黄浦区延安东路100号联谊大厦24楼（总部）</p>
          <p class="paragraph">广州市海珠区新滘西路300号铂涛大厦6楼</p>
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
      aboutlist: [
        {
          url: "/about",
          text: "关于我们"
        },
        {
          url: "/call",
          text: "联系我们"
        },
        {
          url: "/join",
          text: "加入我们"
        },
        {
          url: "/problem",
          text: "常见问题"
        },
        {
          url: "/paly",
          text: "用户体验"
        }
      ]
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
.about > .second{
  background-color: #5babfc;
}
.about > .second>.bing{
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