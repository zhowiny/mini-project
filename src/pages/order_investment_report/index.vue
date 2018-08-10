<template>
  <div class="container">
    <ul class="report">
      <li class="unread">
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
      </li>
      <li>
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
      </li>
      <li>
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
      </li>
      <li>
        <h4>东南亚消费信贷基金 201706月报</h4>
        <p>上传时间: 2018-7-16</p>
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
      @include size(100%, 158px);
      @include flex(space-around, flex-start);
      flex-direction: column;
      margin-top: $small-space;
      padding: $middle-space;
      background: #fff;
      color: $lightColor;
      h4 {
        font-size: 30px;
      }
      p {
        font-size: 26px;
      }
      &.unread h4{
        color: $deepColor;
      }
    }
  }
</style>
