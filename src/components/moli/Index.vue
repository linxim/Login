<template>
  <div>
    <Header-Ly></Header-Ly>
    <div class="travel">
      <div class="travel-top">
        <div class="travl-logo">
          <img
            src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/homestay.png"
            alt
          />
        </div>
        <div class="travel-title">
          <div class="travel-max">旅行，就要住民宿</div>
          <div class="travel-min">谈笑有鸿儒，往来无白丁</div>
        </div>
      </div>

      <div class="travel-conter">
        <div class="img-left">
          <div class="big-img">
            <img
              src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/houses.jpg"
              alt
            />

            <span class="img-name">民居</span>
          </div>

          <div class="litter-box">
            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/oldhouse.jpg"
                alt
              />

              <span class="img-name">老洋房</span>
            </div>
            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/seaview.jpg"
                alt
              />

              <span class="img-name">海景房</span>
            </div>
          </div>
        </div>
        <div class="img-right">
          <div class="litter-box">
            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/inn.jpg"
                alt
              />

              <span class="img-name">客栈</span>
            </div>
            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/villa.jpg"
                alt
              />

              <span class="img-name">别墅</span>
            </div>
          </div>

          <div class="big-img">
            <img
              src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/apartment.jpg"
              alt
            />

            <span class="img-name">公寓</span>
          </div>
        </div>
      </div>
    </div>

    <div class="travel">
      <div class="travel-top">
        <div class="travl-logo">
          <img
            src="//staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/theme_recommend.png"
            alt
          />
        </div>
        <div class="travel-title">
          <div class="travel-max">旅行主题推荐</div>
          <div class="travel-min">有一种旅行，叫跋山涉水来睡你</div>
        </div>
      </div>

      <div class="travel-conter">
        <div class="theme-left">
          <div class="theme">
            <img
              src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/family.jpg"
              alt
            />
          </div>
        </div>
        <div class="theme-right">
          <div class="litter-box">
            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/business.jpg"
                alt
              />
            </div>

            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/party.jpg"
                alt
              />
            </div>
          </div>

          <div class="litter-box">
            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/weekmonth.jpg"
                alt
              />
            </div>
            <div class="litter-img">
              <img
                src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/discount.jpg"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="travel">
      <div class="travel-top">
        <div class="travl-logo">
          <img
            src="//staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/hotplace.png"
            alt
          />
        </div>
        <div class="travel-title">
          <div class="travel-max">热门目的地</div>
          <div class="travel-min">灵魂和身体，总有一个在路上</div>
        </div>
      </div>

      <div class="aim">
        <ul class="list">
          <li class="goods" v-for="item in picters" :key="item.key">
            <div class="pic">
              <img :src="item.img" />
            </div>

            <div class="aim-title">
              <p>
                {{ item.info}}
                <span>{{item.money}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="intro-icon">
      <ul class="intro-mid">
        <li class="intro-list" v-for="item in icons" :key="item.key">
          <div class="icon-img">
            <img :src="item.img" alt />
          </div>
          <p class="icon-info">{{item.info}}</p>
          <p class="icon-text">{{item.text}}</p>
        </li>
      </ul>
    </div>

    <div class="arrow">
      <div class="arrow-left">
        <span class="iconfont icon-leftarrow"></span>
      </div>
      <div class="arr-right">
        <span class="iconfont icon-rightarrow"></span>
      </div>
    </div>

    <div class="travel">
      <div class="travel-top">
        <div class="travl-logo">
          <img
            src="//staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/haijingfang.png"
            alt
          />
        </div>
        <div class="travel-title">
          <div class="travel-max">椰林暖冬-三亚</div>
          <div class="travel-min">碧海蓝天金作沙, 椰风阵阵到天涯</div>
        </div>
      </div>

      <div class="sanya">
        <ul class="sanya-goods">
          <li class="sanya-list" v-for="item in sanya" :key="item.key">
            <div class="sany-img">
              <div class="love">
                <span class="iconfont icon-icon-test"></span>
              </div>

              <div class="rus">
                <img :src="item.img" alt />
              </div>
              <div class="sanya-money">
                <span class="sanya-price">￥{{item.price}}</span>
              </div>
            </div>
            <div class="relate">
              <p class="sanya-info">{{item.info}}</p>
              <p class="sanya-text">
                <span class="orange">{{item.fen}}分</span>
                <span class="orange">{{item.zan}}</span>
                ·
                <span class="black">{{item.bar}}条评价</span>
                <span class="gery">&nbsp; | &nbsp;</span>
                <span class="black">{{item.ju}}居</span>
                <span class="gery">&nbsp; | &nbsp;</span>
                <span class="black">{{item.place}}</span>
              </p>
            </div>
            <div class="touxiang">
              <img :src="item.touxiang" alt />
            </div>
          </li>
        </ul>

        <div class="more">查看更多</div>
      </div>
    </div>

    <div class="travel">
      <div class="travel-top">
        <div class="travl-logo">
          <img
            src="//staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/preference.png"
            alt
          />
        </div>
        <div class="travel-title">
          <div class="travel-max">蚂蚁优选</div>
          <div class="travel-min">为你挑选出品质好、服务佳、设施全的优质房源</div>
        </div>
      </div>

      <div class="sanya">
        <ul class="sanya-goods">
          <li class="sanya-list" v-for="item in ant" :key="item.key">
            <div class="sany-img">
              <div class="love">
                <span class="iconfont icon-icon-test"></span>
              </div>

              <div class="rus">
                <img :src="item.img" alt />
              </div>
              <div class="sanya-money">
                <span class="sanya-price">￥{{item.price}}</span>
              </div>
            </div>
            <div class="relate">
              <p class="sanya-info">{{item.info}}</p>
              <p class="sanya-text">
                <span class="orange">{{item.fen}}分</span>
                <span class="orange">{{item.zan}}</span>
                ·
                <span class="black">{{item.bar}}条评价</span>
                <span class="gery">&nbsp; | &nbsp;</span>
                <span class="black">{{item.ju}}居</span>
                <span class="gery">&nbsp; | &nbsp;</span>
                <span class="black">{{item.place}}</span>
              </p>
            </div>
            <div class="touxiang">
              <img :src="item.touxiang" alt />
            </div>
          </li>
        </ul>

        <div class="more">查看更多</div>
      </div>
    </div>

    <Footer-ly></Footer-ly>
  </div>
</template>

<script>
import FooterLy from "./Footer";
import HeaderLy from "./Header";

export default {
  name: "Index",
  components: {
    FooterLy,
    HeaderLy
  },
  data() {
    return {
      show:false,
      picters: [],
      icons: [],
      sanya: [],
      ant: []
    };
  },

  methods: {
    getHome1() {
      const self = this;
      this.$http.get("/api/user/getHome1").then(response => {
        self.picters = response.data;
      });
      this.$http.get("/api/user/getSanya").then(response => {
        self.sanya = response.data;
      });
      this.$http.get("/api/user/getAnt").then(response => {
        self.ant = response.data;
      });
      this.$http.get("/api/user/getHome2").then(response => {
        self.icons = response.data;
      });
    }
  },
  mounted() {
    this.getHome1();
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}

.travel {
  width: 1050px;
  /* height:500px; */
  margin: 50px auto 30px;
  /* background: #b674cc; */
}
.travel-top {
  width: 100%;
  height: 60px;
  padding-top: 1px;
  box-sizing: border-box;
  /* background: #eaf; */
}

.travl-logo {
  width: 55px;
  height: 55px;
  margin-top: 2.5px;
  float: left;
  /* background: #a31; */
}
.travl-logo > img {
  width: 55px;
  height: 55px;
}

.travel-title {
  width: 981px;
  height: 60px;
  float: left;
  margin-left: 12px;
  /* background: #a90; */
}
.travel-max {
  width: 981px;
  height: 40px;
  line-height: 40px;
  color: #484848;
  font-weight: 700;
  font-size: 28px;
  font-family: "PingFang SC", "Hiragino Sans GB", Arial, Verdana, Tahoma,
    "微软雅黑" !important;
  /* background: #9be; */
}
.travel-min {
  width: 981px;
  height: 20px;
  color: #767676;
  line-height: 20px;
  font-size: 14px;
  /* background: #e90; */
}

.travel-conter {
  width: 100%;
  /* height: 461px; */
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  /* background: rgb(161, 223, 136); */
}

.img-left {
  width: 516px;
  height: 461px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: #fae; */
}
.img-right {
  width: 516px;
  height: 461px;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: #adf; */
}
.big-img {
  width: 515px;
  height: 261px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  /* background: #bea; */
}
.big-img > img {
  border-radius: 15px;
}

.big-img > img:hover {
  transform: scale(1.1, 1.1);
  transition: all 0.5s;
}

.img-name {
  width: 122px;
  height: 49px;
  color: #484848;
  font-size: 20px;
  font-weight: 600;
  line-height: 49px;
  z-index: 9;
  position: relative;
  left: -22px;
  bottom: 53px;
  border-radius: 0 50px 0 12px;
  display: inline-block;
  padding: 0 40px;
  box-sizing: border-box;
  background: rgba(255, 254, 254, 0.9);
}
.litter-box {
  width: 515px;
  height: 180px;
  display: flex;
  justify-content: space-between;
  /* background: #23f; */
}
.litter-img {
  width: 248px;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  /* background: #efa; */
}
.litter-img > img {
  border-radius: 15px;
}

.litter-img > img:hover {
  transform: scale(1.1, 1.1);
  transition: all 0.5s;
}

.theme-left {
  width: 515px;
}

.theme {
  width: 515px;
  height: 380px;
  background: #bae;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
}

.theme > img {
  width: 515px;
  height: 380px;
  border-radius: 12px;
}

.theme > img:hover {
  transform: scale(1.1, 1.1);
  transition: all 0.5s;
}
.theme-right {
  width: 515px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: space-between;
}
.goods {
  width: 158px;
  height: 220px;
  /* margin: 25px 17px 0px 0px;
    display:block; */
  /* float: left; */
  /* background: #fae; */
}

.pic {
  width: 158px;
  height: 220px;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9;
}
.pic > img {
  width: 158px;
  height: 220px;
  border-radius: 8px;
  cursor: pointer;
}

.pic > img:hover {
  transform: scale(1.1, 1.1);
  transition: all 0.3s;
}

.aim {
  margin-top: 25px;
}

.aim-title {
  width: 158px;
  height: 47px;
  z-index: 9;
  position: relative;
  left: 0px;
  bottom: 47px;
  background: rgba(0, 0, 0, 0.8);
}

.aim-title > p {
  color: #fff;
  line-height: 47px;
  font-size: 18px;
  font-weight: 600;
  text-indent: 22px;
}

.aim-title > p > span {
  color: #fff;
  line-height: 47px;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
}

.intro-icon {
  width: 1050px;
  height: 203px;
  margin: 70px auto 30px;
  box-shadow: 0 0 4px 0 rgba(17, 70, 109, 0.01), 0 0 12px 0 rgba(0, 0, 0, 0.04);
  /* background: #bfa; */
}
.intro-mid {
  width: 100%;
  height: 123px;
  display: inline-block;
  margin-top: 30px;
  /* background: #fea; */
}
.intro-list {
  width: 112px;
  height: 123px;
  margin: 0px 75px;
  float: left;
  /* background: #eaa; */
}

.icon-img {
  width: 112px;
  height: 63px;
  padding-left: 22px;
  box-sizing: border-box;
  margin-top: 3px;
}

.icon-info {
  font-size: 20px;
  color: #2b2f33;
  text-align: center;
  margin: 10px 0px 5px 0px;
}

.icon-text {
  font-size: 14px;
  color: #767676;
  text-align: center;
}

.arrow {
  width: 1240px;
  height: 70px;
  line-height: 70px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  /* background: #2ef; */
}

.icon-leftarrow {
  color: #ebebeb;
  font-size: 66px;
  font-weight: 600;
  cursor: pointer;
}

.icon-leftarrow:hover {
  color: #bbb;
}

.icon-rightarrow {
  color: #ebebeb;
  font-size: 66px;
  font-weight: 600;
  cursor: pointer;
}
.icon-rightarrow:hover {
  color: #bbb;
}

.sanya-goods {
  width: 1050px;
  height: 298px;
  display: flex;
  justify-content: space-around;
  /* background: #ef4; */
}
.sanya-list {
  width: 337px;
  height: 298px;
}
.sany-img {
  width: 337px;
  height: 225px;
  border-radius: 12px;
  overflow: hidden;
}

.rus {
  width: 337px;
  height: 225px;
  border-radius: 12px;
  overflow: hidden;
}
.rus > img {
  width: 337px;
  height: 225px;
  border-radius: 12px;
  cursor: pointer;
}

.rus > img:hover {
  transform: scale(1.1, 1.1);
  transition: all 0.5s;
}

.relate {
  width: 282px;
  float: left;
  /* background: #efa; */
}

.sanya-info {
  width: 282px;
  height: 26px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: #484848;
  margin: 12px 0px 5px 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.sanya-text {
  font-size: 14px;
}

.orange {
  color: #fa8100;
}
.gery {
  color: #787878;
}
.black {
  color: #333;
}

.touxiang {
  width: 45px;
  height: 45px;
  float: left;
  margin: 12px 0px 0px 6px;
  /* background: #12f; */
}
.touxiang > img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.love {
  width: 28px;
  height: 28px;
  display: block;
  z-index: 9;
  position: relative;
  top: 40px;
  left: 300px;
  cursor: pointer;
  /* background:rgba(205, 205, 205, .3); */
}

.sanya-money {
  width: 83px;
  height: 40px;
  position: relative;
  left: 0px;
  bottom: 71px;
  z-index: 9;
  cursor: pointer;
  padding-left: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
}

.sanya-price {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  text-indent: 20px;
  line-height: 40px;
  text-align: center;
  font-family: "PingFang SC", "Hiragino Sans GB", Arial, Verdana, Tahoma,
    "微软雅黑" !important;
}
.icon-icon-test {
  color: #fff;
  font-size: 30px;
  line-height: 28px;
  text-align: center;
}

.more {
  width: 224px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: #484848;
  border-radius: 20px;
  margin: 50px auto;
  background: #f4f4f4;
  cursor: pointer;
}

.more:hover {
  background: #bbb;
}
</style>
