<template>
  <div>
    <h1>客栈订单</h1>
    <div>
      <div>
        <div class="panel panel-success">
          <div class="panel-heading">
            <h1>订单详情</h1>
          </div>
          <div class="panel-body">
            <table class="table table-condensed">
              <thead>
                <tr>
                  <th>图片</th>
                  <th>酒店名</th>
                  <th>酒店介绍</th>
                  <th>订单状态</th>
                  <th>价格</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="items in datas">
                  <td v-model="items.img_url" class="img_size">
                    <img :src="items.img_url" alt="">
                  </td>
                  <td v-model="items.name"> {{items.name}} </td>
                  <td v-model="items.msg"> {{items.msg}} </td>

                  <td v-model="items.state"> {{items.state}} </td>
                  <td v-model="items.price"> {{items.price}} </td>
                  <td> <button @click="remove(index)">删除</button> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- <ul class="pattern-design">
        <li>
          <i class="iconfont icon-wifi"></i>
          <div style="font-size:18px;color:#F25F2D; font-weight: 700;">wifi</div>
        </li>
        <li>
          <i class="iconfont icon-tingche"></i>
          <div style="font-size:18px;color:#F25F2D; font-weight: 700;">停车位</div>
        </li>
        <li>
          <i class="iconfont icon-icon-test"></i>
          <div style="font-size:18px;color:#F25F2D; font-weight: 700;">客房登记</div>
        </li>
        <li>
          <i class="iconfont icon-jiaqi"></i>
          <div style="font-size:18px;color:#F25F2D; font-weight: 700;">行李</div>
        </li>
        <li>
          <i class="iconfont icon-youyongchi"></i>
          <div style="font-size:18px;color:#F25F2D; font-weight: 700;">泳池</div>
        </li>
        <li>
          <i class="iconfont icon-jianshenfang2"></i>
          <div style="font-size:18px;color:#F25F2D; font-weight: 700;">健生</div>
        </li>
        <li>
          <i class="iconfont icon-xiazai47"></i>
          <div style="font-size:18px;color:#F25F2D; font-weight: 700;">茶</div>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: {
        img_url:"",
        name: "",
        state: "",
        price: "",
        msg:""

      },
      datas:[]
    };
  },
  // computed: {
  //   searchFor:function(){
  //     if(!this.searchValue){
  //       return this.items;
  //     }
  //     return this.items.filter((v,i)=>{
  //       if(v.name.indexOf(this.searchValue)!==-1){
  //         return v;
  //       }
  //     });
  //   }
  // },
  methods: {
    getRoom() {
      const self=this;
      this.$http.get('/api/user/getRoom').then(response=>{
        console.log(response);
        let result=response.data[0];
        // self.items.img_url=result.img_url;
        // self.items.name=result.name;
        // self.items.state=result.state;
        // self.items.price=result.price;
        // self.items.msg=result.msg;

        self.datas=response.data;
        console.log(self.datas);
      }
      // ,response=>{
      //   console.log("error")
      // }
      )
    },
    remove:function(index){
      this.datas.splice(index,1);
    }
  },
  mounted() {
    this.getRoom();
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.pattern-design li {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
h1 {
  color: #d06c09;
}
i {
  font-size: 40px;
  color: #f87f1d;
}
.img_size img{
  width: 50px;
  height: 50px;
}
</style>