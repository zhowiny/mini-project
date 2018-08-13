<template>
  <div class="container">
    <div class="estate_info">
      <p class="estate_info_label">楼盘简介</p>
      <p class="estate_info_content">
        多通道抵达主路（Ladprao road、Phaholyothin road、Ratchadapisek road、Soi Ladprao 1、Soi Ladprao 15和Soi Phaholyothin 24）、
        区域内规建超大型超市功能区、规建中的BTS延长线绿色线与现有MRT汇合实现双轨交汇、
        步行可达当地人最爱的Central Ladprao商场及多个市政公园、泰国本地人最热衷的居住区域，多个泰国“央企”总部所在地、周边设有国际学校以及泰国大学。
      </p>
    </div>
    <div class="estate_detail_list">
      <div class="estate_option">
        <span class="option_name">项目名称</span>
        <span class="option_data">慕司国际公馆ATMOZ Ladprao 15</span>
      </div>
      <div class="estate_option">
        <span class="option_name">项目名称</span>
        <span class="option_data">慕司国际公馆ATMOZ Ladprao 15</span>
      </div>
      <div class="estate_option">
        <span class="option_name">项目户型</span>
        <div class="option_data">
          <p>慕司国际公馆ATMOZ Ladprao 15</p>
          <p>慕司国际公馆</p>
          <p>慕司国际公馆ATMOZ =</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  .container{

  }
  .estate_info{
    background: $contentcolor;
    margin-bottom: 36rpx;
  }
  .estate_info_label{
    font-size: $htmlsize;
    color: $lightColor;
    line-height: 88rpx;
    padding-left: 22rpx;
    border-bottom: 1rpx solid #ddd;
  }
  .estate_info_content{
    color: #666;
    font-size: 26rpx;
    line-height: 48rpx;
    padding: 32rpx 20rpx 43rpx;
  }
  .estate_detail_list{
    background: #fff;
    padding: 0 20rpx;
  }
  .estate_option{
    // height: 88px;
    @include flex(space-between,flex-start);
    font-size: 26px;
    border-bottom: 1rpx solid #e6e6e6;
    padding: 27px 0 24px;
  }
  .option_name{
    color: #555;
    // line-height: 88px;
  }
  .option_data{
    color: #969696;
  }
  .option_data p{
    text-align: right;
    line-height: 48rpx;
  }
</style>
