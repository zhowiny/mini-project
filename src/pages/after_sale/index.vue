<template>
  <div class="container">
    <ul class="product">
      <li class="product_item" v-for="i in 5" :key="i" @click="toPage({url: '/pages/finance_details/main', data: {orderId: index}})">
        <h2 class="product_item_title">更改收益人</h2>
        <p>
          <span class="product_item_time">2017-11-26</span>
          <span class="product_item_status">办理中</span>
        </p>
        <div class="product_item_info">
          <div>
            <p>合同编号</p>
            <span>G123123123123</span>
          </div>
          <div>
            <p>产品信息</p>
            <span>加裕智倍安保-18-年缴</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="btn" @click="tips">申请售后</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '售后申请',
      }
    },
    created () {
    },
    methods: {
      tips () {
        console.log(this.$style)
        wx.showModal({
          title: '提示',
          content: '售后申请功能尚未上线，请联系您的理财师线下办理！',
          // showCancel: false,
          confirmText: '立即电话',
          confirmColor: '#2d97fb',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.makePhoneCall({
                phoneNumber: '18770009131'
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    },
    components: {
    },
  }
</script>
<style lang="scss" scoped>
  .product {
    padding-bottom: 140rpx;
    &_item {
      @include size(100%, 310rpx);
      margin-top: $middle-space;
      padding: $middle-space;
      background: #fff;
      >p {
        @include flex(space-between);
        padding: $middle-space 0;
        color: $lightColor;
        font-size: 26rpx;
      }
      &_title {
        font-size: 36rpx;
      }
      &_status {
        color: $mainColor;
      }
      &_info {
        @include size(100%, 170rpx);
        @include flex(space-around, stretch);
        padding: $middle-space 0;
        flex-direction: column;
        line-height: 1.6;
        border-top: 2rpx solid $borderColor;
        div {
          @include flex(space-between);
          font-size: 30rpx;
        }
      }
    }
  }
  .btn {
    @include size(480rpx, 100rpx);
    @include flex();
    border: 2rpx solid $mainColor;
    border-radius: 50rpx;
    font-size: 36rpx;
    color: $mainColor;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
