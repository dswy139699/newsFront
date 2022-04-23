import { getSchoolForPage, getSchool, delSchool, saveSchool, updateSchool } from '@/api/school'

export const services = {
  getSchoolForPage (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getSchoolForPage(data).then(response => {
          resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  getSchool (data) { // 查询
    return new Promise((resolve, reject) => {
      getSchool(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  delSchool (data) { // 删除
    return new Promise((resolve, reject) => {
      delSchool(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveSchool (data) { // 新增
    return new Promise((resolve, reject) => {
      saveSchool(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateSchool (data) { // 更新
    return new Promise((resolve, reject) => {
      updateSchool(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
