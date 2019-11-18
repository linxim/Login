<template>
  <div class="body_box">
    <div class="selection">
      <div class="form_box1">
        <ul>
          <li>位置</li>
          <li class="limit">不限</li>
          <li>商圈/地标</li>
          <li>飞机场/地铁站</li>
          <li>轨道交通</li>
          <li>行政区</li>
          <li>景点</li>
        </ul>
      </div>
      <div class="form_box1">
        <ul>
          <li>品牌</li>
          <li class="limit">不限</li>
          <li>
            <input type="checkbox" /><span>7天酒店</span>
          </li>
          <li><input type="checkbox" /><span>7天优品</span></li>
        </ul>
      </div>
      <div class="form_box1">
        <ul>
          <li>星级</li>
          <li class="limit">不限</li>
          <li><input type="checkbox" /><span>经济型</span></li>
          <li><input type="checkbox" /><span>舒适型</span></li>
          <li><input type="checkbox" /><span>高档型</span></li>
          <li><input type="checkbox" /><span>豪华型 </span></li>
        </ul>
      </div>
      <div class="form_box1 box2">
        <ul>
          <li>价格</li>
          <li class="limit">不限</li>
          <li><input type="radio" name="radios"><span>200以下</span></li>
          <li><input type="radio" name="radios"><span>200-400</span></li>
          <li><input type="radio" name="radios"><span>400-600</span></li>
          <li><input type="radio" name="radios"><span>600以上</span></li>
          <li><button class="submit">确定</button></li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Form",
  data() {
    return {};
  }
};
</script>
<style scoped>
.body_box {
  width: 100%;
}
.selection {
  width: 1220px;
  height: 245px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 20px auto;
  border: 1px solid #ddd;
}
.selection > .form_box1 {
  width: 100%;
  height: 60px;
  padding: 10px 0px 10px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
}
.selection > .box2{
    border: 0;
}
.selection > .form_box1 > ul {
  display: flex;
  height: 60px;
  line-height: 40px;
}
.selection > .form_box1 > ul > li {
  width: 115px;
  height: 40px;
  margin-right: 20px;
  text-align: center;
}
.selection > .form_box1 > ul > .limit {
  width: 38px;
  height: 22px;
  color: #fff;
  line-height: 22px;
  background-color: #5aabfc;
  margin-top: 10px;
}
.selection > .form_box1 > ul > li > input {
  width: 18px;
  height: 18px;
}
.selection > .form_box1 > ul > li > span{
    font-size: 14px;
    padding-left: 5px;
}
.submit{
    display: inline-block;
    width: 60px;
    height: 30px;
    outline: none;
    line-height: 30px;
    /* background-color: #fff; */
    border: 1px solid #c9c9c9;
    border-radius: 3px;
}
.submit:hover{
    cursor: pointer;
}
</style>

