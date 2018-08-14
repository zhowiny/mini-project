/* eslint-disable */
import qs from 'qs'
import { KEY } from './const'
import md5 from 'blueimp-md5'
import {API_DOMAIN, getTokenSecret} from './const'
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  // config.headers['X-Tag'] = 'flyio'
  let md5str = Object.values(config.body).concat(KEY).join('&')
  Object.assign(config.body, {sign: md5(md5str)})
  wx.showLoading({
    title: '加载中',
  })
  return config
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
  wx.hideLoading()
  if (response.data.code === 1 && response.data.msg === 'success') {
    return response.data.body
  }
  wx.showToast({
    title: response.data.msg,
    icon: 'none',
    duration: 3000,
    mask: true,
  })
  return Promise.reject(response.data)
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
