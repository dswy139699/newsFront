import { getStudent, getRecordById, getPayed } from '@/api/solicit'

export const services = {
  getStudent (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getStudent(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  getRecordById (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getRecordById(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPayed (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getPayed(data).then(response => {
        resolve(response || 0)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
