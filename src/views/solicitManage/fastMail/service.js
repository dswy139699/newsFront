import { getMessage, getStudent } from '@/api/message'

export const services = {
  getMessage (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getMessage(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  getStudent (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getStudent(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  }
}
