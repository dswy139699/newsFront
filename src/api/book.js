import request from '@/utils/request'

const userApi = {
  getTeachingMaterialForPage: '/teachingMaterial/getTeachingMaterialForPage', // 查询学校（分页）
  delTeachingMaterial: '/teachingMaterial/delTeachingMaterial', // 删除
  getTeachingMaterial: '/teachingMaterial/getTeachingMaterial', // 删除学校
  getTeachingMaterialById: '/teachingMaterial/getTeachingMaterialById', // 新增学校
  saveTeachingMaterial: '/teachingMaterial/saveTeachingMaterial', // 更新学校
  updateTeachingMaterial: '/teachingMaterial/updateTeachingMaterial',
  importTeachingMaterialInfo: '/import/importTeachingMaterialInfo'
}

export function getTeachingMaterialForPage (parameter) {
  return request({
    url: userApi.getTeachingMaterialForPage,
    method: 'post',
    data: parameter
  })
}
export function delTeachingMaterial (parameter) {
  return request({
    url: userApi.delTeachingMaterial,
    method: 'post',
    data: parameter
  })
}

export function getTeachingMaterial (parameter) {
  return request({
    url: userApi.getTeachingMaterial,
    method: 'post',
    data: parameter
  })
}

export function getTeachingMaterialById (parameter) {
  return request({
    url: userApi.getTeachingMaterialById,
    method: 'post',
    data: parameter
  })
}
export function saveTeachingMaterial (parameter) {
  return request({
    url: userApi.saveTeachingMaterial,
    method: 'post',
    data: parameter
  })
}

export function updateTeachingMaterial (parameter) {
  return request({
    url: userApi.updateTeachingMaterial,
    method: 'post',
    data: parameter
  })
}

export function importTeachingMaterialInfo (parameter) {
  return request({
    url: userApi.importTeachingMaterialInfo,
    timeout: 5 * 6000 * 10, // 五分钟
    method: 'post',
    data: parameter
  })
}
