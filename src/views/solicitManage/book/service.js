import { getTeachingMaterialForPage, importTeachingMaterialInfo, delTeachingMaterial, getTeachingMaterialById, saveTeachingMaterial, updateTeachingMaterial } from '@/api/book'

export const services = {
  getTeachingMaterialForPage (data) { // 查询分页
    return new Promise((resolve, reject) => {
      getTeachingMaterialForPage(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  delTeachingMaterial (data) { // 删除
    return new Promise((resolve, reject) => {
      delTeachingMaterial(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  saveTeachingMaterial (data) { // 新增
    return new Promise((resolve, reject) => {
      saveTeachingMaterial(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateTeachingMaterial (data) { // 更新
    return new Promise((resolve, reject) => {
      updateTeachingMaterial(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getTeachingMaterialById (data) { // 更新
    return new Promise((resolve, reject) => {
      getTeachingMaterialById(data).then(response => {
        resolve(response || {})
      }).catch(error => {
        reject(error)
      })
    })
  },
  importTeachingMaterialInfo (data) { // 更新
    return new Promise((resolve, reject) => {
      importTeachingMaterialInfo(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
