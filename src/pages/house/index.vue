<template>
  <div class="container">
    <ul class="house">
      <li class="house_item" v-for="i in 5" :key="i" @click="toPage({url: '/pages/overseas_house_details/main', data: {orderId: index}})">
        <h2 class="house_item_title">曼谷双地铁公寓</h2>
        <p>
          <span class="house_item_time">2017-11-26</span>
          <span class="house_item_status">投资中</span>
        </p>
        <div class="house_item_info">
          <div>
            <p>200,000.00泰铢</p>
            <span>成交金额</span>
          </div>
          <div>
            <p>2019-12</p>
            <span>交房时间</span>
          </div>
          <div>
            <p>6B201</p>
            <span>房间号</span>
          </div>
        </div>
        <div class="house_item_notes" v-if="i < 2">
          <div>
            <p>下期付款金额</p>
            <span>140,000.00泰铢</span>
          </div>
          <div>
            <p>下期付款日</p>
            <span>2019-3-14</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '海外房产',
      }
    },
    created () {
    },
    methods: {
    },
    components: {
    },
  }
</script>

<style lang="scss" scoped>
  .house {
    &_item {
      min-height: 310rpx;
      margin-top: $middle-space;
      h2, p, div {
        background: #fff;
      }
      h2 {
        padding: $middle-space;
        padding-bottom: 0;
      }
      >p {
        @include flex(space-between);
        padding: $middle-space;
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
        @include flex();
        @include size(100%, 177rpx);
        padding: $middle-space;
        text-align: center;
        line-height: 1.6;
        border-top: 1rpx solid $borderColor;
        div {
          flex: 1;
          font-size: 30rpx;
        }
        span {
          color: $lightColor;
          font-size: 26rpx;
        }
      }
      &_notes {
        margin-top: $small-space;
        padding: $middle-space;
        @include flex(space-around, stretch);
        flex-direction: column;
        color: $lightColor;
        div {
          flex: 1;
          @include flex(space-between)
        }
        span {
          color: red;
        }
      }
    }
  }
</style>
