<template>
  <div class="container">
    <div class="amount">
      <div>
        <p>在投本金(美元)</p>
        <p>3,300.00</p>
      </div>
      <div>
        <p>累计投资(美元)</p>
        <p>3,300.00</p>
      </div>
      <div>
        <p>累计收益(美元)</p>
        <p>3,300.00</p>
      </div>
    </div>
    <div class="state">
      <div :class="{actived: activedIndex === 0}" @click="activedIndex = 0">
        <p>投资中</p>
      </div>
      <div :class="{actived: activedIndex === 1}" @click="activedIndex = 1">
        <p>待成交</p>
      </div>
      <div :class="{actived: activedIndex === 2}" @click="activedIndex = 2">
        <p>已结束</p>
      </div>
    </div>
    <ul class="product">
      <li class="product_item" v-for="i in 5" :key="i" @click="toPage({url: '/pages/finance_details/main', data: {orderId: index}})">
        <h2 class="product_item_title">独角兽股权</h2>
        <p>
          <span class="product_item_time">2017-11-26</span>
          <span class="product_item_status">待入金</span>
        </p>
        <div class="product_item_info">
          <div>
            <p>$200,000.00</p>
            <span>认购金额</span>
          </div>
          <div>
            <p>上市后180天</p>
            <span>到期时间</span>
          </div>
          <div>
            <p>450.34</p>
            <span>已回收益</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        title: '金融资产',
        activedIndex: 0,
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    font-size: 24rpx;
  }
  .amount {
    @include size(100%, 148rpx);
    @include flex();
    background: $mainColor;
    color: #fff;
    text-align: center;
    line-height: 1.6;
    div {
      flex: 1;
      &:nth-child(2) {
        border: 1rpx solid #fff;
        border-top: none;
        border-bottom: none;
      }
    }
  }
  .state {
    @include size(100%, 110rpx);
    @include flex();
    position: sticky;
    top: 0;
    border-top: 1rpx solid $borderColor;
    border-bottom: 1rpx solid $backgroundColor;
    background: #fff;
    color: $deepColor;
    align-items: stretch;
    div {
      flex: 1;
      text-align: center;
      @include flex();
      align-items: stretch;
      p {
        display: inline-flex;
        align-items: center;
        padding: 10rpx;
        flex-shrink: 1;
        border-bottom: 4rpx solid transparent;
      }
      &.actived {
        color: $mainColor;
        p {
          border-bottom: 4rpx solid $mainColor;
        }
      }
    }
  }
  .product {
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
        color: red;
      }
      &_info {
        @include flex();
        @include size(100%, 177rpx);
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
    }
  }
</style>
