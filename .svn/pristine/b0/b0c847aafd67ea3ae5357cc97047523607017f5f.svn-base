import request from '@/utils/request'

const userApi = {
  getStudent: '/subscriptionsRecord/getSubscriptionsRecordForPage', // 查询学生
  getMessage: '/subscriptionsRecord/getSubscriptionsDetailForPage'// 快件汇总
}

export function getStudent (parameter) {
  return request({
    url: userApi.getStudent,
    method: 'post',
    data: parameter
  })
}

export function getMessage (parameter) {
  return request({
    url: userApi.getMessage,
    method: 'post',
    data: parameter
  })
}
