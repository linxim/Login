<template >
  <div>
    <div class="box">
      <div class="top-box">
        <div class="nva-box">
          <div class="logo-box">
            <img
              src="http://staticnew.mayi.com/resourcesWeb/v201807/index_page_new/images/logo.png"
              alt
            />
          </div>

          <div class="nav-right">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-phone-outline"></i>
                  客服热线
                </template>
                <el-menu-item index="2-1">400-028-6868</el-menu-item>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-mobile-phone"></i>
                  下载APP送500元大礼包
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
              </el-submenu>

              <el-menu-item index="3"> <router-link to="/hotel"> 客栈预定 </router-link> </el-menu-item>

              <el-submenu index="4">
                <template slot="title">帮助中心</template>
                <el-menu-item index="2-1">搜索房源</el-menu-item>
                <el-menu-item index="2-2">预订房源</el-menu-item>
                <el-menu-item index="2-3">订单操作</el-menu-item>
                <el-menu-item index="2-3">入住评论</el-menu-item>
                <el-menu-item index="2-3">更多</el-menu-item>
              </el-submenu>

              <el-menu-item index="3" v-if="showname">
                <router-link to="/login">登录</router-link>
              </el-menu-item>
              <el-menu-item index="3" v-if="showname">
                <router-link to="/register">注册</router-link>
              </el-menu-item>
              <el-menu-item index="3" v-if="!showname">
                <router-link to="/brief">{{username}}</router-link>
              </el-menu-item>
            </el-menu>

            <!-- <router-link to="/brief" v-for="(item,index) in user" :key="index" v-if="show">  {{item.username}} </router-link> -->
            <div></div>
          </div>
        </div>
      </div>

      <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="560px">
          <el-carousel-item v-for="item in imgs" :key="item.key">
            <!-- <h3>{{ item }}</h3> -->
            <img :src="item.img" alt class="pictuer" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="select-box">
        <div class="select-top">
          <ul class="aim">
            <li class="in">国内</li>
            <li class="out">国外</li>
          </ul>
        </div>

        <div class="concent">
          <div class="con-left">
            <div class="place">
              <div class="place-icon">
                <i class="el-icon-location-outline"></i>
              </div>
              <input class="place-text" type="text" value="城市、景点、商圈" />
              <span class="line"></span>
            </div>

            <div class="times">
              <div class="time-icon">
                <i class="el-icon-date"></i>
              </div>

              <div class="times-text">
                <input class="ru" type="text" value="入住日期" />
                <div class="wan">0晚</div>
                <input class="tui" type="text" value="退房日期" />
              </div>

              <span class="line"></span>
            </div>

            <div class="number">
              <div>
                <span class="iconfont icon-ren111"></span>
              </div>
              <div class="num-text">
                <div>不限</div>
                <div class="num-icon">
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="con-right">搜索民宿</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      //   user: [],
      show: true,

      activeIndex: "1",
      activeIndex2: "1",
      imgs: [
        {
          img:
            "https://i1.mayi.com/mayi85/M31/DJ/WR/QGGYU2SNTBHH38ZR8TWLSGHZ9LY9NM.jpg"
        },
        {
          img:
            "http://i1.mayi.com/mayi68/M83/GP/QO/FPRM3Z7YH3P2JUTP6SNQN25QBR43T8.jpg"
        },
        {
          img:
            "https://i1.mayi.com/mayi19/M40/MX/MV/9GTZMMG2W5Y3JVCL9JCSRX7QWQT6WG.jpg"
        }
      ]
    };
  },
  computed: {
    username() {
      let username = sessionStorage.getItem("ms_username");
    
      return username ? username : this.name;
    },
    showname() {
      let showname = sessionStorage.getItem("ms_show");
      console.log(showname, this.show);
      return showname ? !showname : this.show;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
    // getUser() {
    //   const self = this;
    //   this.$http.get("/api/user/getUser").then(response => {
    //     self.user = response.data;
    //     console.log(self.user);
    //   });
    // }
  },

  mounted() {
    // this.getUser();
  }
};
</script>

<style  scoped>

*{
    margin: 0px;
    padding: 0px;
}

li{
    list-style: none;
}

