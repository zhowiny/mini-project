/**
 * 此文件修改后需重启生效 yarn dev
 **/
module.exports = {
  'pages': [
    'pages/finance_details_page/main', //金融 产品详情
    'pages/admin_team_page/main', //产品 资官方管理团队页
    'pages/admin_details_page/main', //产品 资官方详情

    'pages/index/main', // 首页 我的在投
    'pages/account_chart/main', // 账号总览
    'pages/finance/main', // 金融投资列表
    'pages/finance_details/main', // 金融投资详情
    'pages/house/main', // 海外房产列表
    'pages/house_details/main', // 海外房产详情
    'pages/insurance/main', // 海外保险列表
    'pages/insurance_details/main', // 海外保险详情
    'pages/immigrant/main', // 移民护照列表
    'pages/immigrant_details/main', // 移民护照详情
    'pages/reimbursement_record/main', // 回款日历
    'pages/investment_report/main', // 投资报告
    'pages/after_sale/main', // 售后申请
    'pages/file_page/main', // 文件展示页
    'pages/order_investment_report/main', // 订单详情-投资报告
    'pages/order_reimbursement_record/main', // 订单详情-回款记录
    'pages/counter/main',
    'pages/login/main',
    'pages/logs/main'
  ],
  'window': {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#fff',
    'navigationBarTitleText': '美信',
    'navigationBarTextStyle': 'black',
    'backgroundColor': '#f5f5f5'
  },
  'tabBar': {
    'color': '#cccccc',
    'selectedColor': '#5387e3',
    'borderStyle': 'white',
    'backgroundColor': '#fff',
    'list': [
      {
        'pagePath': 'pages/index/main',
        'text': '我的在投',
        'iconPath': 'images/icon_mine.png',
        'selectedIconPath': 'images/icon_mine_selected.png'
      },
      {
        'pagePath': 'pages/login/main',
        'text': '产品推荐',
        'iconPath': 'images/icon_product.png',
        'selectedIconPath': 'images/icon_product_selected.png'
      }
    ]
  }
}
