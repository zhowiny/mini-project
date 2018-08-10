<template>
  <div class="container">
    <header class="tags">
      <div 
        :class="selected == item.value ? 'tag_active' : 'tag'" 
        v-for="(item,index) in tagList" :key="index"
        @click="changeTag(item.value)">
        {{ item.name }}
      </div>
    </header>

    <div class="old_customer" v-if="selected == 1">
      <form @click="formSubmit" report-submit="true">
        <div class="option_box">
          <div class="option">
            <div class="option_label">选择已有客户</div>
            <picker class="option_sele" name="name">请选择</picker>
            <img src='/images/icon_arrow_right.png' class="right_icon">
          </div>
          <div class="option">
            <div class="option_label">客户手机号</div>
            <input class="option_sele" placeholder="客户手机号" placeholder-style="color: #ccc"/>
          </div>
          <div class="option" style="border: none">
            <div class="option_label">客户邮箱</div>
            <picker class="option_sele">客户邮箱</picker>
          </div>
        </div>
        <button class="next_btn" formType="submit">立即预约</button>
      </form>
    </div>
    <div class="new_customer" v-if="selected == 2">
      <form bindsubmit="formSubmit">
        <div class="option_box">
          <div class="option" style="border: none">
            <div class="option_label">客户姓名</div>
            <input class="option_input" placeholder="请输入" placeholder-style="color: #ccc"/>
          </div>
        </div>
        <button class="next_btn" formType="submit">立即预约</button>
      </form>
    </div>
    <p class="tips">*如需客户自主生成合同请分享产品至客户</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      selected: 1,
      tagList: [
        {
          name: '老客户预约',
          value: 1
        },
        {
          name: '新客户预约',
          value: 2
        }
      ]
    }
  },
  methods: {
    changeTag (value) {
      this.selected = value
    },
    formSubmit (event) {
      console.log(event)
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .container{
    font-size: 26rpx;
  }
  .tags{
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 28rpx;
    line-height: 77rpx;
    background: #fff;
    border-bottom: 1rpx solid #ddd;
  }
  .tag{
    color: #555;
    border-bottom: 3rpx solid transparent;
    padding: 0 12rpx;
  }
  .tag_active{
    color: #306FF4;
    border-bottom: 3rpx solid #306FF4; 
    padding: 0 12rpx;
    transition: all 0.5s;
  }
  .old_customer{
    background: #fff;
  }
  .option_box{
    padding: 0 30rpx;    
  }
  .option{
    display: flex;
    height: 88rpx;
    align-items: center;
    border-bottom: 1rpx solid #ddd;
  }
  .option_label{
    flex: 1;
    color: #555;
  }
  .right_icon{
    width: 24rpx;
    height: 24rpx;
    margin-left: 25rpx;
  }
  .option_sele{
    color: #ccc;
  }
  .tips{
    font-size: 24rpx;
    color: #F5A623;
    margin-top: 35rpx;
    padding-left: 30rpx;
  }
  .next_btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 30rpx;
    color: #fff;
    line-height: 98rpx;
    background: #306FF4; 
    border-radius: 0;
  }
  .option_input{
    text-align: right;
  }
  .new_customer{
    background: #fff;
  }
</style>