.box{
    width: 100%;
    height: 560px;  
    /* background:#caf; */
}

.top-box{
    width:100%;
    height: 70px;
    position: absolute;
    z-index:9;
    /* background: rgba(0, 0, 0,0); */
}

.nva-box{
    width: 1050px;
    height: 70px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    /* background: #345; */
}
.logo-box{
    width:40px;
    height: 40px;
    margin-top: 15px;
    /* background: #efa; */
}

.logo-box>img{
    width:40px;
    height: 40px;
}

.nav-right{
    width: 610px;
    height: 70px;
    box-sizing: border-box;
    /* background: #eaf; */
}


.pictuer{
    width: 100%;
    height: 560px;
}

.select-box{
    width:1050px;
    height:153px;
    z-index: 9;
    position: relative;
    /* left: 160px; */
    bottom: 150px;
    border-radius: 12px;
    background: #fff;
    margin:0px auto 50px;
    padding-top: 1px;
    box-shadow: 0 0 4px 0 rgba(17, 70, 109, 0.01), 0 0 12px 0 rgba(0, 0, 0, 0.04);
}

.select-top{
    width: 970px;
    height: 39px;
    margin:15px auto;
    /* background: #efa; */
}

.aim{
    width: 100%;
    height: 37px;
    display: inline-block;
}

.aim li{
    width: 42px;
    height: 35px;
    font-size: 20px;
    line-height: 35px;
    color: #969696;
    margin-left:8px;
    display: inline-block;
}

.aim li:hover{
    cursor: pointer;
    font-weight: 600;
    color: #484848;
    border-bottom:2px solid #484848;
}

.concent{
    width: 970px;
    height: 64px;
    margin:0px auto;
    display: flex;
    justify-content: space-between;
    /* background: #aef; */
}

.con-left{
    width: 764px;
    height: 64px;
    border-radius: 100px;
    background: #F8F8F8;
}

.con-right{
    width: 196px;
    height: 64px;
    font-size: 24px;
    line-height: 64px;
    text-align: center;
    font-weight: 600;
    color:#fff;
    cursor: pointer;
    border-radius: 100px;
    background: #22C891;
}

.place{
    width:212px;
    height:64px;
    float: left;
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    /* background: #e39; */
}


.place-text{
    width: 178px;
    height:64px;
    font-size: 18px;
    line-height: 64px;
    font-weight: 700;
    color: #BDBDBD;
    text-indent: 15px;
    border: none;
    outline:none;
    background: #F8F8F8;
}

.line{
    width: 1px;
    height: 30px;
    background: #ebebeb;
    position: relative;
    top:18px;
    left: 18px;

}

.times{
    width: 350px;
    height: 64px;
    float: left;
    margin-left: 18px;
     display: flex;
   justify-content: start;
    /* background: #bae; */
}

.number{
    width:142px;
    height: 64px;
    float: left;
    display: flex;
    justify-content: space-between;
    /* background: #eab; */
}

.num-text{
    width: 100px;
    height: 64px;
    font-size: 18px;
    color: #484848;
    font-weight: 700;
    line-height: 64px;
   display: flex;
   justify-content: start;
    cursor: pointer; 
}

.times-text{
    width: 275px;
    height: 64px;
     font-size: 18px;
    line-height: 64px;
    font-weight: 700;
    text-indent: 15px;
     color: #BDBDBD;
     cursor: pointer; 
     display: flex;
     justify-content: space-between;
     /* background: #67a; */
}

.wan{
    width: 51px;
    height: 17px;
    font-size: 12px;
    color:#484848;
    float: left;
    line-height: 18px;
    margin-top:25px;
    background: url("../../assets/night-count.png") no-repeat center;
    /* background: #91f; */
}
.ru{
    width:90px;
    height: 64px;
     font-size: 18px;
    line-height: 64px;
    font-weight: 700;
    text-indent: 15px;
     color: #BDBDBD;
      border: none;
    outline:none;
    background: #F8F8F8;

}
.tui{
    width: 96px;
    height: 64px;
      font-size: 18px;
    line-height: 64px;
    font-weight: 700;
     color: #BDBDBD;
      border: none;
    outline:none;
    background: #F8F8F8;

}
</style>