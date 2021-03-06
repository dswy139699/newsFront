import request from '@/utils/request'

const userApi = {
  downloadFillingMoneyStudent: '/export/downloadFillingMoneyStudent', // 导出未补款学生
  downloadIsNotSubscriptionsStudent: '/export/downloadIsNotSubscriptionsStudent', // 导出未征订学生
  downloadPaymentStudent: '/export/downloadPaymentStudent', // 导出所有学生付款信息
  downloadRefundStudent: '/export/downloadRefundStudent', // 导出学生退款信息
  uploadProcessFile: '/export/uploadProcessFile' // 上传流程文件
}

export function downloadFillingMoney (parameter) {
  return request({
    url: userApi.getStudentForPage,
    method: 'get',
    params: parameter
  })
}
export function downloadIsNotSubscriptions (parameter) {
  return request({
    url: userApi.downloadIsNotSubscriptionsStudent,
    method: 'get',
    params: parameter
  })
}

export function downloadPayment (parameter) {
  return request({
    url: userApi.downloadPaymentStudent,
    method: 'get',
    params: parameter
  })
}

export function downloadRefund (parameter) {
  return request({
    url: userApi.downloadRefundStudent,
    method: 'get',
    params: parameter
  })
}
export function uploadProcessFile (parameter) {
  return request({
    url: userApi.uploadProcessFile,
    method: 'post',
    data: parameter
  })
}


