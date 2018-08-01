import * as config from './config'
import fly from './request'
/* eslint-disable */
import qs from 'qs'
export default {
  getCode () {
    return new Promise((resolve, reject) => {
      wx.login({
        success (res) {
          resolve(res.code)
        },
        fail (e) {
          reject(e)
        }
      })
    })
  },
  getToken (code) {
    let timeStamp = Date.now()
    let param = {
      client_id: 'client2',
      client_secret: 'secret',
      username: code,
      password: timeStamp,
      appId: config.APPID,
      isApp: 'N',
      grant_type: 'password'
    }
    let url = `/oauth/token`
    return fly.post(`${url}?${qs.stringify(param)}`, param)
  },
  getOpenId () {
    let url = `/api/wxAccount/getOpenId`
    return fly.post(url, {})
  },
  checkAccount () {
    //todo 检测账户是否存在,如果存在直接登录,否则去注册开户
  },
  async login () {
    config.loadSystemInfo()
    try {
      let code = await this.getCode()
      let result = await this.getToken(code)
      config.setTokenSecret(result.access_token)
      let openid = await this.getOpenId()
      //todo 获取到了openid,检测openid是否有关联账户 this.checkAccount()
      console.log(openid)
    } catch (e) {
      throw new Error(e)
    }
  },
  install (Vue) {
    Vue.prototype.$auth = this
    Vue.prototype.$http = fly
    Vue.prototype.$config = config
  }
}
