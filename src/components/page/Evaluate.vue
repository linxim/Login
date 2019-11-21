<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="您的评价" name="first">
      <span>客官，满意给个好评呗</span>
      <!-- 评论区 -->
      <div class="z-floor-pingjia">
        <div>
          <el-input
            type="textarea"
            :autosize="{minRows:2,maxRows:4}"
            placeholder="请输入内容"
            v-model="form.content"
            class="z-pinglun"
          ></el-input>
          <!-- <input type="text" class="z-pinglun" placeholder="请输入内容" v-model="content" /> -->
          <el-button class="emit" type="text" @click="handleClose">提交</el-button>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="评价管理" name="second">
      <div class="z-floor-title">评价历史记录</div>
      <div class="block">
        <div v-for="(item2,index2) in this.listData">
          <div class="appraise">
            <div class="appraise-title">
              用户名：
              <span>{{username}}</span>
            </div>
            <div class="appraise-title">
              发表时间
              <span>{{item2.date}}</span>
            </div>

            <div class="appraise-body">
              <span>{{item2.content}}</span>
            </div>
          </div>
          <div>
            <el-button type="danger" circle @click="del(item2.content)">删除</el-button>
          </div>
        </div>
        <br />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    var validateDate = (rule, value, callback) => {
      let currentTime = new Date();
      callback();
    };

    return {
      // 将日期和内容添加到数据库
      form: {
        content: "",
        date:''
      },
      timer: "",
      timer1: [],
      currentTime: new Date(), //获取当前时间
      // listData: [{ content: "" }],
      listData:[],
      show: false,
      mount: 1,
      activeName: "first"
    };
  },
  computed: {
    username() {
      let username = sessionStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    handleClose(done) {
      this.timer1.push(this.currentTime);
      var obj = { content: "" };
      obj.content = this.form.content;
      obj.name = this.name;
      obj.currentTime = this.currentTime;
      let self=this;
      console.log(this.currentTime, this.listData);
      this.form.date=this.currentTime;
      this.$http
        .post("/api/user/addComment", self.form)
        .then(function(response) {
          console.log(response);
        })
        .then(function(error) {
          console.log(error);
        });
      //this.currentTime 当前时间
      // this.listData.push(obj);
      // sessionStorage.setItem("article", JSON.stringify(this.listData));
      // sessionStorage.setItem("time-select", this.timer1.join());
      this.$confirm("感谢提交,您的鼓励会让我们做得更好")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    list: function() {
      // var obj = sessionStorage.getItem("article");
      // let obj2 = sessionStorage.getItem("time-select");
      // if (obj) {
      //   this.listData = JSON.parse(obj);
      // }
      // if (obj2) {
      //   this.timer1 = obj2.split(",");
      // }
    },
    del(index2){
      // this.listData.splice(index2, 1);
      // const lthis=this;
      // this.$http.get('/api/user/delComment').then(response=>{
      //   lthis.listData.splice(index2,1);
      // })


    },
    getComment1(){
      const lthis=this;
      this.$http.get('/api/user/getComment').then(response=>{
        console.log(response);
        lthis.listData=response.data;
        console.log(lthis.listData);
      })
    }
  },
  mounted() {
    // this.list();
    this.getComment1();
  },
  created() {
    this.timer = setInterval(() => {
      this.currentTime =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>
<style scoped>
.z-floor-title {
  width: 400px;
  background: #edefed;
  margin: 0;
  padding: 20px;
}
.block {
  position: relative;
  top: 10px;
  width: 440px;
  height: 500px;
}
.z-floor-pingjia {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.z-pinglun {
  position: relative;
  top: 0px;
  line-height: 80px;
  display: block;
  width: 300px;
}
.emit {
  position: relative;
  margin: 0 auto;
  left: 50px;
}
.appraise {
  /* border: 1px solid #77f4c0; */
  width: 440px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  top: 10px;
  position: relative;
  justify-content: space-between;
}
.appraise-title {
  width: 50%;
  background: #76f0bd;
}
.appraise-body {
  border: 1px solid #77f4c0;
  width: 440px;
  height: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 17px;
  text-indent: 2em;
}
</style>