import qs from 'qs'
import {API_DOMAIN, getTokenSecret} from './config'
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  // config.headers['X-Tag'] = 'flyio'
  if (!~config.url.indexOf('?') && !~config.url.indexOf('access_token')) {
    let params = {
      sessionId: getTokenSecret().secret,
      access_token: getTokenSecret().token,
    }
    config.url += `?${qs.stringify(params)}`
  }
  wx.showLoading({
    title: '加载中',
  })
  return config
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
  // 只将请求结果的data字段返回
  wx.hideLoading()
  return response.data
}, err => {
  // 发生网络错误后会走到这里
  wx.hideLoading()
  wx.showToast({
    title: err.status.toString(),
    icon: 'none',
    duration: 3000,
    mask: true,
  })
  return Promise.reject(err)
})
// 配置请求基地址
fly.config.baseURL = API_DOMAIN

export default fly
