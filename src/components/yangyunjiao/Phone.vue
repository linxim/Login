<template>
    <div>
        <input class="phone input-style " :class="{'err-input' : phone.err}" v-model="phone.val" type="text" placeholder="请输入手机号"
         oninput = "value=value.replace(/[^\d]/g,'')" maxlength="11" @blur="phone.test()">
    </div>

</template>
<script>
export default {
    name:"Phone",
    data(){
         return {
                hintShow : false,  // 提示语显示
                hint : '信息填写错误', // 提示语

                /*
                *  val 为值,err为错误显示, test检验信息
                * */
                phone : {
                    val : '',
                    err : false,
                    pass: false,
                    test : function () {
                        // 验证手机号
                        let reg = /^1[0-9]{10}$/
                        if (this.val == '' || this.val.length <= 10 || !reg.test(this.val)) {
                            vm.$data.hintShow = true
                            vm.$data.hint = '请输入正确的手机号'
                            this.err = true
                            return false
                        }

                        vm.$data.hintShow = false
                        vm.$data.hint = ''
                        this.err = false
                        this.pass = true
                        return true
                    }
                }
            }
    }
}
</script>

<style scoped>

</style>