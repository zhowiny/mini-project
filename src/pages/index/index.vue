<template>
  <div class="container" >
    <div class="amount">
      <image mode="aspectFit" src="/images/icon_amount.png" class="icon"></image>
      <div>
        <span>在投总额(美元)</span>
        <h1>123,456.00</h1>
      </div>
      <div>
        <span>累计收益(美元)</span>
        <h1>846.78</h1>
      </div>
    </div>
    <div class="product">
      <div class="product_item" v-for="(item,index) in productItemImages" :key="index" @click="toPage(item.path)">
        <image mode="aspectFit" :src="item.src" style="width: 44rpx;height:44rpx"></image>
        <span class="product_item_title">{{item.title}}</span>
        <span class="product_item_amount">$3,000.00</span>
        <image mode="aspectFit" src="/images/icon_arrow.png" style="width: 14rpx;height:24rpx"></image>
      </div>
    </div>
    <div class="toolbar">
      <div class="toolbar_item" >
        <wx-badge :value="3" isHidden position="top:15rpx;right:30rpx">
          <image mode="aspectFit" src="/images/icon_calendar.png" style="width: 102rpx;height:105rpx"></image>
        </wx-badge>
        <span>回款日历</span>
      </div>
      <div class="toolbar_item" >
        <wx-badge :value="3" position="top:15rpx;right:30rpx">
          <image mode="aspectFit" src="/images/icon_report.png" style="width: 102rpx;height:105rpx"></image>
        </wx-badge>
        <span>投资报告</span>
      </div>
      <div class="toolbar_item">
        <wx-badge :value="3" position="top:15rpx;right:30rpx">
          <image mode="aspectFit" src="/images/icon_after_sale.png" style="width: 102rpx;height:105rpx"></image>
        </wx-badge>
        <span>售后申请</span>
      </div>
    </div>
    <div class="clause">
      <p>由美信联邦提供投资者服务平台</p>
      <a @click="a">《平台披露》</a>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
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
          src: '/images/icon_insurance.png',
          title: '海外房产',
          path: '/pages/house/main',
        },
        {
          src: '/images/icon_house.png',
          title: '海外保险',
          path: '/pages/insurance/main',
        },
        {
          src: '/images/icon_immigrant.png',
          title: '移民护照',
          path: '',
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
    card,
    wxBadge,
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    // async a () {
    //   try {
    //     let result = await this.$http.post('/api/production/headerlist', {
    //       'bigClass': 'BX',
    //       'enabledFlag': 'Y',
    //       'page': 1,
    //       'pagesize': 10
    //     })
    //     console.log(result, 'success')
    //   } catch (e) {
    //     console.log(e, 'error')
    //   }
    // }
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
      @include size(100%, 304rpx);
      color: #fff;
      position: relative;
      padding: $middle-space;
      text-align: center;
      letter-spacing: 4rpx;
      span {
        font-size: 22rpx;
      }
      h1 {
        font-size: 64rpx;
      }
    }
    .icon {
      position: absolute;
      right: 20rpx;
      top: 20rpx;
      @include size(40rpx);
    }

    .product {
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
        &_amount {
          padding: $middle-space;
          font-size: 28rpx;
        }
      }
    }
    .toolbar {
      display: flex;
      justify-content:space-around;
      background:#fff;
      padding: $big-space 0;
      @include size(100%, 265rpx);
      &_item {
        /*display: flex;*/
        @include flex(space-around);
        flex-direction: column;
        font-size: 30rpx;
      }
    }
    .clause {
      font-size: 24rpx;
      @include flex();
      flex-direction: column;
      padding: 25rpx;
      line-height: 1.5;
      color: $lightColor;
      a {
        color: $mainColor;
      }
    }
  }
</style>
