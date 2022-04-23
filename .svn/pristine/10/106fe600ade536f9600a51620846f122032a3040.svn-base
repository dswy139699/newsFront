import { downloadFillingMoney, downloadIsNotSubscriptions, downloadPayment, downloadRefund } from '@/api/export'

export const services = {
  downloadFillingMoney (data) { // 未补款
    return new Promise((resolve, reject) => {
      downloadFillingMoney(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  downloadIsNotSubscriptions (data) { // 未征订
    return new Promise((resolve, reject) => {
      downloadIsNotSubscriptions(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  downloadPayment (data) { // 付款
    return new Promise((resolve, reject) => {
      downloadPayment(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  downloadRefund (data) { // 退款
    return new Promise((resolve, reject) => {
      downloadRefund(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  }
}
