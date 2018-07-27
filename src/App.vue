<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  },
  onShow () {
    // `this` 指向 vm 实例
    // console.log(this.$store)
  }
}
</script>

<style lang="scss">
view {
  box-sizing: border-box;
}
page {
  background: $backgroundColor;
}
</style>
