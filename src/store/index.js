// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
  },

  state: {
    userInfo: {},
    count: 0,
  },
  mutations: {
    setUserInfo: (state, payload) => {
      state.userInfo = payload
    },
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store
