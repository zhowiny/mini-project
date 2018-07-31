<template>
  <div class="container">
    <wx-steps :active="active" :steps="steps"/>
    <div class="order_info">
      <div class="order_info_title"><span></span>订单信息</div>
      <ul class="order_info_content">
        <li>
          <span>合同编号</span>
          <span>123456789456</span>
        </li>
        <li>
          <span>生效日期</span>
          <span>2018-6-23</span>
        </li>
        <li>
          <span>产品类型</span>
          <span>重疾险</span>
        </li>
        <li>
          <span>产品名称</span>
          <span>加裕智倍安保-18-年缴</span>
        </li>
        <li>
          <span>投保人</span>
          <span>张三</span>
        </li>
        <li>
          <span>受保人</span>
          <span>李四</span>
        </li>
        <li>
          <span>保障期限</span>
          <span>终身</span>
        </li>
        <li>
          <span>保额</span>
          <span>100,000美元</span>
        </li>
      </ul>
    </div>
    <div class="order_info renewal_insurance">
      <div class="order_info_title"><span></span>续保信息</div>
      <ul class="order_info_content">
        <li >
          <span>下期保费到期日</span>
          <span style="color: red">2019-7-23</span>
        </li>
        <li >
          <span>续保保费</span>
          <span style="color: red">4669美元</span>
        </li>
        <li >
          <span>账户余额</span>
          <span>0.00</span>
        </li>
        <li >
          <span>回馈余额</span>
          <span>0.00</span>
        </li>
        <li >
          <span>客户编号</span>
          <span>65412</span>
        </li>
      </ul>
    </div>
    <div class="order_info additional">
      <div class="order_info_title"><span></span>附加险信息</div>
      <ul class="order_info_content">
        <li >
          <span>附加险信息</span>
          <span>保障期限</span>
          <span>保额</span>
        </li>
        <li >
          <span>Vitality健康程式</span>
          <span>XXX附加险</span>
          <span>10,000美元</span>
        </li>
        <li >
          <span>XXX附加险</span>
          <span>每年续保</span>
          <span>- -</span>
        </li>
      </ul>
    </div>
    <div class="order_info user">
      <div class="order_info_title"><span></span>订单信息</div>
      <ul class="order_info_content">
        <li>
          <span>受益人姓名</span>
          <span>与受保人关系</span>
          <span>分配比例</span>
        </li>
        <li>
          <span>张三</span>
          <span>父子</span>
          <span>50%</span>
        </li>
        <li>
          <span>李四</span>
          <span>夫妻</span>
          <span>50%</span>
        </li>
      </ul>
    </div>
    <ul class="other">
      <li class="other_item" @click="toPage({url: '/pages/file_page/main', data: {orderId: 1}})">
        <image mode="aspectFit" src="/images/icon_file.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">投资文件</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>
      <li class="other_item" @click="toPage({url: '/pages/after_sale/main', data: {orderId: 2}})">
        <image mode="aspectFit" src="/images/icon_after_sale_1.png" style="width: 50rpx;height:50rpx"></image>
        <span class="other_item_title">售后申请记录</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </li>
      <!--<li class="other_item" @click="toPage({url: '/pages/order_reimbursement_record/main', data: {orderId: 3}})">
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
        title: '海外保险订单详情',
        active: 3,
        steps: [
          {title: '预约中'},
          {title: '已签单'},
          {title: '批核中'},
          {title: '保单生效'},
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
    // @include size(100%, 686rpx);
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
  .additional, .user {
    li:first-child {
      color: $lightColor;
    }
  }
</style>
