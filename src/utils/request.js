import axios from 'axios'
// import store from '@/store'
// import storage from 'store'
import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
// import { ACCESS_TOKEN } from '@/store/mutation-types'
import { LStorage } from '@/store/session.js'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    // const token = storage.get(ACCESS_TOKEN)
    let flag = true
    if (error.response.status === 403) {
      flag = false
      notification.error({
        message: '403,Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401) {
      flag = false
      notification.error({
        message: '401',
        description: '权限验证失败，请重新登录'
      })
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    }
    if (error.response.status === 404) {
      flag = false
      notification.error({
        message: '404',
        description: 'NotFound'
      })
    }
    if (error.response.status === 501) {
      flag = false
      notification.error({
        message: '501',
        description: 'Not implemented'
      })
    }
    if (error.response.status === 503) {
      flag = false
      notification.error({
        message: '503',
        description: 'Service Unavailable'
      })
    }
    if (flag) {
     notification.error({
        message: '错误',
        description: ((error.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
  // else {
  //   notification.error({
  //     message: '错误',
  //     description: error,
  //     duration: 4
  //   })
  // }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  const token = LStorage.getItem('token')
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  // console.log(response)
  if (response.data.code === 0) {
    return response.data.data
  } else {
    notification.error({
      message: '错误',
      description: response.data.message || '请求出现错误，请稍后再试',
      duration: 4
    })
    return Promise.reject(response)
  }
  // if (response.data) {
  // return response.data.data
  // if (response.data.success) {
  // return new Promise((resolve, reject) => {
  //   if (response.data.success) {
  //     resolve(response.data.data)
  //   } else {
  //     notification.error({
  //       message: '错误',
  //       description: response.data.message || '请求出现错误，请稍后再试',
  //       duration: 4
  //     })
  //     reject(response.data.data)
  //   }
  // })

  // } else {
  //   return response.data
  // }
  // }
  // return response
}, errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios
}
