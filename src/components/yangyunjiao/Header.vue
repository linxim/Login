<template>
  <div>
    <div class="head_box">
      <div class="inner">
        <img src="../../../static/img/y_img/logo.jpg" alt />
        <ul class="head_list">
          <li v-for="(item,index) in headerlist" :key="index">
            <router-link :to="item.url" class="header">{{item.text}}</router-link>
          </li>
        </ul>
        <!-- <div class="login_box">
           <router-link  to="/" class="login" value="">登录</router-link>
           <router-link  to="/" class="login regiest" value="">注册</router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      headerlist: [
        {
          url: "/index",
          text: "酒店首页"
        },
        {
          url: "/hotel",
          text: "酒店预订"
        },
        {
          url: "/tell",
          text: "联系我们"
        },
         {
          url: "/join",
          text: "招纳贤士"
        }
      ]
    };
  }
};
</script>
<style scoped>
.head_box {
  width: 100%;
  height: 80px;
  box-shadow: 5px 5px 5px #ddd;
  background-color: #fff;
}
.inner {
  width: 1220px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.inner > img {
  width: 260px;
  height: 80px;
}
.head_list {
  width:500px;
  display: inline-block;
  line-height: 80px;
  padding-left: 15px;
}
.head_list > li {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
}
.header {
  font-size: 18px;
  color: #666;
}
/* .login_box{
    width: 240px;
    height: 80px;
    line-height: 80px;
    text-align: center;
} */

.login{
    display: inline-block;
     width: 66px;
    height: 35px;
    line-height: 35px;
    outline: none;
    margin-right: 10px;
    border: 1px solid #5BABFC;
    border-radius: 3px;
    background-color:#5BABFC;
    color: #fff; 
}
.login:hover{
    background-color:#2c85df;
    color: #fff; 
}
.regiest{
    background-color: #fff;
    color:#5BABFC; 
}
.regiest:hover{
    background-color:#2c85df;
    color: #fff; 
}
</style>