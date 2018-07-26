const constant = require('./const.js');
/**
 * 抓取远端API的结构
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */

module.exports = function (path, params, method) {
    let tokenSecret = constant.getTokenSecret();
    var header = {
        'Accept': 'application/json;charset=UTF-8',
        'content-type': 'application/json;charset=UTF-8',
        'app_id': constant.APP_ID,
        'mx_secret': tokenSecret[1],
        'mx_token': tokenSecret[0],
        'd_brand': constant.getBrand(),
        'd_model': constant.getModel(),
        'd_wxversion': constant.getWxVersion(),
    }

    return new Promise((resolve, reject) => {
        wx.request({
            url: `${constant.API_DOMAIN}${path}`,
            data: params,
            method: method || 'GET',
            header: header,
            success: function(d){
                if (d.data.code == -1){
                    wx.showModal({
                        title: '登录失败',
                        content: '请重新登录',
                        success: function(res) {
                            if (res.confirm) {
                                wx.clearStorageSync();
                                constant.setTokenSecret('', '');
                                wx.reLaunch({
                                    url: '/pages/mine/index/index'
                                });
                            }
                        }
                    })
                } else {
                    resolve(d.data);
                }
            },
            fail: function (d) {
                wx.showToast({
                    title: '网络异常，请稍后重试',
                    icon: 'none',
                    duration: 1000
                });
            }
        });
    })
}
