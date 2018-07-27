import Vue from 'vue'
import App from './App'
import store from './store/index'
import fly from './utils/http'
import qs from 'qs'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$http = fly
Vue.mixin({
  onLoad () {
    if (this.$mp && this.$mp.mpType === 'page') {
      wx.setNavigationBarTitle({
        title: this.title || 'wechat'
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
  }
})

const app = new Vue(App)
app.$mount()
