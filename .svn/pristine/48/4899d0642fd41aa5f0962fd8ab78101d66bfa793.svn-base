import request from '@/utils/request'

const userApi = {
  getClazzForPage: '/clazz/getClazzForPage', // 查询学校（分页）
  getClazz: '/clazz/getClazz', // 查询学校
  delClazz: '/clazz/delClazz', // 删除学校
  saveClazz: '/clazz/saveClazz', // 新增学校
  getClazzById: '/clazz/getClazzById', // 查询单个数据信息
  updateClazz: '/clazz/updateClazz', // 更新学校
  importClazzInfo: '/import/importClazzInfo'
}

export function getClazzForPage (parameter) {
  return request({
    url: userApi.getClazzForPage,
    method: 'post',
    data: parameter
  })
}
export function getClazz (parameter) {
  return request({
    url: userApi.getClazz,
    method: 'post',
    data: parameter
  })
}

export function delClazz (parameter) {
  return request({
    url: userApi.delClazz,
    method: 'post',
    data: parameter
  })
}

export function saveClazz (parameter) {
  return request({
    url: userApi.saveClazz,
    method: 'post',
    data: parameter
  })
}
export function updateClazz (parameter) {
  return request({
    url: userApi.updateClazz,
    method: 'post',
    data: parameter
  })
}

export function getClazzById (parameter) {
  return request({
    url: userApi.getClazzById,
    method: 'post',
    data: parameter
  })
}

export function importClazzInfo (parameter) {
  return request({
    url: userApi.importClazzInfo,
    method: 'post',
    timeout: 5 * 6000 * 10, // 五分钟
    data: parameter
  })
}
