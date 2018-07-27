<template>
  <div class="container">
    <div class="file_list">
      <h3>签署文件</h3>
      <ul>
        <li>
          <p>[认购文件-已签署]认购协议</p>
          <image mode="aspectFit" src="/images/icon_download.png" style="width: 50rpx;height:44rpx"></image>
        </li>
        <li>
          <p>[认购文件-已签署]W8表格</p>
          <image mode="aspectFit" src="/images/icon_download.png" style="width: 50rpx;height:44rpx"></image>
        </li>
        <li>
          <p>[认购文件-已签署]合格投资者生命</p>
          <image mode="aspectFit" src="/images/icon_download.png" style="width: 50rpx;height:44rpx"></image>
        </li>
      </ul>
    </div>
    <div class="file_list">
      <h3>确认文件</h3>
      <ul>
        <li>
          <p>xxx认购确认书</p>
          <image mode="aspectFit" src="/images/icon_download.png" style="width: 50rpx;height:44rpx"></image>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '投资文件',
      }
    },
    created () {
    },
    methods: {
    },
    components: {
    },
  }
</script>

<style lang="scss" scoped>
  .file_list {
    font-size: 30rpx;
    padding: 0 $middle-space;
    background: #fff;
    &:not(:first-child) {
      margin-top: $small-space;
    }
    h3, li {
      @include size(100%, 100rpx);
      @include flex(space-between);
      border-bottom: 1rpx solid $borderColor;
      color: $mainColor;
    }
    h3 {
      border-top: 1rpx solid $borderColor;
      color: $deepColor;
    }
  }
</style>
