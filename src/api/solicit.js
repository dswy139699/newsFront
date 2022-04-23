import request from '@/utils/request'

const userApi = {
  getStudent: '/subscriptionsRecord/getSubscriptionsRecordForPage', // 查询学生
  getMessage: '/subscriptionsRecord/getSubscriptionsDetailForPage', // 快件汇总
  getSubscriptionsRecordById: '/subscriptionsRecord/getSubscriptionsRecordById',
  getPayed: '/subscriptionsRecord/getSubscriptionsRecordStudentCount'
}

export function getPayed (parameter) {
  return request({
    url: userApi.getPayed,
    method: 'post',
    data: parameter
  })
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

export function getRecordById (parameter) {
  return request({
    url: userApi.getSubscriptionsRecordById,
    method: 'post',
    data: parameter
  })
}
