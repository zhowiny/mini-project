<template>
  <div class="container">
    <wx-pie :data="data"/>
  </div>
</template>

<script>
  import wxPie from '@/components/pie-chart'
  export default {
    data () {
      return {
        title: '账户总览',
        data: [
          {
            title: '固收/类固收',
            value: 10
          },
          {
            title: '房地产基金',
            value: 10
          },
          {
            title: '海外房产',
            value: 100
          },
          {
            title: '家庭信托',
            value: 10
          },
          {
            title: '私募股权',
            value: 10
          },
          {
            title: '公募基金',
            value: 10
          },
          {
            title: '海外保险',
            value: 70
          },
          {
            title: '公募基金',
            value: 10
          },
          {
            title: '公募基金',
            value: 10
          },
          {
            title: '公募基金',
            value: 10
          },
          {
            title: '公募基金',
            value: 10
          },
        ],
      }
    },
    created () {
    },
    components: {
      wxPie
    },
  }
</script>
<style lang="scss" scoped>
  .container {
    background: #fff;
  }
</style>
