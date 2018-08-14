<template>
  <div class="container">
    <ul class="insurance">
      <li class="insurance_item" v-for="(item, index) in dataList" :key="index" @click="toPage({url: '/pages/insurance_details/main', data: {orderNumber: item.order_number}})">
        <!--<h2 class="insurance_item_title"><b>【重疾险】</b>友邦-加裕智倍保-18</h2>-->
        <h2 class="insurance_item_title">{{item.finance_name}}</h2>
        <p>
          <span class="insurance_item_time">{{item.created_at}}</span>
          <span class="insurance_item_status">{{item.order_status_desc}}</span>
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
            <p>{{item.invest_amount}}</p>
            <span>保额</span>
          </div>
        </div>
        <div class="insurance_item_notes" v-if="index < 2">
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
        dataList: [],
        userInfo: this.$config.getUserInfo(),
      }
    },
    onLoad () {
      this.getData()
    },
    methods: {
      async getData (status = 'all') {
        try {
          let result = await this.$http.get('/big_bend/clb/order/query_list', {
            unitive_advisor_id: this.userInfo.userId,
            order_type: 3,
            order_status: status,
            order_number: '',
            time_begin: this.format(new Date(new Date().setMonth(0, 1)), 'yyyy-MM-dd'),
            time_end: this.format(new Date(), 'yyyy-MM-dd'),
            timestamp: this.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
          })
          this.dataList = result.global_order_resp_vos
        } catch (e) {

        }
      },
    },
    components: {
    },
  }
</script>

<style lang="scss" scoped>
  .insurance {
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
