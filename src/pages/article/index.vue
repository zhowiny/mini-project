<template>
  <div class="container">
    <div class="article">
      <div class="article_title">
        <h2>中国式银行理财亡于2018年</h2>
        <p>2小时前 | 阅读量: 342</p>
      </div>
      <div class="article_content">
        <p>根据相关机构要求，美信金融只向特定的合格投资者宣传推介先关产品，如您有意在美信吉荣平台进行投资，即“需要您选择下方关于合格投资者认定的标准，且需要您的个人净资产超过100万美元”，请您仔细阅读并选择相关问题进行合格投资者认定，方可进行产品投资；</p>
        <p>根据相关机构要求，美信金融只向特定的合格投资者宣传推介先关产品，如您有意在美信吉荣平台进行投资，即“需要您选择下方关于合格投资者认定的标准，且需要您的个人净资产超过100万美元”，请您仔细阅读并选择相关问题进行合格投资者认定，方可进行产品投资；根据相关机构要求，美信金融只向特定的合格投资者宣传推介先关产品，如您有意在美信吉荣平台进行投资，即“需要您选择下方关于合格投资者认定的标准，且需要您的个人净资产超过100万美元”，请您仔细阅读并选择相关问题进行合格投资者认定，方可进行产品投资；</p>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend_title">
        <h2>产品推荐</h2>
        <span>查看详情</span>
      </div>
      <div class="recommend_content hidden">
        <div>
          <span>15%</span>
          <p>预计年化</p>
        </div>
        <div>
          <span>三个月</span>
          <p>投资期限</p>
        </div>
        <div>
          <span>2019-2-12</span>
          <p>截止日期</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '文章详情',
      }
    },
  }
</script>
<style lang="scss" scoped>
  .container {
    border-top:1rpx solid $borderColor;
  }
  .article {
    background:#fff;
    padding: $big-space $middle-space 100rpx $middle-space;
    &_title {
      padding: $middle-space 0;
      font-size: 30px;
      h2 {
        padding-bottom: $small-space;
        font-weight: bold;
      }
      p {
        font-size: 24px;
        color: $lightColor;
      }
    }
    &_content {
      font-size: 26px;
      line-height:1.6em;
    }
  }
  .recommend {
    margin-top: $middle-space;
    background: #fff;
    padding: $middle-space;
    &_title {
      @include flex(space-between);
      padding-bottom: $middle-space;
      border-bottom: 1px solid $borderColor;
      h2 {
        font-size: 30px;
        color: transparentize($deepColor, .6);
      }
      span {
        @include flex();
        padding: $small-space $middle-space;
        color: $mainColor;
        border: 1px solid $mainColor;
        border-radius: 5px;
      }
    }
    &_content {
      @include flex();
      padding: $big-space 0;
      text-align: center;
      color: $lightColor;
      >div {
        flex: 1;
      }
      span {
        margin-bottom: $middle-space;
        text-shadow:0 0 0 $deepColor;
        color:transparent;
        transition: text-shadow .5s;
      }
      &.hidden {
        span {
          text-shadow:0 0 15px $deepColor;
        }
      }
    }
  }
</style>
