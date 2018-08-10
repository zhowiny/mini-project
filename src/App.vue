<script>

export default {
  async created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
<<<<<<< HEAD
=======
    // todo 登录获取openid
>>>>>>> d726befff3318d2b98144a2ded98352e3ddb2ae2
    // this.$auth.login()
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
