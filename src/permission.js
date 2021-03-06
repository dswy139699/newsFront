import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'
import { LStorage } from '@/store/session.js'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'studentLogin'] // no redirect whitelist
const loginRoutePath = '/user/login'
const defaultRoutePath = '/item/manage'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`))
  /* has token */
  if (LStorage.getItem('token')) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      if (!store.getters.nickname) { // 当页面刷新时
        store
          .dispatch('GetInfo')
          .then(res => {
            // store.dispatch('GetSchool').then().catch().finally(() => {
            // store.dispatch('GetClass')
            const permission = []
            store.dispatch('GenerateRoutes', { roles: permission, user: res.user || {} }).then(() => { // 写死角色，实际应该根据后台传过来的角色信息
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters)
              // 请求带有 redirect 重定向时，登录自动重定向到该地址
              const redirect = decodeURIComponent(from.query.redirect || to.path)
              if (to.path === redirect) {
                  next({ ...to, replace: true })
              } else {
                // 跳转到目的路由
                next({ path: redirect })
              }
            })
            // })
          })
          .catch(() => {
            // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
            // if (store.getters.userInfo.userType?.userType === 'student') {
            //   store.dispatch('OnClear').then(() => {
            //     next({ path: '/student', query: { redirect: to.fullPath } })
            //   })
            // } else {
              store.dispatch('OnClear').then(() => {
                next({ path: loginRoutePath, query: { redirect: to.fullPath } })
              })
            // }
          })
      } else { // 当页面没有刷新时
          next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  window.scrollTo(0, 0)
  NProgress.done() // finish progress bar
})
