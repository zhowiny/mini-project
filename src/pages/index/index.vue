<template>
  <div class="container">
    <div class="amount">
      <img @click="toPage('/pages/account_chart/main')"
             mode="aspectFit" src="/images/icon_amount.png"
             class="icon" />
      <div>
        <span>在投总额(美元)</span>
        <h1>123,456.00</h1>
      </div>
    </div>
    <div class="product_container">
      <div class="product">
        <div class="product_item" v-for="(item,index) in productItemImages" :key="index" @click="toPage(item.path)">
          <div class="product_item_icon">
            <img mode="aspectFit" :src="item.src" style="width: 68rpx;height:68rpx" />
          </div>
          <div>
            <span class="product_item_title">{{item.title}}</span>
            <span class="product_item_amount">$3,000.00</span>
          </div>
        </div>
      </div>
    </div>
   <!-- <div class="product">
      <div class="product_item" v-for="(item,index) in productItemImages" :key="index" @click="toPage(item.path)">
        <img mode="aspectFit" :src="item.src" style="width: 44rpx;height:44rpx" />
        <span class="product_item_title">{{item.title}}</span>
        <span class="product_item_amount">$3,000.00</span>
        <img mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"/>
      </div>
    </div>-->
    <div class="toolbar">
      <div class="toolbar_item" @click="toPage('/pages/reimbursement_record/main')">
        <wx-badge :value="3" isHidden position="top:15rpx;right:30rpx">
          <img mode="aspectFit" src="/images/icon_calendar.png" style="width: 102rpx;height:105rpx" />
        </wx-badge>
        <span>回款日历</span>
      </div>
      <div class="toolbar_item" @click="toPage('/pages/investment_report/main')">
        <wx-badge :value="3" position="top:15rpx;right:30rpx">
          <img mode="aspectFit" src="/images/icon_report.png" style="width: 102rpx;height:105rpx" />
        </wx-badge>
        <span>投资报告</span>
      </div>
      <div class="toolbar_item" @click="toPage('/pages/after_sale/main')">
        <wx-badge :value="3" position="top:15rpx;right:30rpx">
          <img mode="aspectFit" src="/images/icon_after_sale.png" style="width: 102rpx;height:105rpx" />
        </wx-badge>
        <span>售后申请</span>
      </div>
    </div>
    <div class="clause">
      <div class="btn" @click="concat">
        <img mode="aspectFit" src="/images/icon_phone.png" style="width: 34rpx;height:30rpx" />
        <span>联系我的小i投资顾问:  小小明</span>
      </div>
      <p>由美信联邦提供投资者服务平台:<a>《平台披露》</a></p>
      <p>客服电话:<a>400-3333-3333</a></p>
    </div>
  </div>
</template>

<script>
  import wxBadge from '@/components/badge'
  import store from '../../store/index'

  export default {
    data () {
      return {
        title: '我的在投',
        productItemImages: [
          {
            src: '/images/icon_finance.png',
            title: '金融资产',
            path: '/pages/finance/main',
          },
          {
            src: '/images/icon_house.png',
            title: '海外房产',
            path: '/pages/house/main',
          },
          {
            src: '/images/icon_insurance.png',
            title: '海外保险',
            path: '/pages/insurance/main',
          },
          {
            src: '/images/icon_immigrant.png',
            title: '移民护照',
            path: '/pages/immigrant/main',
          },
        ]
      }
    },
    computed: {
      userInfo () {
        return store.state.userInfo
      },
    },
    components: {
      wxBadge,
    },
    methods: {
      bindViewTap () {
        const url = '../logs/main'
        wx.navigateTo({url})
      },
      concat () {
        wx.makePhoneCall({
          phoneNumber: '18770009131'
        })
      }
    },
    created () {
    },
  }
</script>
<style scoped lang="scss">
  .container {
    @include size(100%);
    .amount {
      background: linear-gradient($mainColor, lighten($mainColor, 10%));
      @include size(100%, 260px);
      color: #fff;
      position: relative;
      padding: $middle-space;
      text-align: center;
      letter-spacing: 4px;
      @include flex();
      > div {
        position: relative;
        top: -$small-space;
      }
      span {
        font-size: 22px;
      }
      h1 {
        font-size: 64px;
      }
    }
    .icon {
      position: absolute;
      right: 20px;
      top: 20px;
      @include size(40px);
    }

    /*.product {
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
        &_amount {
          padding: $middle-space;
          font-size: 28px;
        }
      }
    }*/
    .product_container {
      padding:0 $small-space * 3;
      background: #fff;
      height: 400px;
      .product {
        position: relative;
        top: -45px;
        @include flex();
        flex-wrap: wrap;
        @include size(100%);
        border-radius: 10px;
        box-shadow: 0 0 20px -5px $mainColor;
        background: #fff;
        &_item {
          width: 50%;
          @include flex(flex-start);
          font-size: 30px;
          &_icon {
            padding: 0 $big-space;
            @include flex();
          }
          span {
            display: block;
          }
          &_amount {
            font-size: 28px;
            color: lighten($deepColor, 30%);
          }
        }
      }
    }
    .toolbar {
      display: flex;
      justify-content: space-around;
      background: #fff;
      padding-bottom: $middle-space;
      @include size(100%, 190px);
      &_item {
        /*display: flex;*/
        @include flex(space-around);
        flex-direction: column;
        font-size: 30px;
      }
    }
    .clause {
      font-size: 24px;
      @include flex();
      flex-direction: column;
      padding: 25px;
      line-height: 1.5;
      color: $lightColor;
      p {
        @include flex();
      }
      a {
        margin-left: $middle-space;
        color: $mainColor;
      }
      .btn {
        @include size(500px, 80px);
        @include flex();
        color: $mainColor;
        background: #fff;
        border: 2px solid $mainColor;
        border-radius: 40px;
        font-size: 26px;
        margin-top: $middle-space;
        margin-bottom: $big-space;
        span {
          margin-left: $small-space;
        }
      }
    }
  }
</style>

