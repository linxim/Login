<template>
  <div class="box">
    <header-box></header-box>
    <form-box></form-box>
    <div class="hotl_box">
      <div class="top"></div>
      <div class="hotel_detail" v-for="(item, index) in list" :key="index">
        <div class="img1">
          <img :src="item.img" alt />
        </div>
        <div class="description">
          <div class="des_left">
            <h3>{{item.title}}</h3>
            <p>{{item.adress}}</p>
            <p>{{item.distance}}</p>
            <p class="type">{{item.type}}</p>
          </div>
          <div class="detail">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <div class="price_box">
              <span>￥</span>
              <span class="price">{{item.price}}</span>
              <span>起</span>
            </div>
            <div><router-link to="/onlineorder"  class="desc_a">{{item.detil}}</router-link></div>
          </div>
          <!-- <div class="map"></div> -->
        </div>
      </div>
    </div>
    <footer-box></footer-box>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
export default {
  name: "Home",
  data: function() {
    return {
      value: 5,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      list: [
        {
          img: "http://imgs.bestwehotel.com/images/inn/15Hphz7Itf",
          title: "7天酒店·上海世博杨高南路地铁站店",
          adress: "地址：齐恒路106号",
          distance: "距离市中心 6.5 km",
          type: "经济型",
          star: "5分",
          price: "210",
          detil: "查看详情"
        },
        {
          img: "http://imgs.bestwehotel.com/images/inn/18LgsSm7Fl",
          title: " 7天酒店·上海大宁国际延长路地铁站店",
          adress: "地址：万荣路32号",
          distance: "距离市中心 5.3 km",
          type: "经济型",
          star: "5分",
          price: "189",
          detil: "查看详情"
        },
        {
          img: "http://imgs.bestwehotel.com/images/inn/19tDKJPT11",
          title: "7天酒店·上海华师大金沙江路地铁站店",
          adress: "地址：上海市普陀区中山北路3636号",
          distance: "距离市中心5.4km",
          type: "经济型",
          star: "5分",
          price: "178",
          detil: "查看详情"
        },
        {
          img: "http://imgs.bestwehotel.com/images/inn/16mOofBeNJ",
          title: " 7天酒店·上海莘庄地铁站龙之梦广场店 ",
          adress: "地址：七莘路299号",
          distance: "距离市中心15.1km",
          type: "经济型",
          star: "5分",
          price: "126",
          detil: "查看详情"
        },
        {
          img: "http://imgs.bestwehotel.com/images/inn/15HECOwc3g",
          title: " 7天酒店·上海江宁路地铁站玉佛寺店",
          adress: "地址：安远路139号",
          distance: "距离市中心2.8km",
          type: "经济型",
          star: "5分",
          price: "199",
          detil: "查看详情"
        },
        {
          img: "http://imgs.bestwehotel.com/images/inn/1669tGYoCM",
          title: " 7天酒店·上海大木桥地铁站店",
          adress: "地址：茶陵路212－232号",
          distance: "距离市中心7.9km",
          type: "经济型",
          star: "5分",
          price: "221",
          detil: "查看详情"
        },
        {
          img: "http://imgs.bestwehotel.com/images/inn/19GcTrFg1N",
          title: "7天优品·上海天山路店",
          adress: "地址：天山路473号",
          distance: "距离市中心7.2km",
          type: "经济型",
          star: "5分",
          price: "242",
          detil: "查看详情"
        },
        {
          img: "http://imgs.bestwehotel.com/images/inn/19W9X8K68u",
          title: "  7天酒店·上海南京路步行街二店",
          adress: "地址：宜川路310号",
          distance: "距离市中心5.1km",
          type: "经济型",
          star: "5分",
          price: "157",
          detil: "查看详情"
        }
      ]
    };
  },
  components: {
    "footer-box": Footer,
    "header-box": Header,
    "form-box":Form
  }
};
</script>

<style scoped>
*{
  box-sizing: content-box;
}
.box {
  position: relative;
}
.hotl_box {
  width: 1220px;
  margin: 20px auto;
  position: relative;
}
.top {
  width: 100%;
  height: 50px;
  background-color: #5babfc;
}
.hotel_inner {
  width: 880px;
}
.hotel_detail {
  width: 880px;
  height: 240px;
  padding: 8px 0;
  display: flex;
  border-bottom: 1px solid #aaa;
  justify-content: space-between;
}
.img1 > img {
  width: 240px;
  height: 183px;
}
.description {
  width: 615px;
  font-size: 16px;
  color: #666666;
  display: flex;
}
.des_left {
  width: 385px;
  height: 190px;
}
.description > h3 {
  font-size: 20px;
}
.description > .des_left > p {
  padding: 6px 0;
}
.type {
  width: 70px;
  height: 20px;
  text-align: center;
  background: #fff;
  color: #5babfc;
  border: 1px solid #5babfc;
  border-radius: 3px;
}
.map {
  width: 290px;
  height: 420px;
  background-color: #f08;
  position: fixed;
  top: 50px;
  right: 80px;
}
.detail {
  width: 220px;
  height: 240px;
  /* background-color:#a09; */
  position: relative;
}
.block > span {
  font-size: 18px;
}
.el-rate__icon {
  font-size: 28px;
}
.price_box {
  width: 150px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  background-color: #fff;
  position: absolute;
  bottom: 60px;
  right: -30px;
}
.price_box > .price {
  font-size: 40px;
  color: #ff560a;
  font-weight: bolder;
}
.desc_a {
  width: 102px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  background-color: #fff;
  color: #ff560a;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 1px solid #ff560a;
  border-radius: 5px;
}
.desc_a:hover {
  background-color: #ff560a;
  color: #fff;
  cursor: pointer;
}
</style>