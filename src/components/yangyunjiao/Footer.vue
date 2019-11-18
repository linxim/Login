<template>
  <div class="foot">
    <footer>
      <div class="foot_inner">
        <div class="footer_in">
          <ul class="call">
            <li v-for="(item,index) in footlist" :key="index">
              <router-link :to="item.url" class="bing">{{item.text}}</router-link>
            </li>
          </ul>
          <div class="ffam">
            <p>Copyright©1997-2017锦江国际（集团）有限公司版权所有</p>
            <p>沪ICP备14043958号-6</p>
            <img src="../../../static/img/y_img/footer.png" />          
          </div>
        </div>
        <div>
          <img src="../../../static/img/y_img/tel.png" alt />
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
    name:"Footer",
    data(){
        return{
            footlist:[
                {
                 url:"/about",
                 text:"关于我们"
                },
                {
                 url:"/tell",
                 text:"联系我们"
                },
                {
                     url:"/join",
                    text:"加入我们"
                },
                {
                    url:"/problem",
                    text:"常见问题"
                },
                {
                     url:"/paly",
                     text:"用户体验"
                }           
            ]        
        }
    }
}
</script>
<style scoped>
.call {
  display: flex;
}
.call > li {
  padding: 0 35px 20px 0;
  border-bottom: 1px solid #fff;
}

.foot {
  margin-top: 10px;
  width: 100%;
  height: 190px;
  background-color: #1d1d1d;
}
.foot_inner {
  width: 1220px;
  height: 190px;
  margin: 0 auto;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.footer_in {
  width: 900px;
}
.bing {
  color: #fff;
}
.ffam {
  padding-top: 10px;
  color: #fff;
}
</style>