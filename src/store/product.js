import fly from '../utils/request'
export default{

  state: {
    productInfo: {},
    productArticle: {},
    productAdmin: {},
    productAdminTeamDetails: {}
  },

  getters: {
    // 产品基本信息
    productInfo: state => state.productInfo,
    // 产品投资必读
    mustReadDoc: state => state.productInfo.investment_required_documents,
    // 产品书
    productBook: state => state.productInfo.product_book_documents,
    // 产品属性
    productInfoBasic: state => state.productInfo.finance_extend,
    // 是否显示投资亮点
    isShowLight: state => {
      if (state.productInfo.highlights_content === '' && state.productInfo.highlights_title === '') {
        return false
      }
      return true
    },
    // 产品认购流程
    salesProcess: state => state.productInfo.sales_process,
    // 产品QA
    questionList: state => state.productInfo.finance_question_list,
    // 产品介绍文件
    introductionDocuments: state => state.productInfo.introduction_documents,
    // 产品其他文件（阅读）
    readDocuments: state => {
      let intl = state.productInfo.legal_documents_intl || []
      let usa = state.productInfo.legal_documents_usa || []
      let allDocuments = [...intl, ...usa]
      let documents = []
      allDocuments.map((item, index) => {
        if (!item.need_mapped) {
          documents.push(item)
        }
      })
      return documents
    },
    // 产品其他文件（签署）
    signDocuments: state => {
      let intl = state.productInfo.legal_documents_intl || []
      let usa = state.productInfo.legal_documents_usa || []
      let allDocuments = [...intl, ...usa]
      let documents = []
      allDocuments.map((item, index) => {
        if (item.need_mapped) {
          documents.push(item)
        }
      })
      return documents
    },
    // 产品亮点复制文本
    copyText: state => state.productInfo.highlights_content,
    // 产品相关资讯
    productArticle: state => state.productArticle.list,

    // 产品资管方信息
    productAdmin: state => state.productAdmin,
    // 产品资管方团队
    productAdminTeam: state => state.productAdmin.management_team_members,
    // 产品资管方奖项
    productAdminAwards: state => state.productAdmin.management_awards,
    // 产品资管方特色
    productAdminNews: state => state.productAdmin.management_news,
    // 产品资管方产品
    productAdminPro: state => state.productAdmin.management_products,
    // 产品资管方是否为官方渠道
    isAuthority: state => state.productAdmin.is_legalize,
    // 产品资管方标签
    tags: state => {
      let str = state.productAdmin.tag || ''
      return str.split(',')
    },

    // 产品资管方管理团队详情
    productAdminTeamDetails: state => state.productAdminTeamDetails
  },

  mutations: {
    // 设置产品基本信息
    setProductInfo: (state, data) => {
      state.productInfo = data
    },
    // 设置产品相关资讯
    setProductArticle: (state, data) => {
      state.productArticle = data
    },
    // 设置产品资管方信息
    setProductAdmin: (state, data) => {
      state.productAdmin = data
    },
    // 设置产品资管方管理团队
    setProductAdminTeamDetails: (state, data) => {
      state.productAdminTeamDetails = data
    },
  },

  actions: {
    // 获取产品基本信息
    getProductInfo: async ({commit}, product) => {
      try {
        let data = await fly.get('/mini/finance/detail', {
          product_id: product.id,
          product_type: product.type
        })
        commit('setProductInfo', data.body)
      } catch (e) {
        throw new Error(e)
      }
    },
    // 获取产品相关资讯
    getProductArticle: async ({ commit }, product) => {
      try {
        let data = await fly.get('/mini/product/article/list', {
          product_id: product.id,
          product_type: product.type
        })
        commit('setProductArticle', data.body)
      } catch (e) {
        throw new Error(e)
      }
    },
    // 获取产品资管方
    getProductAdmin: async ({ commit }, product) => {
      try {
        let data = await fly.get('/mini/management/detail', {
          management_id: product.management_id,
        })
        commit('setProductAdmin', data.body)
      } catch (e) {
        throw new Error(e)
      }
    },
    getProductAdminTeamDetails: async ({ commit }, product) => {
      try {
        let data = await fly.get('/mini/management/team_list', {
          management_id: product.management_id,
        })
        commit('setProductAdminTeamDetails', data.body)
      } catch (e) {
        throw new Error(e)
      }
    },
  }

}
