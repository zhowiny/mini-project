<template>
  <div class="container">
    <ul class="records">
      <li>
        <h4><span>还本付息</span><span>+200,456.34</span></h4>
        <p>到账时间: 2018-7-16</p>
      </li>
      <li>
        <h4><span>还本付息</span><span>+200,456.34</span></h4>
        <p>到账时间: 2018-7-16</p>
      </li>
      <li>
        <h4><span>还本付息</span><span>+200,456.34</span></h4>
        <p>到账时间: 2018-7-16</p>
      </li>
      <li>
        <h4><span>还本付息</span><span>+200,456.34</span></h4>
        <p>到账时间: 2018-7-16</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '回款记录',
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
  .records {
    border-top: 1rpx solid transparent;
    li {
      @include size(100%, 158rpx);
      @include flex(space-around, stretch);
      flex-direction: column;
      margin-top: $small-space;
      padding: $middle-space;
      background: #fff;
      color: $lightColor;
      h4 {
        font-size: 30rpx;
        @include flex(space-between);
        color: $deepColor;
      }
      p {
        font-size: 26rpx;
      }
      &.unread h4{
        color: $deepColor;
      }
    }
  }
</style>
