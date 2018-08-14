<template>
  <div class="container">
    <wx-steps :active="step" :steps="steps"/>
    <div class="order_info">
      <div class="order_info_title"><span></span>订单信息</div>
      <ul class="order_info_content">
        <li>
          <span>订单信息</span>
          <span>{{detail.order_number}}</span>
        </li>
        <li>
          <span>产品名称</span>
          <span>{{detail.product_name}}</span>
        </li>
        <li>
          <span>投资时间</span>
          <span>{{detail.created_at}}</span>
        </li>
        <li>
          <span>投资金额</span>
          <span>{{detail.invest_amount}}</span>
        </li>
        <li>
          <span>起息日</span>
          <span>{{detail.start_interest_day}}</span>
        </li>
        <li>
          <span>投资期限</span>
          <span>{{detail.invest_term}}</span>
        </li>
        <li>
          <span>到期时间</span>
          <span>{{detail.end_sale_time}}</span>
        </li>
        <li>
          <span>收益率</span>
          <span>{{detail.return_rate}}</span>
        </li>
        <li>
          <span>收益返还方式</span>
          <span>月付利息</span>
        </li>
      </ul>
    </div>
    <ul class="other">
      <li class="other_item" @click="toPage({url: '/pages/file_page/main', data: {orderId: 1}})">
        <img mode="aspectFit" src="/images/icon_file.png" style="width: 50rpx;height:50rpx" />
        <span class="other_item_title">投资文件</span>
        <img mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx" />
      </li>
      <li class="other_item" @click="toPage({url: '/pages/order_investment_report/main', data: {orderId: 2}})">
        <img mode="aspectFit" src="/images/icon_report1.png" style="width: 50rpx;height:50rpx" />
        <span class="other_item_title">投资报告</span>
        <img mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"/>
      </li>
      <li class="other_item" @click="toPage({url: '/pages/order_reimbursement_record/main', data: {orderId: 3}})">
        <img mode="aspectFit" src="/images/icon_record.png" style="width: 50rpx;height:50rpx"/>
        <span class="other_item_title">回款记录</span>
        <img mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import wxSteps from '@/components/steps'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        title: '金融订单详情',
        orderNumber: '',
        step: 0,
        steps: [
          {title: '预约中'},
          {title: '申请合同'},
          {title: '待入金'},
          {title: '已入金'},
        ],
      }
    },
    computed: {
      ...mapGetters({
        detail: 'orderDetail',
        userInfo: 'userInfo'
      }),
    },
    async onLoad () {
      this.orderNumber = this.$mp.query.orderNumber
      await this.getOrderDetail({
        unitive_advisor_id: this.userInfo.userId,
        order_number: this.orderNumber,
        timestamp: this.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
      })
      this.detail.end_sale_time = this.format(new Date(this.detail.end_sale_time), 'yyyy-MM-dd')
      switch (this.detail.order_status_desc) {
        case '预约':
          this.step = 1
          break
        case '合同申请':
          this.step = 2
          break
        case '待入金':
          this.step = 3
          break
        case '已入金':
          this.step = 4
          break
        default:
          this.step = 0
          break
      }
    },
    methods: {
      ...mapActions(['getOrderDetail']),
    },
    components: {
      wxSteps
    },
  }
</script>

<style lang="scss" scoped>
  .order_info {
    @include size(100%, 686px);
    display: flex;
    flex-direction: column;
    margin: $middle-space 0;
    padding: 0 $middle-space;
    background: #fff;
    font-size: 30px;
    &_title {
      @include flex(flex-start);
      font-size: 32px;
      height: 80px;
      padding: $middle-space 0;
      border-bottom: 1px solid $borderColor;
      span {
        display: inline-block;
        height: 100%;
        width: 8px;
        background: $mainColor;
        margin-right: 10px;
      }
    }
    &_content {
      padding: $small-space 0;
      flex: 1;
      @include flex(space-between, space-between);
      flex-direction: column;
      li {
        @include flex(space-between);
        padding: $small-space 0;
      }
    }
  }

  .other {
    margin-top: $middle-space;
    background: #fff;
    &_item {
      padding: $middle-space;
      @include size(100%, 100px);
      display: flex;
      align-items: center;
      border-bottom: 1px solid $backgroundColor;
      &_title {
        flex: 1;
        padding: $middle-space;
        font-size: 30px;
      }
    }
  }
</style>
