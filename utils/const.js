const API_DOMAIN = 'https://test-api-gateway.meixincn.com';


const APP_ID = 'wxa3890c3ac17c8329';   //mine



/** 手机品牌 **/
var d_brand = '';
/** 手机型号 **/
var d_model = '';
/** 屏幕宽度 **/
var d_screenWidth = '';
/** 微信版本号 **/
var d_wxversion = '';

var mx_token;
var mx_secret;

/** advisor ID **/
var advisor_id;

/** 邀请人 ID **/
var introduce_id;

/** 获取信息弹窗 **/
var model_info = false;

/** 获取信息弹窗 **/
var has_user_info = false;


function loadStorage() {
    mx_token = wx.getStorageSync('mx_token');
    mx_secret = wx.getStorageSync('mx_secret');
    advisor_id = wx.getStorageSync('advisor_id');
}

function getTokenSecret() {
    let token = mx_token;
    if(token == null || token == ''){
        token = wx.getStorageSync('mx_token');
    }

    let secret = mx_secret;
    if(secret == null || secret == ''){
        secret = wx.getStorageSync('mx_secret');
    }

    return [token, secret];
}

function setTokenSecret(token, secret) {

    mx_token = token;
    mx_secret = secret;

    wx.setStorage({key:"mx_token", data:token});
    wx.setStorage({key:"mx_secret", data:secret});
}

function getAdvisorId() {
    let value = advisor_id;
    if(value == null || value == ''){
        value = wx.getStorageSync('advisor_id');
    }

    return value;
}

function setAdvisorId(value) {
    advisor_id = value;
    wx.setStorage({ key: "advisor_id", data: value });
}

function getIntroduceId() {
    let value = introduce_id;
    if(value == null || value == ''){
        value = wx.getStorageSync('introduce_id');
    }

    return value;
}

function setIntroduceId(value) {
    introduce_id = value;
    wx.setStorage({ key: "introduce_id", data: value });
}

function getUserInfo() {
    let value = has_user_info;
    if(value == null || value == ''){
        value = wx.getStorageSync('has_user_info');
    }

    return value;
}

function setUserInfo(value) {
    has_user_info = value;
    wx.setStorage({ key: "has_user_info", data: value });
}

function loadSystemInfo() {
    let res = wx.getSystemInfoSync();
    d_brand = res.brand;
    d_model = res.model;
    d_screenWidth = res.screenWidth;
    d_wxversion = res.version;
}

function getBrand() {
    return d_brand;
}
function getModel() {
    return d_model;
}
function getScreenWidth() {
    return d_screenWidth;
}
function getWxVersion() {
    return d_wxversion;
}

function getModalInfo() {
    return model_info
}
function setModalInfo(value) {
    model_info = value
}

module.exports = {
    API_DOMAIN,
    APP_ID,
    loadStorage,
    loadSystemInfo,
    getAdvisorId,
    setAdvisorId,
    getTokenSecret,
    setTokenSecret,
    getWxVersion,
    getModel,
    getBrand,
    getScreenWidth,
    getIntroduceId,
    setIntroduceId,
    getModalInfo,
    setModalInfo,
    getUserInfo,
    setUserInfo,
}