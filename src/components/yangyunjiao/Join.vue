<template>
  <div class="body_box">
    <header-box></header-box>
    <div class="about_box">
      <ul class="about">
        <li>
          <router-link to="/about" class="bing">关于我们</router-link>
        </li>
        <li>
          <router-link to="/tell" class="bing">联系我们</router-link>
        </li>
        <li class="third">
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
        <div class="header">
          加入我们
          <ul class="us">
            <li>
              <router-link to="/join" class="li_one">加入我们</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/">诚聘英才</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/">WE人才</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/">企业福利</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/">职业发展</router-link>
            </li>
            <li>|</li>
            <li>
              <router-link to="/">缤纷生活</router-link>
            </li>
          </ul>
        </div>
        <div class="docs_section">
          <img src="../../../static/img/y_img/join.jpg" />
          <div class="side_box">
            <div class="box_left">
              <div class="new">
                <div class="head">
                  <i class="icon_newJob"></i>最新职位
                </div>
                <ul>
                  <li>高级Java工程师(Hot)</li>
                  <li>测试工程师</li>
                  <li>产品经理(Hot)</li>
                </ul>
                <div class="more">更多>></div>
                <div class="head">
                  <i class="icon_newJob carmera"></i>员工活动
                </div>
                <div class="img_box">
                  <img src="../../../static/img/y_img/huodong.jpg" />
                </div>
              </div>
            </div>
            <div class="box_right">
              <div class="head">
                <i class="pic"></i>加入我们
              </div>
              <div class="pic1">
                  <img src="../../../static/img/y_img/joinpic1.jpg">
              </div>
              <div class="pic1 pic2">
                  <img src="../../../static/img/y_img/joinpic2.jpg">
              </div>
            </div>
          </div>
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
    return {};
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
.about > .third {
  background-color: #5babfc;
}
.about > .third > .bing {
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
  height: 925px;
  padding: 30px;
  position: relative;
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
.us {
  position: absolute;
  right: 20px;
  top: 20px;
  height: 36px;
  line-height: 36px;
}
.us > li {
  font-size: 14px;
  color: #777777;
  float: left;
  padding: 0 10px;
}
.li_one {
  color: #5babfc;
}
.docs_section {
  position: relative;
  line-height: 28px;
  font-family: "Helvetica Neue", Helvetica, "Microsoft Yahei", STHeiTi,
    sans-serif;
}
.docs_section > img {
  width: 800px;
  height: 250px;
  position: absolute;
  top: 0;
  left: -30px;
}
.side_box {
  width: 740px;
  height: 517px;
  position: absolute;
  top: 280px;
  display: flex;
  justify-content: space-between;
}
.box_left {
  width: 359px;
  height: 485px;
  /* background-color: #f08; */
}
.new {
  width: 357px;
  height: 209px;
  border: 1px solid #c9c9c9;
}
.new > .head {
  width: 100%;
  height: 56px;
  font-size: 18px;
  line-height: 56px;
  color: #5babfc;
  background: url('../../../static/img/y_img/new.png') no-repeat;
}
.new > .head > .icon_newJob {
  height: 56px;
  width: 50px;
  float: left;
  background-position: 14px -41px;
  padding-right: 10px;
}
.new > ul > li {
  height: 37px;
  line-height: 37px;
  list-style-type: none;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 0;
  padding: 0 10px;
}
.new > ul > li:hover {
  background-color: #f3f3f3;
}
.more {
  text-align: right;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  background-color: #2c85df;
}
.new > .head > .carmera {
  background: url('../../../static/img/y_img/carmera.png') no-repeat;
}
.img_box {
  width: 100%;
  height: 190px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #c9c9c9;
}
.img_box > img {
  width: 339px;
  height: 172px;
}
.box_right {
  width: 359px;
  height: 517px;
  border: 1px solid #c9c9c9;
  padding: 10px;
  box-sizing: border-box;
}
.box_right > .head {
  width: 100%;
  height: 56px;
  font-size: 18px;
  line-height: 56px;
  color: #5babfc;
  padding-bottom: 5px;
  border-bottom: 1px solid #c9c9c9;
}
.box_right > .head > .pic {
  background: url("../../../static/img/y_img/pic.png") no-repeat;
  height: 56px;
  width: 50px;
  float: left;
  padding-right: 10px;
}
.box_right >.pic1{
   width: 100%;
   height: 218px;
   padding: 10px 0;
   box-sizing: border-box;
   border-bottom: 1px solid #c9c9c9;
}
.box_right >.pic2{
    border: 0px;
}
</style>