<template>
  <div class="product">
    <div class="product_title">
      <img src="/images/icon_placeholder.png" mode="aspectFit" style="width:100rpx;height:100rpx;">
      <h2>充裕未来</h2>
    </div>
    <div class="product_summary">
      <div>
        <p>重疾险</p>
        <span>险种</span>
      </div>
      <div>
        <p>10/18/25年</p>
        <span>供款期</span>
      </div>
      <div>
        <p>终身</p>
        <span>保障期限</span>
      </div>
    </div>
    <div class="product_company">
      <div>
        <img src="/images/icon_download.png" mode="aspectFit" style="width:50rpx;height:50rpx">
        <span>下载产品书</span>
      </div>
      <div>
        <img src="/images/icon_company.png" mode="aspectFit" style="width:50rpx;height:50rpx;">
        <span>友邦保险控股公司</span>
      </div>
    </div>
    <div class="product_highlight">
      <div>
        <img src="/images/icon_highlight.png" mode="aspectFit" style="width:52rpx;height:37rpx;">
        <span>投资亮点</span>
      </div>
      <ul>
        <li>保障疾病总数: <span>115</span></li>
        <li>保障严重疾病书: <span>58</span></li>
        <li>保障早起危疾数: <span>44</span></li>
        <li>大额保费折扣: <span>适用</span></li>
        <li>其他保障说明: <span>危疾豁免先缴付保费、父母身故豁免缴费保费保障、配偶身故免缴付保费保障</span></li>
      </ul>
    </div>
    <div class="product_detail">
      <ul class="product_tab">
        <li :class="{actived: activeIndex === 0}" @click="activeIndex = 0">相关资讯</li>
        <li :class="{actived: activeIndex === 1}" @click="activeIndex = 1">产品要素</li>
        <li :class="{actived: activeIndex === 2}" @click="activeIndex = 2">产品文件</li>
      </ul>
      <div class="product_tab_item information_list" :class="{actived: activeIndex === 0}">
        <div class="information_item" v-for="i in 5" :key="i">
          <img src="/images/icon_placeholder.png" mode="aspectFit" style="width:168rpx;height:128rpx;">
          <div>
            <h3>跌破6.75，人民币贬值创一年新低！内需是否再强刺激成焦点</h3>
            <span>2天前 | 阅读量: 1342</span>
          </div>
        </div>
      </div>
      <div class="product_tab_item product_points" :class="{actived: activeIndex === 1}">
        <div class="product_points_item">
          <h3>产品名称</h3>
          <p>充裕未来</p>
        </div>
        <div class="product_points_item">
          <h3>险种</h3>
          <p>重疾险</p>
        </div>
        <div class="product_points_item">
          <h3>缴费年期</h3>
          <p>5、10、15、20</p>
        </div>
        <div class="product_points_item">
          <h3>投保年龄</h3>
          <p>15-75岁</p>
        </div>
        <div class="product_points_item">
          <h3>保障期限</h3>
          <p>终身</p>
        </div>
      </div>
      <div class="product_tab_item product_files" :class="{actived: activeIndex === 2}">
        <h3>产品介绍文件</h3>
        <ul class="product_files_file">
          <li>产品单页</li>
          <li>产品书</li>
          <li>产品书</li>
          <li>产品书</li>
          <li>产品书</li>
        </ul>
      </div>
    </div>
    <div class="btn_concat">
      <img src="/images/icon_phone_white.png" mode="aspectFit" style="width: 32rpx;height: 32rpx;">
      <span>联系我的小i投资顾问</span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        title: '海外保险',
        activeIndex: 0,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .product {
    padding-top: 5px;
    &_title {
      @include flex(flex-start);
      margin-bottom: 5px;
      padding: $middle-space;
      background: #fff;
      h2 {
        font-size: 36px;
        margin-left: $middle-space;
      }
      img {
        background: $backgroundColor;
      }
    }
    &_summary {
      @include flex();
      padding: $big-space 0;
      margin-bottom: $small-space;
      background: #fff;
      >div {
        @include flex();
        flex-direction: column;
        flex: 1;
        span {
          padding-top: $middle-space;
          color: $lightColor;
        }
      }
    }
    &_company {
      @include flex(space-between);
      padding: $middle-space;
      margin-bottom: $middle-space;
      background: #fff;
      >div {
        @include size(333px, 100px);
        @include flex();
        background: $backgroundColor;
        color: $mainColor;
        border: 1px solid $mainColor;
        border-radius: 10px;
        span {
          margin-left: $middle-space;
        }
      }
    }
    &_highlight {
      background: #fff;
      padding: $middle-space;
      margin-bottom: $middle-space;
      >div {
        @include flex(flex-start);
        padding: $middle-space 0;
        font-size: 30px;
        border-bottom: 1px solid $borderColor;
        span {
          margin-left: $middle-space;
        }
      }
      li {
        line-height: 1.6em;
      }
    }
    &_detail {
      padding-bottom: 120px;
    }
    &_tab {
      width: 100%;
      @include flex();
      text-align: center;
      padding: $small-space;
      border-bottom: 1px solid $borderColor;
      background: #fff;
      > li {
        padding: $middle-space;
        flex: 1;
        font-size: 28px;
        transition: color .3s;
        &:not(:last-child) {
          border-right: 1px solid $borderColor;
        }
        &.actived {
          color: $mainColor;
        }
      }
      &_item {
        transition: transform .2s;
        transform: scaleY(0);
        transform-origin: top center;
        position: absolute;
        opacity: 0;
        &.actived {
          position: static;
          transform: scaleY(1);
          opacity: 1;
        }
      }
    }
    .information_item {
      background: #fff;
      @include flex();
      padding: $middle-space;
      border-bottom: 1px solid $borderColor;
      img {
        background: $backgroundColor;
      }
      >div {
        @include flex(space-between, flex-start);
        flex-direction: column;
        margin-left: $middle-space;
        line-height: 1.6;
        flex: 1;
        align-self: stretch;
        font-size: 22px;
        color: $lightColor;
        h3 {
          font-size: 26px;
          color: $deepColor;
        }
      }
    }
    &_points {
      padding-top: $small-space;
      &_item {
        padding: 0 $middle-space;
        background: #fff;
        margin-bottom: $small-space;
        h3 {
          border-bottom: 2px solid $borderColor;
        }
        h3, p {
          padding: $middle-space $big-space;
        }
      }
    }
    &_files {
      margin-top: $small-space;
      background: #fff;
      padding: 0 $middle-space;
      h3 {
        padding: $middle-space 0;
        border-bottom: 1px solid $borderColor;
      }
      &_file {
        padding: $small-space $big-space;
        color: $mainColor;
        font-size: 28px;
        li {
          padding: 5px 0;
        }
      }
    }

    .btn_concat {
      position: fixed;
      bottom: 0;
      @include size(100%, 100px);
      @include flex();
      color: #fff;
      background: $mainColor;
      font-size: 30px;
      img {
        margin-right: $middle-space;
      }
    }
  }
</style>
