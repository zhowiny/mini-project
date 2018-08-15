import fly from '../utils/request'
export default{

  state: {
    orderList: [],
    orderDetail: {},
  },

  getters: {
    // 订单列表
    orderList: state => state.orderList,
    // 订单详情
    orderDetail: state => state.orderDetail,
  },

  mutations: {
    // 设置订单列表
    setOrderList: (state, data) => {
      state.orderList = data
    },
    // 设置订单详情
    setOrderDetail: (state, data) => {
      state.orderDetail = data
    },
  },

  actions: {
    // 获取订单列表
    getOrderList: async ({commit}, params) => {
      try {
        let data = await fly.get('/big_bend/clb/order/query_list', params)
        commit('setOrderList', data.global_order_resp_vos)
      } catch (e) {
        throw new Error(e)
      }
    },
    // 获取订单详情
    getOrderDetail: async ({ commit }, params) => {
      try {
        let data = await fly.get('/big_bend/clb/order/detail_of_advisor', params)
        commit('setOrderDetail', data)
      } catch (e) {
        throw new Error(e)
      }
    },
  }

}
