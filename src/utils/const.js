const API_DOMAIN = 'https://test-api-gateway.meixincn.com/'
const APPID = 'wxcd7c5762adbd3cf5' // meixin－c
/** 手机品牌 **/
let dBrand = ''
/** 手机型号 **/
let dModel = ''
/** 屏幕宽度,高;可用宽高 **/
let dScreenWidth
let dScreenHeight
let dWindowWidth
let dWindowHeight
/** 微信版本号 **/
let dWxversion = ''
let mxToken
let mxSecret
/** advisor ID **/
let advisorId
/** 邀请人 ID **/
let introduceId
/** 获取信息弹窗 **/
let modelInfo = false
/** 获取信息弹窗 **/
let hasUserInfo = false

function loadStorage () {
  mxToken = wx.getStorageSync('mxToken')
  mxSecret = wx.getStorageSync('mxSecret')
  advisorId = wx.getStorageSync('advisorId')
}

function getTokenSecret () {
  let token = mxToken || wx.getStorageSync('mxToken')
  let secret = mxSecret || wx.getStorageSync('mxSecret')
  return {token, secret}
}

function setTokenSecret (token, secret) {
  mxToken = token
  mxSecret = secret
  wx.setStorage({key: 'mxToken', data: token})
  wx.setStorage({key: 'mxSecret', data: secret})
}

function getAdvisorId () {
  return advisorId || wx.getStorageSync('advisorId')
}

function setAdvisorId (value) {
  advisorId = value
  wx.setStorage({key: 'advisorId', data: value})
}

function getIntroduceId () {
  return introduceId || wx.getStorageSync('introduceId')
}

function setIntroduceId (value) {
  introduceId = value
  wx.setStorage({key: 'introduceId', data: value})
}

function getUserInfo () {
  return hasUserInfo || wx.getStorageSync('hasUserInfo')
}

function setUserInfo (value) {
  hasUserInfo = value
  wx.setStorage({key: 'hasUserInfo', data: value})
}

function loadSystemInfo () {
  let res = wx.getSystemInfoSync()
  dBrand = res.brand
  dModel = res.model
  dScreenWidth = res.screenWidth
  dScreenHeight = res.screenHeight
  dWindowWidth = res.windowWidth
  dWindowHeight = res.windowHeight
  dWxversion = res.version
}

function getBrand () {
  return dBrand
}

function getModel () {
  return dModel
}

function getDeviceWIndow () {
  return {
    screenWidth: dScreenWidth,
    screenHeight: dScreenHeight,
    windowWidth: dWindowWidth,
    windowHeight: dWindowHeight
  }
}

function getWxVersion () {
  return dWxversion
}

function getModalInfo () {
  return modelInfo
}

function setModalInfo (value) {
  modelInfo = value
}

export {
  API_DOMAIN,
  APPID,
  loadStorage,
  loadSystemInfo,
  getAdvisorId,
  setAdvisorId,
  getTokenSecret,
  setTokenSecret,
  getWxVersion,
  getModel,
  getBrand,
  getDeviceWIndow,
  getIntroduceId,
  setIntroduceId,
  getModalInfo,
  setModalInfo,
  getUserInfo,
  setUserInfo,
}
