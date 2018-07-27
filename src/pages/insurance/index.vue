<template>
  <div class="container">
    <ul class="insurance">
      <li class="insurance_item" v-for="i in 5" :key="i" @click="toPage({url: '/pages/insurance_details/main', data: {orderId: index}})">
        <h2 class="insurance_item_title"><b>【重疾险】</b>友邦-加裕智倍保-18</h2>
        <p>
          <span class="insurance_item_time">2017-11-26</span>
          <span class="insurance_item_status">保障中</span>
        </p>
        <div class="insurance_item_info">
          <div>
            <p>李四</p>
            <span>受保人</span>
          </div>
          <div>
            <p>终身</p>
            <span>保障年期</span>
          </div>
          <div>
            <p>1000,000美元</p>
            <span>保额</span>
          </div>
        </div>
        <div class="insurance_item_notes" v-if="i < 2">
          <div>
            <p>下期应缴保费</p>
            <span>140,000.00美元</span>
          </div>
          <div>
            <p>下期保费到期日</p>
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
        title: '海外保险',
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
  .insurance {
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
        @include flex(flex-start);
        b {
          font-weight: bold;
        }
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
