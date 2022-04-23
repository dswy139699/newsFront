import { getStudentForPage, importStudentCourseInfo, delStudent, saveStudent, importStudentInfo, updateStudent, getStudentById } from '@/api/student'

export const services = {
  getStudentForPage (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getStudentForPage(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  delStudent (data) { // 删除
    return new Promise((resolve, reject) => {
      delStudent(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveStudent (data) { // 新增
    return new Promise((resolve, reject) => {
      saveStudent(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateStudent (data) { // 更新
    return new Promise((resolve, reject) => {
      updateStudent(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getStudentById (data) { // 更新
    return new Promise((resolve, reject) => {
      getStudentById(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  importStudentInfo (data) { // 更新
    return new Promise((resolve, reject) => {
      importStudentInfo(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  importStudentCourseInfo (data) { // 更新
    return new Promise((resolve, reject) => {
      importStudentCourseInfo(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
