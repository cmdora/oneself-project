const menuRouter = [
  {
    path: '/shop',
    name: 'shop',
    meta: {
      title: '商店管理'
    },
    component: resolve => require(["@/layout/shop/shop"], resolve),
    children: [
      {
        path: '/shop/chart',
        name: 'chart',
        meta: {
          title: '图表'
        },
        component: resolve => require(['@/layout/shop/shop_chart'], resolve)
      },
      {
        path: '/shop/map',
        name: 'map',
        meta: {
          title: '地图'
        },
        component: resolve => require(['@/layout/shop/shop_map'], resolve)
      },
      {
        path: '/shop/chart_price',
        name: 'chart_price',
        meta: {
          title: '金额图表'
        },
        component: resolve => require(['@/layout/shop/shop_chart_price'], resolve)
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '用户管理'
    },
    component: resolve => require(["@/layout/user/user"], resolve),
    children: [
      {
        path: '/user/material',
        name: 'material',
        meta: {
          title: '开店资料'
        },
        component: resolve => require(['@/layout/user/user_material'], resolve)
      },
      {
        path: '/user/information',
        name: 'information',
        meta: {
          title: '申请开店'
        },
        component: resolve => require(['@/layout/user/user_information'], resolve)
      }
    ]
  },
  {
    path: '/business',
    name: 'business',
    meta: {
      title: '运营配置'
    },
    component: resolve => require(["@/layout/business/business"], resolve),
    children: [
      {
        path: '/business/search',
        name: 'search',
        meta: {
          title: '运营搜索'
        },
        component: resolve => require(['@/layout/business/business_search'], resolve)
      },
      {
        path: '/business/ad',
        name: 'ad',
        meta: {
          title: '运营广告'
        },
        component: resolve => require(['@/layout/business/business_ad'], resolve)
      },
      {
        path: '/business/classify',
        name: 'classify',
        meta: {
          title: '运营分类'
        },
        component: resolve => require(['@/layout/business/business_classify'], resolve)
      }
    ]
  }
]

export default menuRouter