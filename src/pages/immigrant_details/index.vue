<template>
  <div class="container">
    <wx-steps :active="active" :steps="steps"/>
    <div class="order_info">
      <div class="order_info_title"><span></span>订单信息</div>
      <ul class="order_info_content">
        <li>
          <span>订单编号</span>
          <span>123456789456</span>
        </li>
        <li>
          <span>产品名称</span>
          <span>马耳他永居移民项目</span>
        </li>
        <li>
          <span>成交时间</span>
          <span>2018-6-23 9:11</span>
        </li>
        <li>
          <span>投资金额</span>
          <span>200,000.00泰铢</span>
        </li>
      </ul>
    </div>
    <div class="renewal_insurance">
      <div class="renewal_insurance_title"><span></span>续保信息</div>
      <ul class="renewal_insurance_content">
        <li >
          <span>首付(30%)</span>
          <span>60,000.00泰铢</span>
          <span>2018-7-15</span>
          <span>已付款</span>
        </li>
        <li class="unpaid">
          <span>尾款(70%)</span>
          <span>140,000.00泰铢</span>
          <span>2019-11-20</span>
          <span>未付款</span>
        </li>
      </ul>
    </div>
    <ul class="other">
      <li class="other_item" @click="toPage({url: '/pages/file_page/main', data: {orderId: 1}})">
        <image mode="aspectFit" src="/images/icon_file.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">投资文件</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>
      <!--<li class="other_item" @click="toPage({url: '/pages/investment_report/main', data: {orderId: 2}})">
        <image mode="aspectFit" src="/images/icon_report1.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">投资报告</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>
      <li class="other_item" @click="toPage({url: '/pages/order_reimbursement_record/main', data: {orderId: 3}})">
        <image mode="aspectFit" src="/images/icon_record.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">回款记录</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>-->
    </ul>
  </div>
</template>

<script>
  import wxSteps from '@/components/steps'
  export default {
    data () {
      return {
        title: '移民护照订单详情',
        active: 3,
        steps: [
          {title: '预约中'},
          {title: '申请合同'},
          {title: '待入金'},
          {title: '已入金'},
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
    // @include size(100%, 686px);
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
  .renewal_insurance {
    @extend  .order_info;
    &_title {
      @extend .order_info_title;
    }
    &_content {
      @extend .order_info_content;
      padding: 0;
      color: $lightColor;
      li {
        border-bottom: 1px solid $borderColor;
        height: 100px;
      }
      .unpaid {
        color: $deepColor;
      }
    }
  }
</style>
