import request from '@/utils/request'

const userApi = {
  Login: '/auth/login', // 登陆
  Logout: '/auth/logout', // 退出登陆
  UserInfo: '/auth/info' // 获取用户信息
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    data: parameter,
    headers: {
      'userId': parameter.loginId,
      'passWord': parameter.loginPwd
    }
  })
}
export function logout () {
  return request({
    url: userApi.Logout,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function getInfo (parameter) {
  return request({
    url: userApi.UserInfo,
    method: 'post',
    data: parameter
  })
}
