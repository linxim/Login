<template>
  <div class="body_box">
    <header-box></header-box>
    <div class="about_box">
      <ul class="about">
        <li>
          <router-link to="/about" class="bing">关于我们</router-link>
        </li>
        <li>
          <router-link to="/call" class="bing">联系我们</router-link>
        </li>
        <li>
          <router-link to="/join" class="bing third">加入我们</router-link>
        </li>
        <li class="fourth">
          <router-link to="/problem" class="bing">常见问题</router-link>
        </li>
        <li>
          <router-link to="/paly" class="bing">用户体验</router-link>
        </li>
      </ul>
      <div class="introduce">
        <div class="header">常见问题</div>
        <div class="docs_section">
          <ul>
              <li>
                  <p class="question">网站上的星级评定标准是什么？</p>
                  <p>国家旅游局评定的星级。</p>                 
              </li>
              <li>
                  <p class="question">订单预订成功后，我是否会接到预订成功的通知？</p>
                  <p>订单预订成功后您会收到短信和邮件，如果没有收到可登录您的订单中心查询。</p>
              </li>
              <li>
                  <p class="question">为什么我这次查到的价格和我以前查到的价格不一样了？</p>
                  <p>酒店的价格根据季节、供求情况等因素发生变化。您如果看到满意的价格，请尽快预订，以免错过低价。
                请注意所有的酒店价格都受供应制约，在预订成功并确认之前价格是无法保证的</p>
              </li>
              <li>
                  <p class="question">在一个订单中我可以预订几间房？</p>
                  <p>您可以一次最多预订3间房。如预订大于3间房，您可致电锦江旅行客服热线：400-820-9999。
                 另外，我们无法保证您所有的客人都会入住相邻或相同楼层的房间，酒店会跟据实际情况安排。。</p>
              </li>
              <li>
                  <p class="question">我可以代别人预订酒店吗？怎么操作？</p>
                  <p>当然可以。欢迎您为亲朋好友预订酒店。为了您的亲朋好友能够顺利入住及您的利益不受影响，请避免通过不同的渠道重复预订。<br>
                                    同时请您注意：<br>
                                    1. 在填写预订单时，您需要为每个预订的房间都输入至少一位实际入住客人的姓名——特别提示：预订填写的姓名必须与证件上的姓名保持一致。<br>
                                    2. 当您的朋友到达酒店时，需在酒店前台报出锦江旅行名义及订单中所留的入住人姓名，并出示有效证件就可以办理入住了。
                                </p>
              </li>
              <li>
                  <p class="question">如果我迟迟就是收不到确认信息怎么办？</p>
                  <p>常规的收到确认信时间是2分钟内。如果10分钟内仍没有收到确认信，可致电我们的预订热线400-820-9999。</p>
              </li>
              <li>
                  <p class="question">什么叫重复预订？</p>
                  <p>预订同一酒店同一入住时段同一客人名字称为重复预订。
                    系统不接受重复预订。如需预订多间房，需提供多位客人名字。</p>
              </li>
              <li>
                  <p class="question">预订了客房，是否就有免费的早餐？</p>
                  <p>并不是所有预订的酒店客房都会有免费的早餐，这需要视酒店的情况而定。一般情况下，早餐的信息，
                    如“是否含有免费早餐”、“包含单份或双份免费早餐”等，会在具体的房型介绍中为您说明。</p>
              </li>
              <li>
                  <p class="question">我怎样才能查看我的酒店预订记录？</p>
                  <p>通过登录锦江旅行网站可以查询到会员在线预订的所有订单信息。</p>
              </li>
              <li>
                  <p class="question">我想多住几天怎么办理？</p>
                  <p>建议先在线另外预订续住日期客房后，再至酒店前台办理续住手续。
                    亦可直接在酒店前台办理续住，但续住日期没有积分。</p>
              </li>
              <li>
                  <p class="question">信用卡预付后，可以在网上操作或发短信取消订单吗？</p>
                  <p>目前未到入住日期的订单网上可操作取消，但不支持短信取消，如果订单取消时间超过免费取消时效规则，酒店将收取相应取消费用。</p>
              </li>
          </ul>
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
    return {}
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
.about > .fourth{
  background-color: #5babfc;
}
.about > .fourth>.bing{
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
  height: 1350px;
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
.docs_section>ul{
    padding-left: 30px;

}
.docs_section>ul>li{
    list-style-type: square;
    margin-bottom: 25px;
}
.docs_section .question {
    color: #333;
    font-weight: 700;
}
</style>