import { getCourseForPage, delCourse, saveCourse, updateCourse, getCourseById, importCourseInfo } from '@/api/course'

export const services = {
  getCourseForPage (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getCourseForPage(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  delCourse (data) { // 删除
    return new Promise((resolve, reject) => {
      delCourse(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveCourse (data) { // 新增
    return new Promise((resolve, reject) => {
      saveCourse(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateCourse (data) { // 更新
    return new Promise((resolve, reject) => {
      updateCourse(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getCourseById (data) { // 更新
    return new Promise((resolve, reject) => {
      getCourseById(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  importCourseInfo (data) { // 更新
    return new Promise((resolve, reject) => {
      importCourseInfo(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
