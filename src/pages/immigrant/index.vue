<template>
  <div class="container">
    <ul class="immigrant">
      <li class="immigrant_item" v-for="i in 5" :key="i" @click="toPage({url: '/pages/immigrant_details/main', data: {orderId: index}})">
        <h2 class="immigrant_item_title">马耳他护照</h2>
        <p>
          <span class="immigrant_item_time">2017-11-26</span>
          <span class="immigrant_item_status">办理中</span>
        </p>
        <div class="immigrant_item_info">
          <div>
            <p>里斯</p>
            <span>目的国家</span>
          </div>
          <div>
            <p>人民币</p>
            <span>投资币种</span>
          </div>
          <div>
            <p>3-6个月</p>
            <span>办理周期</span>
          </div>
        </div>
        <!--<div class="immigrant_item_notes" v-if="i < 2">
          <div>
            <p>下期付款金额</p>
            <span>140,000.00泰铢</span>
          </div>
          <div>
            <p>下期付款日</p>
            <span>2019-3-14</span>
          </div>
        </div>-->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '移民项目',
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
  .immigrant {
    &_item {
      min-height: 310px;
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
        font-size: 26px;
      }
      &_title {
        font-size: 36px;
      }
      &_status {
        color: $mainColor;
      }
      &_info {
        @include flex();
        @include size(100%, 177px);
        padding: $middle-space;
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
