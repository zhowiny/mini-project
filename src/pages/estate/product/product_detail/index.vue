<template>
  <div class="container">
    <swiper autoplay>
      <block v-for="(item,index) in bannerList" :key="index">
        <swiper-item>
          <img :src="item.url" class="banner_img" v-if="item.type == 1" />
          <video src="" class="banner_video" v-if="item.type == 2"></video>
          <image v-if="item.type == 2" src="/images/icon_video.png" class="video_icon"/>
          <image src="/images/icon_pic.png" class="pic_icon"/>
          <div class="banner_page">{{index + 1}}/{{bannerList.length}}</div>
        </swiper-item>
      </block>
    </swiper>
    <P class="product_title">慕司国际公馆ATMOZ Ladprao 15慕司国际公馆ATMOZ Ladprao 15慕司国际公馆ATMOZ Ladprao 15慕司国际公馆ATMOZ Ladprao 15</P>
    <div class="product_address">
      <img src="/images/icon_map.png" class="map_icon" />
      <span>泰国 · 曼谷</span>
      <div class="border_small">|</div>
      <div>佣金：<span class="commision">15%</span></div>
    </div>
    <div class="product_feature">
      <block v-for="(item,index) in featureList" :key="index">
        <div class="feature_li">
          <p class="amount">{{item.amount}}</p>
          <p class="feature_name">{{item.name}}</p>
        </div>
        <div class="border_big" v-if="index != featureList.length - 1"></div>
      </block>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      bannerList: [
        // {id: 1, url: 'https://file.meixinglobal.com/media/20180703/409c2f20-1da7-476b-a7c0-9060b0da0cbc.mp4', type: 2},
        {id: 2, url: 'https://doc.meixinglobal.com/docs/20180704/1530636659626/29/5.png', type: 1},
        {id: 3, url: 'https://doc.meixinglobal.com/docs/20180704/1530636623485/30/4.jpg', type: 1},
        {id: 4, url: 'https://doc.meixinglobal.com/docs/20180704/1530636670707/26/6.jpg', type: 1}
      ],
      featureList: [
        {name: '总价', amount: 52},
        {name: '总价总价', amount: 52},
        {name: '总价', amount: 525252},
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>

  .container{
    font-size: 24rpx;
    color: #555;
  }
  swiper{
    height: 450rpx;
  }
  swiper-item cover-image { 
    position: absolute;
    bottom: 20rpx;
  }
  .banner_img{
    width: 100%;
    height: 450rpx;
  }
  .video_icon{
    left: 20rpx;
    z-index: 100;
    width: 50rpx;
    height: 30rpx;
  }
  .pic_icon{
    right: 100rpx;
    width: 40rpx;
    height: 32rpx;
  }
  .banner_page{
    position: absolute;
    bottom: 20rpx;
    right: 20rpx;
    color: #fff;
    font-size: 28rpx;
  }
  .banner_video{
    width: 100%;
    height: 450rpx;
  }
  
  .product_title{
    font-size: 32rpx;
    text-align: center;
    padding: 28rpx 20rpx;
  }

  .product_address{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }
  .map_icon{
    width: 30rpx;
    height: 33rpx;
    margin-right: 20rpx;
  }
  .border_small{
    color: #ddd;
    margin: 0 40rpx;
  }
  .commision{
    color: #306FF4;
  }

  .product_feature{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20rpx;
    margin-top: 45rpx;
  }
  /* .option{
    height: 94rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 30rpx;
  } */
  .amount{
    color: #306FF4;
    font-size: 36rpx;
    text-align: center;
    margin-bottom: 12rpx;
  }
  .feature_name{
    text-align: center;
  }
  .border_big{
    width: 0;
    height: 60rpx;
    border-left: 1rpx solid #ddd;
  }
 
  
</style>
