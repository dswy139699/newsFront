import { getStudent } from '@/api/solicit'

export const services = {
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
