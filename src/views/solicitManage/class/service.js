import { getClazzForPage, delClazz, saveClazz, updateClazz, importClazzInfo, getClazzById } from '@/api/class'

export const services = {
  getClazzForPage (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getClazzForPage(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  delClazz (data) { // 删除
    return new Promise((resolve, reject) => {
      delClazz(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveClazz (data) { // 新增
    return new Promise((resolve, reject) => {
      saveClazz(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateClazz (data) { // 更新
    return new Promise((resolve, reject) => {
      updateClazz(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getClazzById (data) { // 更新
    return new Promise((resolve, reject) => {
      getClazzById(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  importClazzInfo (data) { // 更新
    return new Promise((resolve, reject) => {
      importClazzInfo(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
