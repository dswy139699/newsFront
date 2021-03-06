// with polyfills
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
// import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
// import themePluginConfig from '../config/themePluginConfig'
// import { Icon } from 'ant-design-vue'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
// import './mock'

// import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
// import './utils/filter' // global filter
import './global.less'
import _ from 'lodash'
import * as echarts from 'echarts'
// Vue.use(Pagination)
// Vue.use(Transfer)
// Vue.use(Tree)
// Vue.use(Cascader)
import GlobalForm from '@/components/GlobalForm'
// var echarts = require('echarts/lib/echarts');
// 引入柱状图
// require('echarts/lib/chart/bar')
// require('echarts/lib/chart/gauge')
// // // 引入提示框和标题组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/lib/component/legend')

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.component('GlobalForm', GlobalForm)
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)
// Vue.component('LocaleProvider', LocaleProvider)
Vue.prototype._ = _// lodash
Vue.prototype.$echarts = echarts

// window.umi_plugin_ant_themeVar = themePluginConfig.theme
// const MyIcon = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_2158774_igl3gzbaggd.js' // 在 iconfont.cn 上生成
// })
// Vue.component('IconFont', MyIcon)

new Vue({
  router,
  store,
  // i18n,
  echarts,
  // created: bootstrap,
  render: h => h(App)
}).$mount('#app')
