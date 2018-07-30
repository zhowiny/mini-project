<template>
  <div class="container">
    <ul class="report unread">
      <li>未读报告</li>
      <li >
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
        <div class="btn">
          <div>查看订单</div>
          <div>查看报告</div>
        </div>
      </li>
    </ul>
    <ul class="report">
      <li>已读报告</li>
      <li>
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
        <div class="btn">
          <div>查看订单</div>
          <div>查看报告</div>
        </div>
      </li>
      <li>
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
        <div class="btn">
          <div>查看订单</div>
          <div>查看报告</div>
        </div>
      </li>
      <li>
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
        <div class="btn">
          <div>查看订单</div>
          <div>查看报告</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '投资报告',
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
  .report {
    li {
      min-height: 158rpx;
      @include flex(space-around, flex-start);
      flex-direction: column;
      margin-top: $small-space;
      padding: $middle-space;
      background: #fff;
      color: $lightColor;
      h4 {
        font-size: 30rpx;
      }
      p {
        font-size: 26rpx;
        padding: $middle-space 0;
      }
    }
    li:first-child {
      min-height: auto;
      @include size(100%, 80rpx);
      background: $backgroundColor;
      color: $deepColor;
      font-size: 26rpx;
      margin-top: 0;
    }
    &.unread li h4{
      color: $deepColor;
    }
    .btn {
      width: 100%;

      @include flex(space-around);
      color: $mainColor;
      div {
        @include size(240rpx, 75rpx);
        @include flex();
        border: 2rpx solid $mainColor;
        border-radius: 35rpx;
      }
    }
  }
</style>
