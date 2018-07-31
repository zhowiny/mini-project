<template>
  <div class="container">
    <wx-steps :active="active" :steps="steps"/>
    <div class="order_info">
      <div class="order_info_title"><span></span>订单信息</div>
      <ul class="order_info_content">
        <li>
          <span>订单信息</span>
          <span>123456789456</span>
        </li>
        <li>
          <span>产品名称</span>
          <span>东南亚消费信贷基金</span>
        </li>
        <li>
          <span>投资时间</span>
          <span>2018-6-23 9:11</span>
        </li>
        <li>
          <span>投资金额</span>
          <span>$200,000.00</span>
        </li>
        <li>
          <span>起息日</span>
          <span>2017-7-16</span>
        </li>
        <li>
          <span>投资期限</span>
          <span>12个月</span>
        </li>
        <li>
          <span>到期时间</span>
          <span>2018-7-27</span>
        </li>
        <li>
          <span>收益率</span>
          <span>预期8%</span>
        </li>
        <li>
          <span>收益返还方式</span>
          <span>月付利息</span>
        </li>
      </ul>
    </div>
    <ul class="other">
      <li class="other_item" @click="toPage({url: '/pages/file_page/main', data: {orderId: 1}})">
        <image mode="aspectFit" src="/images/icon_file.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">投资文件</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>
      <li class="other_item" @click="toPage({url: '/pages/order_investment_report/main', data: {orderId: 2}})">
        <image mode="aspectFit" src="/images/icon_report1.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">投资报告</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>
      <li class="other_item" @click="toPage({url: '/pages/order_reimbursement_record/main', data: {orderId: 3}})">
        <image mode="aspectFit" src="/images/icon_record.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">回款记录</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>
    </ul>
  </div>
</template>

<script>
  import wxSteps from '@/components/steps'
  export default {
    data () {
      return {
        title: '金融订单详情',
        active: 3,
        steps: [
          {title: '预约中', time: '2017-1-21 9:00'},
          {title: '申请合同', time: '2017-1-21 9:00'},
          {title: '待入金', time: '2017-1-21 9:00'},
          {title: '已入金', time: '2017-1-21 9:00'},
        ],
      }
    },
    created () {
    },
    methods: {
    },
    components: {
      wxSteps
    },
  }
</script>

<style lang="scss" scoped>
  .order_info {
    @include size(100%, 686rpx);
    display: flex;
    flex-direction: column;
    margin: $middle-space 0;
    padding: 0 $middle-space;
    background: #fff;
    font-size: 30rpx;
    &_title {
      @include flex(flex-start);
      font-size: 32rpx;
      height: 80rpx;
      padding: $middle-space 0;
      border-bottom: 1rpx solid $borderColor;
      span {
        display: inline-block;
        height: 100%;
        width: 8rpx;
        background: $mainColor;
        margin-right: 10rpx;
      }
    }
    &_content {
      padding: $small-space 0;
      flex:1;
      @include flex(space-between, space-between);
      flex-direction:column;
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
      @include size(100%, 100rpx);
      display: flex;
      align-items: center;
      border-bottom: 1rpx solid $backgroundColor;
      &_title {
        flex: 1;
        padding: $middle-space;
        font-size: 30rpx;
      }
    }
  }
</style>
