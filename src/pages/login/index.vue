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
    bindGetUserInfo (e) {
      wx.getUserInfo({
        success: (res) => {
          console.log(res, 'getInfo')
          this.userInfo = res.userInfo
          store.commit('setUserInfo', this.userInfo)
          this.toPage({url: '/pages/index/main', type: 'redirectTo'})
        }
      })
    }
  },
  created () {
    wx.getSetting({
      success: (res) => {
        // console.log(res, 'setting')
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          // this.bindGetUserInfo()
        }
      }
    })
  }
}
</script>

<style scoped>
.getUserInfo {
  width: 600px;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128px;
  height: 128px;
  margin: 20px;
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
