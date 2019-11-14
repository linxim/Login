<template>
  <div class="intro">
    <div class="crumbs"></div>
    <div>
      <h3>忆家客栈</h3>
      <audio src="../../../static/mp3/bg.mp3" autoplay loop></audio>

      <div v-model="showmsg.content" class="demo1"> <span>{{showmsg.content}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: " 年年跃马长安市,客舍似家家似寄.青钱换酒日无何,红烛呼卢宵不寐,易挑锦妇机中字,难得玉人心下事,男儿西北有神州,莫滴水西桥畔泪.",
      content: "",
      showmsg: { content: "" },
      showtime: 0,
      showtimer:'',
      i: 0
    };
  },
  methods: {},
  created() {
    var i;
    this.showtimer = setInterval(() => {
      this.showmsg.content = this.msg.substring(this.i, 1);
      this.i++;
    }, 100);
  },
  beforeDestroy() {
    clearInterval(this.showtimer);
    console.log(this.showmsg.content);
  }
};
</script>

<style scoped>
.demo1 {
  writing-mode: horizontal-tb;
  width: 278px;
  height: 140px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
}
h3{
  margin-left: 20px;
}
.intro {
  width: 100%;
  height: 500px;
  background:url('../../../static/img/bg_name.jpg') no-repeat;
  background-size: 100% 100%;
  border: 1px solid black;
  box-shadow: black 5px 5px 30px 10px inset;
}
</style>