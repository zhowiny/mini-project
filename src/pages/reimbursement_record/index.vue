<template>
  <div class="container">
    <wx-calendar ref="calendar" @selected="handleDate" :date="date" :data="data" connector="-"/>
    <ul class="product">
      <li class="product_item" v-for="i in 5" :key="i">
        <div class="product_item_title">
          <div>
            <h2>东南亚消费信贷基金</h2>
            <span class="product_item_time">2017-11-26</span>
          </div>
          <p>
            <span class="product_item_status">待入金</span>
            <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
          </p>
        </div>
        <div class="product_item_info">
          <div>
            <p>$200,000.00</p>
            <span>认购金额</span>
          </div>
          <div>
            <p>2018/7/16</p>
            <span>到期时间</span>
          </div>
          <div>
            <p style="color: orange">450.34</p>
            <span>已回收益</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import wxCalendar from '@/components/calendar'
  export default {
    components: {
      wxCalendar
    },
    data () {
      return {
        title: '回款日历',
        data: [],
        date: '',
      }
    },
    created () {
      setTimeout(() => {
        this.data = ['2018/7/30', '2018/8/4', '2018/7/16', '2018/7/17']
        this.date = '2015/05/21'
      }, 5000)
    },
    methods: {
      handleDate (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    font-size: 24px;
  }
  .product {
    &_item {
      @include size(100%, 310px);
      margin-top: $middle-space;
      padding: $middle-space;
      background: #fff;
      >p {
        @include flex(space-between);
        padding: $middle-space 0;
        color: $lightColor;
        font-size: 26px;
      }
      &_title {
        @include flex(space-between);
        margin-bottom: $middle-space;
        h2 {
          font-size: 36px;
        }
        p {
          @include flex()
        }
      }
      &_status {
        color: $mainColor;
        margin-right: $middle-space;
      }
      &_info {
        @include flex();
        @include size(100%, 177px);
        text-align: center;
        line-height: 1.6;
        border-top: 1px solid $borderColor;
        div {
          flex: 1;
          font-size: 30px;
        }
        span {
          color: $lightColor;
          font-size: 26px;
        }
      }
    }
  }
</style>
