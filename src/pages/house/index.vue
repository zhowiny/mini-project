<template>
  <div class="container">
    <ul class="house">
      <li class="house_item" v-for="(item, index) in orderList" :key="index" @click="toPage({url: '/pages/house_details/main', data: {orderNumber: item.order_number}})">
        <h2 class="house_item_title">{{item.finance_name}}</h2>
        <p>
          <span class="house_item_time">{{item.created_at}}</span>
          <span class="house_item_status">{{item.order_status_desc}}</span>
        </p>
        <div class="house_item_info">
          <div>
            <p>{{item.invest_amount}}</p>
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
        <!--<div class="house_item_notes" v-if="index < 2">
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
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        title: '海外房产',
        dataList: [],
      }
    },
    computed: {
      ...mapGetters(['orderList', 'userInfo']),
    },
    onLoad () {
      this.getData()
    },
    methods: {
      ...mapActions(['getOrderList']),
      getData (status = 'all') {
        this.getOrderList({
          unitive_advisor_id: this.userInfo.userId,
          order_type: 2,
          order_status: status,
          order_number: '',
          time_begin: this.format(new Date(new Date().setMonth(0, 1)), 'yyyy-MM-dd'),
          time_end: this.format(new Date(), 'yyyy-MM-dd'),
          timestamp: this.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        })
      },
    },
    components: {
    },
  }
</script>

<style lang="scss" scoped>
  .house {
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
