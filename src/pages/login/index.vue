<template>
  <div class="container" >
    <button class="getUserInfo" type="primary" v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">微信快捷登录</button>
    <div v-else>请升级微信版本</div>
  </div>
</template>

<script>
import store from '../../store/index'
export default {
  data () {
    return {
      userInfo: {},
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  methods: {
    login () {
      // 调用登录接口
      wx.login({
        success: res => {
          // console.log(res, 'login')
          this.getUserInfo()
        }
      })
    },
    getUserInfo () {
      wx.getUserInfo({
        success: (res) => {
          // console.log(res, 'getInfo')
          this.userInfo = res.userInfo
          store.commit('setUserInfo', this.userInfo)
          wx.redirectTo({
            url: '/pages/index/main',
            success: res => {
              console.log(res, 'success')
            },
            fail: err => {
              console.log(err, 'error')
            }
          })
        }
      })
    },
    bindGetUserInfo (e) {
      // console.log(e)
      if (e.mp.detail.rawData) {
        // 调用应用实例的方法获取全局数据
        this.login()
        console.log('用户按了允许授权按钮')
      } else {
        console.log('用户按了拒绝按钮')
      }
    }
  },
  created () {
    wx.getSetting({
      success: (res) => {
        // console.log(res, 'setting')
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          this.getUserInfo()
        }
      }
    })
  }
}
</script>

<style scoped>
.getUserInfo {
  width: 600rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
