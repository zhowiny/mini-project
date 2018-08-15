// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import order from './order'
import * as $config from '../utils/const'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    order,
  },

  state: {
    userInfo: {},
  },
  getters: {
    userInfo: state => state.userInfo
  },
  mutations: {
    setUserInfo: (state, payload) => {
      state.userInfo = payload
    },
  },
  actions: {
    getUserInfo: ({commit}, params) => {
      let userInfo = {userId: 1688}
      $config.setUserInfo(userInfo)
      commit('setUserInfo', userInfo)
    }
  }
})

export default store
