import Vue from 'vue'
import App from './App'
import store from './store/index'
import plugin from './utils/auth'
import qs from 'qs'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.use(plugin)
Vue.mixin({
  onLoad () {
    if (this.$mp && this.$mp.mpType === 'page') {
      wx.setNavigationBarTitle({
        title: this.title || '美信'
      })
    }
  },
  methods: {
    toPage (params) {
      const {success, fail, complete, type = 'navigateTo', data} = params
      let url = typeof params === 'string' ? params : params.url
      if (qs.stringify(data)) {
        url += `?${qs.stringify(data)}`
      }
      wx[type]({url, success, fail, complete})
    },
    format (date, fmt) {
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    }
  }
})

const app = new Vue(App)
app.$mount()
